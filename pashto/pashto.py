from flask import Flask, Blueprint, request, render_template, jsonify, make_response


import json
from personal_website.pashto.tries import Trie, Node
import pandas as pd
import numpy as np

with open('/home/e/em/emadsiddiq/app/personal_website/pashto/data/Pashto_Raverty_full.json') as json_file:
    words_dict = json.load(json_file)

def log_error(e):
    print("Error" + str(e))
    with open('pashto/log.txt', 'a') as file:
        file.write(str(e))




dict_trie = Trie()
dict_trie.add_dict(words_dict)
dict_trie.add_dict(words_dict,'normalized')


choices = []
for i in words_dict:
        choices.append(words_dict[i]['pashto'])
        choices.append(words_dict[i]['phonetic'])


df = pd.read_json('/home/e/em/emadsiddiq/app/personal_website/pashto/data/Pashto_Raverty_full.json').transpose()



    


pashto_bp = Blueprint('pashto_bp', __name__,
    template_folder='templates',
    static_folder='static', static_url_path='pashto/static', url_prefix="/pashto")




@pashto_bp.route('/')
def my_form():
    return render_template('form.html')

@pashto_bp.route('/update_suggestions', methods=['POST'])
def my_form_post():
    try:
        query = request.get_json()
        words = dict_trie.keys_with_prefix(query);
        response = [dict_trie.get_data(i) for i in words][:100]
        #if len(response) < 10:
            #response += [dict_trie.get_data(i) for i in get_close_matches(query)]

        return make_response(jsonify(response), 200)
    except Exception as e:
        log_error(e)



@pashto_bp.route('/meaning', methods=['POST'])
def get_meaning():
    try:
        word = request.get_json()
        word = word['word']
        try:
            response = dict_trie.get_data(word)
        except Exception as e:
            print("error")
            response = ''

        return make_response(jsonify(response), 200)
    except Exception as e:
        log_error(e)

@pashto_bp.route('/enter_press', methods=['POST'])
def handle_enter():
    word = request.form["enter_press"]

    return word


