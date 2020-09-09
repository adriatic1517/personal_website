from flask import Flask, Blueprint, request, render_template, jsonify, make_response


import json
from personal_website.pashto.tries import Trie, Node
from personal_website.pashto.tfidf_search import search 

import pandas as pd
import numpy as np

with open('/Users/emadsiddiq/Projects/personal_website/pashto/data/Pashto_Raverty_full.json') as json_file:
    words_dict = json.load(json_file)
pashto_df = pd.DataFrame(words_dict).transpose()





dict_trie = Trie()
dict_trie.add_dict(words_dict)
dict_trie.add_dict(words_dict,'normalized')






pashto_bp = Blueprint('pashto_bp', __name__,
    template_folder='templates',
    static_folder='static', static_url_path='pashto/static', url_prefix="/pashto")




@pashto_bp.route('/')
def my_form():
    return render_template('form.html')

@pashto_bp.route('/update_suggestions', methods=['POST'])
def my_form_post():
    query = request.get_json()
    words = dict_trie.keys_with_prefix(query);
    response = [dict_trie.get_data(i) for i in words][:100]
    if len(response) < 10:
        query = query.encode('utf-8').strip()
        response += [dict_trie.get_data(i) for i in search(pashto_df, 'normalized', query, 0.5, 10)]
        response += [dict_trie.get_data(i) for i in search(pashto_df, 'pashto', query, 0.5, 10)]


    return make_response(jsonify(response), 200)
    



@pashto_bp.route('/meaning', methods=['POST'])
def get_meaning():
    """Example {'meaning': 's.m. (Pl. of طرف) Sides, skirts, districts, environs,
     confines.', 
    'normalized': 'atraf',
    'pashto': 'اطراف',
    'phonetic': 'at̤-rāf,',
    'root': 'Arabic'}"""
    meaning = request.form['submit_data']
    meaning = json.loads(meaning)
    return render_template('definition.html', word=meaning['pashto'], phonetic=meaning['phonetic'],definition=meaning['meaning'])
    
    

    


@pashto_bp.route('/about')
def render_about():
    return render_template('about.html')


@pashto_bp.route('/disable_form',  methods=['POST'])
def disable_form():
    return False

meanings_dict = {}
for i in words_dict.keys():
    meanings_dict[words_dict[i]['meaning']]= words_dict[i]


@pashto_bp.route('/english')
def english_words():
    return render_template('english.html')







