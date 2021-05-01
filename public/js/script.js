// import Scrollbar from 'smooth-scrollbar';

// const Scrollbar = require('smooth-scrollbar');

// var rug = require('random-username-generator');

let response;

const get_data = document.getElementById('get-data');

const show_data = document.getElementById('show-data');

const list_container = document.getElementById('list-group');

get_data.style.display = 'block';
show_data.style.display = 'none';

let arr = [];

let i = 0;

function joinChat() {
  genNewUsername();
}

function genNewUsername(){
  // rug.setSeperator('+');
  // const new_username = rug.generate();
  // console.log('new_username:',new_username);
}

function addListItem() {

  if(i < 10){
    const newI = document.createElement('li');
    newI.className = 'list-group-item user-list-item';
    setTimeout(function() {
      newI.innerHTML = arr[i];
      list_container.appendChild(newI);
      newI.dataset.li = i;
      newI.classList.add('show-user-item');
      i++;
    }, 10);
  }
}

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
  .then(response=>response.json());
  console.log('res:', res);
  response = res.map(usr=>usr.name);
  arr = response;
  get_data.style.display = 'none';
  show_data.style.display = 'block';
}