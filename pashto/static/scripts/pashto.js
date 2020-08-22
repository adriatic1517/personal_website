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

function clear(element) {
  let node = document.getElementById(element)
  while (node.firstChild) {
     node.removeChild(node.firstChild);
   }
}

function add_to_container(element) {
  document.getElementById('container').appendChild(element);
}

//----------------------------------------------------------------


const main_container = document.body.innerHTML;
const search_area_clone = get_and_clone('search_area');






/*-----------------------------------------------------------------------

Home Page 

------------------------------------------------------------------------*/
function set_home_page() {
  /*First View*/
  clear('container');
  switch_css_to('main.css');
  document.body.innerHTML = main_container;
  let input_area = document.getElementById("input_area");
  input_area.addEventListener("click", set_search_page);
}


/*-----------------------------------------------------------------------

Search Page 

------------------------------------------------------------------------*/


function set_search_page() {
let screenWidth = window.screen.width;
if (screenWidth > 700) {
  set_desktop_search_page();
}
else {
  set_mobile_search_page();
}

}

function set_desktop_search_page(){
/*Second View for screens greather than 700px"""*/
  set_home_page();
  search_area_check();
  add_to_container(search_area);
  let input_area = document.getElementById("input_area");


  if (document.getElementById('suggestions_box')) {
      clear('suggestions_box');
    }
  add_input_area_listeners();
  input_area.focus();

}

function set_mobile_search_page() {
  /*Second View for screens less than 700px*/
  search_area_check();

  let back = create_back_button();
  let input_area = document.getElementById("input_area");


  clear('container');
  switch_css_to('search.css');
  add_to_container(search);

  back.addEventListener('click', function() {
    clear('container');
    set_home_page();
  });

   if (document.getElementById('suggestions_box')) {
      clear('suggestions_box');
    }

  add_to_container(back);

  add_input_area_listeners();
  input_area.focus();
}

function search_area_check() {
  let search_area = document.getElementById('search_area');
  if (search_area==null) {
    document.getElementById('container').appendChild(search_area_clone);
  }
}

function add_input_area_listeners(){
  let input_area = document.getElementById("input_area");

   input_area.addEventListener('input',  function() {
    let entry = input_area.value.toLowerCase();
     get_suggestions(entry);
  })
  input_area.addEventListener('click', function() {
    input_area.value = '';
  })
}



function get_suggestions(query) {
  //data format {'query': search query}
 let data = {"query": query};
 if (data['query']){
  const response =  fetch('update_suggestions', {
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
  let suggestions_box = createDiv('suggestions_box', 'suggestions_box');
  if (document.getElementById('suggestions_box')) {
    clear('suggestions_box');
    suggestions_box = document.getElementById('suggestions_box');
  }
  
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


/*-----------------------------------------------------------------------

Home Page 

------------------------------------------------------------------------*/

//gets meaning and sets definition view
 function get_meaning(word) {
  if (word['word']) {
   fetch('meaning',  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(word)
  }).then(meaning => {meaning.json().then(set_definition_page)})}}


function set_definition_page(meaning) {
  clear('container');
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
  holder.appendChild(definition);
  add_to_container(holder);
}



function create_back_button(){
  let back = createDiv('back', 'back', '', '\u2190');
  return back;
}


/*-----------------------------------------------------------------------

Start  

------------------------------------------------------------------------*/

set_home_page();









