import pandas as pd
import numpy as np
import re
import multiprocessing
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.sparse.csr import csr_matrix
from typing import Tuple, NamedTuple, List, Optional
from sparse_dot_topn import awesome_cossim_topn
from functools import wraps


DEFAULT_NGRAM_SIZE = 3
DEFAULT_REGEX = r'[,-./]|\s'
DEFAULT_MAX_N_MATCHES = 20
DEFAULT_MIN_SIMILARITY = 0.8  # Minimum cosine similarity for an item to be considered a match
DEFAULT_N_PROCESSES = multiprocessing.cpu_count() - 1
DEFAULT_IGNORE_CASE = True  # ignores case by default





def match_strings(master, duplicates = None, **kwargs) -> pd.DataFrame:
    """
    Returns all highly similar strings. If only 'master' is given, it will return highly similar strings within master.
    This can be seen as an self-join. If both master and duplicates is given, it will return highly similar strings
    between master and duplicates. This can be seen as an inner-join.
    :param master: pandas.Series. Series of strings against which matches are calculated
    :param duplicates: pandas.Series. Series of strings that will be matched with master if given (Optional)
    :param kwargs: All other keyword arguments are passed to StringGrouperConfig
    :return: pandas.Dataframe
    """
    string_grouper = StringGrouper(master, duplicates=duplicates, **kwargs).fit()
    return string_grouper.get_matches()

def validate_is_fit(f):
    """Validates if the StringBuilder was fit before calling certain public functions"""
    @wraps(f)
    def wrapper(*args, **kwargs):
        if args[0].is_build:
            return f(*args, **kwargs)
        else:
            pass 
    return wrapper


class StringGrouper(object):
    def __init__(self, master, duplicates = None, **kwargs):
        """
        StringGrouper is a class that holds the matrix with cosine similarities between the master and duplicates
        matrix. If duplicates is not given it is replaced by master. To build this matrix the `fit` function must be
        called. It is possible to add and remove matches after building with the add_match and remove_match functions
        :param master: pandas.Series. A series of strings in which similar strings are searched, either against itself
        or against the `duplicates` series.
        :param duplicates: pandas.Series. If set, for each string in duplicates a similar string is searched in Master.
        :param kwargs: All other keyword arguments are passed to StringGrouperConfig
        """
        # Validate input
        if not StringGrouper._is_series_of_strings(master) or \
                (duplicates is not None and not StringGrouper._is_series_of_strings(duplicates)):
            raise TypeError('Input does not consist of pandas.Series containing only Strings')

        self._config: StringGrouperConfig = StringGrouperConfig(**kwargs)
        self._master: pd.Series = master.reset_index(drop=True)
        self._duplicates: pd.Series = duplicates.reset_index(drop=True) if duplicates is not None else None
        self.is_build = False  # indicates if the grouper was fit or not
        self._vectorizer = TfidfVectorizer(min_df=1, analyzer=self.n_grams)
        # After the StringGrouper is build, _matches_list will contain the indices and similarities of two matches
        self._matches_list: pd.DataFrame = pd.DataFrame()

    def n_grams(self, string: str):
        """
        :param string: string to create ngrams from
        :return: list of ngrams
        """
        ngram_size = self._config.ngram_size
        regex_pattern = self._config.regex
        if self._config.ignore_case and string is not None:
            string = string.lower()  # lowercase to ignore all case
        string = re.sub(regex_pattern, r'', string)
        n_grams = zip(*[string[i:] for i in range(ngram_size)])
        return [''.join(n_gram) for n_gram in n_grams]

    def fit(self):
        """Builds the _matches list which contains string matches indices and similarity"""
        master_matrix, duplicate_matrix = self._get_tf_idf_matrices()
        # Calculate the matches using the cosine similarity
        matches = self._build_matches(master_matrix, duplicate_matrix)
        # retrieve all matches
        self._matches_list = self._get_matches_list(matches)
        self.is_build = True
        return self

    @validate_is_fit
    def get_matches(self):
        """Returns a DataFrame with all the matches and their cosine similarity"""
        left_side = self._master[self._matches_list.master_side].reset_index(drop=True)

        if self._duplicates is not None:
            right_side = self._duplicates[self._matches_list.dupe_side].reset_index(drop=True)
        else:
            right_side = self._master[self._matches_list.dupe_side].reset_index(drop=True)

        similarity = self._matches_list.similarity.reset_index(drop=True)
        return pd.DataFrame({
            'left_side': left_side,
            'right_side': right_side,
            'similarity': similarity
        })

  