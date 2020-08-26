import pandas as pd
import numpy as np
import re
import time
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def ngrams(string, n=2):
    string = re.sub(r'[,-./]|\sBD',r'', string)
    ngrams = zip(*[string[i:] for i in range(n)])
    return [''.join(ngram) for ngram in ngrams]

def search(df,column, word, threshold = 0.5, top=10):
    word = word.encode()
    vectorizer = TfidfVectorizer(min_df=1, analyzer=ngrams) #vectorizer with ngrams
    tf_idf_matrix_clean = vectorizer.fit_transform(df[column]) #fit the data
    tf_idf_matrix_dirty = vectorizer.transform(pd.Series([word])) #transform data on input
    similarity = cosine_similarity(tf_idf_matrix_clean, tf_idf_matrix_dirty) #get cosine_similarity between two 
    similarity = pd.Series([i[0] for i in similarity]) #data_cleaning

    ans = pd.concat([df[column].reset_index(drop=True), similarity], axis=1).sort_values(by=0, ascending=False) #join matrices
    ans.columns = ['word', 'similarity'] 

    ans = ans[ans['similarity']>threshold]
    ans = ans.sort_values(by='similarity', ascending=False)[:top]
    print(ans)
    suggestions = ans['word'].to_list()
    return suggestions

