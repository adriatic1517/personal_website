//----------------------------------------------------------------
// Helper Functions
//----------------------------------------------------------------

function switch_css_to(name) {
  document.getElementById('curr_css').setAttribute("href", "pashto/static/style/" + name);
}

function createDiv(class_ ='', id ='', value='', innerHTML=''){
  let element = document.createElement('div')
  element.setAttribute('class', class_);
  element.setAttribute('id', id);
  element.setAttribute('value', value);
  element.innerHTML=innerHTML;
  return element;
}

function get_and_clone(element) {
    let node = document.getElementById(element).cloneNode(true);
    return node;
}

function clear_container() {
  let container = document.getElementById('container')
  while (container.firstChild) {
     container.removeChild(container.firstChild);
   }
}


function add_to_container(element) {
  document.getElementById('container').appendChild(element);
}

//----------------------------------------------------------------


const main_container = document.body.innerHTML;
const search_area = get_and_clone('search_area');



async function get_suggestions(query) {
  //data format {'query': search query}

 let data = {"query": query};
 if (data['query']){
  const response = await fetch('update_suggestions', {
    method: 'POST',headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
 }).then(raw_data_to => {
  raw_data_to.json()
  .then(add_suggestions_box);
})}
else {
  if ((document.getElementById('suggestions_box'))) {
  document.getElementById('suggestions_box').remove();
}
}}


function add_suggestions_box(data) {
  if (document.getElementById('suggestions_box')) {
    document.getElementById('suggestions_box').remove();
  }
  let suggestions_box = createDiv('suggestions_box', 'suggestions_box');
  for (i = 0; i < data.length; i++){
    if (data[i]['pashto']) {
      let curr = data[i];
      suggestion_innerHTML = (curr['pashto'] + " " + curr['phonetic'] +" " + curr['meaning']).slice(0,50);

      let suggestion = createDiv('suggestion','suggestion', curr['pashto'],suggestion_innerHTML);

      suggestion.addEventListener('click', function() {
       get_meaning({"word":suggestion.getAttribute('value')});

      })
      suggestions_box.append(suggestion);
    }
  }
  add_to_container(suggestions_box);
}


//gets meaning and calls change_to_display_view
async function get_meaning(word) {
  if (word['word']) {
  await fetch('meaning',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  }).then(meaning => {meaning.json().then(set_definition_page)})}}




function set_home_page() {
  switch_css_to('main.css');
  document.body.innerHTML = main_container;
  let input_area = document.getElementById("input_area");
  input_area.addEventListener("click", set_search_page);
}



function set_search_page() {
  let search = search_area;
  clear_container();
  switch_css_to('search.css');

  add_to_container(search);

  let back = create_back_button();
  back.addEventListener('click', function() {
    document.body.innerHTML = '';
    set_home_page();
  });

  add_to_container(back);
  input_area.addEventListener('input', function() {
    let entry = input_area.value.toLowerCase();
    get_suggestions(entry);
  })
  input_area.addEventListener('click', function() {
    input_area.value = '';
  })
  input_area.focus();
}

function set_definition_page(meaning) {
  clear_container();
  switch_css_to('definition.css');
   let back = create_back_button();
  back.addEventListener('click', function() {
    set_search_page();
  });
  add_to_container(back);

  let holder = createDiv('holder', 'holder', 'holder', '');

  let word = createDiv('word', 'word', 'word', meaning['pashto']);
  let phonetic = createDiv('phonetic', 'phonetic', 'phonetic', meaning['phonetic']);
  let definition = createDiv('definition', 'definition', 'definition', meaning['meaning']);


  holder.appendChild(word);
  holder.appendChild(phonetic);

  add_to_container(holder);
 
  add_to_container(definition);
}



function create_back_button(){
  let back = createDiv('back', 'back', '', '\u2190');
  return back;
}




set_home_page();









