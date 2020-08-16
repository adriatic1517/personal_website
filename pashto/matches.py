from sklearn.feature_extraction.text import TfidfVectorizer



with open('data/Pashto_Raverty_full.json') as json_file:
    words_dict = pd.read

def ngrams(string, n=3):
    string = re.sub(r'[,-./]|\sBD',r'', string)
    ngrams = zip(*[string[i:] for i in range(n)])
    return [''.join(ngram) for ngram in ngrams]


company_names = names['Company Name']
vectorizer = TfidfVectorizer(min_df=1, analyzer=ngrams)
tf_idf_matrix = vectorizer.fit_transform(company_names)