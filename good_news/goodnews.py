import newsapi
from newsapi import NewsApiClient
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import os
import datetime
import json
from nltk import tokenize
import time
import logging

logging.basicConfig(filename='app.log', filemode='w', format='%(name)s - %(levelname)s - %(message)s')



source_ids = ['abc-news', 'abc-news-au', 'al-jazeera-english', 'ars-technica', 'associated-press',
'australian-financial-review', 'axios', 'business-insider',
 'cbc-news', 'cbs-news', 'cnbc', 'cnn', 'engadget', 'espn', 'financial-post', 'fortune', 'fox-news',
    'independent', 'medical-news-today', 'msnbc', 'national-geographic', 'national-review', 'nbc-news','new-york-magazine', 'next-big-future',
      'politico', 'reuters', 'rte', 'techcrunch', 'the-hill', 
       'the-huffington-post', 'the-irish-times', 'the-verge', 'the-wall-street-journal',
       'the-washington-post', 'the-washington-times', 'time', 'usa-today', 'vice-news', 'wired']
source_names = ['ABC News',
 'ABC News (AU)',
 'Al Jazeera English',
 'Ars Technica',
 'Associated Press',
 'Australian Financial Review',
 'Axios',
 'Business Insider',
 'CBC News',
 'CBS News',
 'CNBC',
 'CNN',
 'Engadget',
 'ESPN',
 'Financial Post',
 'Fortune',
 'Fox News',
 'Independent',
 'Medical News Today',
 'MSNBC',
 'National Geographic',
 'National Review',
 'NBC News',
 'New York Magazine',
 'Next Big Future',
 'Politico',
 'Reuters',
 'RTE',
 'TechCrunch',
 'The Hill',
 'The Huffington Post',
 'The Irish Times',
 'The Verge',
 'The Wall Street Journal',
 'The Washington Post',
 'The Washington Times',
 'Time',
 'USA Today',
 'Vice News',
 'Wired']

last_update_news = ""


def today_date():
    return datetime.date.today().strftime('%A %d %B %Y')


def retrieve_top_headlines():
    """Download headlines"""
    #newsapi = NewsApiClient(api_key='dab005ad60a7402e9f4d0f5fa35b2646')
    newsapi = NewsApiClient(api_key='60b12e6543ea41d18ee6f3242c33e03b')

    #sources = newsapi.get_sources(language = 'en')
    headlines = []
    today = str(datetime.date.today())
    for i in source_ids:
        try:
            headlines += (newsapi.get_everything(sources=i, from_param=today, to=today)['articles'])
        except:
            pass
    return headlines

def get_news():
    """Sentiment Analysis and data retrieval"""
    print("News updated")

    headlines = retrieve_top_headlines()
    sid = SentimentIntensityAnalyzer()
    scores = {}
    for sentence in headlines:
        if sentence['title'] is not None:
            ss = sid.polarity_scores(sentence['title'])
            scores[ss['compound']]= sentence 

    top_scores = sorted(scores, reverse=True)
    top = [scores[i] for i in top_scores]
    write_headline_data_to_json(top)    
    return top


def write_headline_data_to_json(data):
    """Writes dictionary to headline_data.json"""
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    filename = os.path.join(SITE_ROOT, "data", "headline_data.json")
    with open(filename, 'w') as f:
        json.dump(data, f)

def load_headline_data_from_json():
    """Loads data from headline_data.json"""
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    filename = os.path.join(SITE_ROOT, "data", "headline_data.json")
    with open(filename) as f:
        top_positive_news = json.load(f)
    return top_positive_news
    

def update_headlines():
    """Updates top headlines by calling get_news"""
    logging.info('Headlines updated')
    top_positive_news = get_news()
    write_headline_data_to_json(top_positive_news)

    return top_positive_news
    

def get_top_news(number_headlines):
    try:
        top_positive_news = load_headline_data_from_json()
    except:
        top_positive_news = update_headlines()
    return top_positive_news[0:number_headlines]
