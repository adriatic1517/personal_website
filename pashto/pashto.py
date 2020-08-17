from flask import Flask, Blueprint, request, render_template, jsonify, make_response


import json
from personal_website.pashto.tries import Trie, Node
import pandas as pd
import numpy as np
from personal_website.pashto.string_grouper import match_strings, StringGrouper


with open('/home/e/em/emadsiddiq/app/personal_website/pashto/data/Pashto_Raverty_full.json') as json_file:
    words_dict = json.load(json_file)
dict_trie = Trie()
dict_trie.add_dict(words_dict)
dict_trie.add_dict(words_dict,'normalized')


choices = []
for i in words_dict:
        choices.append(words_dict[i]['pashto'])
        choices.append(words_dict[i]['phonetic'])


df = pd.read_json('/home/e/em/emadsiddiq/app/personal_website/pashto/data/Pashto_Raverty_full.json').transpose()

def get_close_matches(user_input):
    search_terms = pd.Series([user_input])
    
    matches_pashto = match_strings(df['pashto'], search_terms, min_similarity = 0.3)
    matches_pashto = matches_pashto.sort_values(by='similarity', ascending=False)
    
    matches_phonetic = match_strings(df['normalized'], search_terms, min_similarity = 0.3)
    matches_phonetic = matches_phonetic.sort_values(by='similarity', ascending=False)

    return matches_pashto['left_side'].to_list() + matches_phonetic['left_side'].to_list()


    


pashto_bp = Blueprint('pashto_bp', __name__,
    template_folder='templates',
    static_folder='static', static_url_path='pashto/static')




@pashto_bp.route('/')
def my_form():
    return render_template('form.html')

@pashto_bp.route('/update_suggestions', methods=['POST'])
def my_form_post():
    query = request.get_json()
    words = dict_trie.keys_with_prefix(query);
    response = [dict_trie.get_data(i) for i in words][:100]
    if len(response) < 10:
        response += [dict_trie.get_data(i) for i in get_close_matches(query)]

    return make_response(jsonify(response), 200)



@pashto_bp.route('/meaning', methods=['POST'])
def get_meaning():
    word = request.get_json()
    print(word)
    word = word['word']
    print(word)
    try:
        response = dict_trie.get_data(word)
    except Exception as e:
        print("error")
        response = ''

    return make_response(jsonify(response), 200)

@pashto_bp.route('/enter_press', methods=['POST'])
def handle_enter():
    word = request.form["enter_press"]

    return word


