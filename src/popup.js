let baseUrl = 'https://api.tvmaze.com/shows'
let data;
const fetchShows = async () => {
  let response = await fetch(baseUrl)
  console.log(await response.status)
  let data = await response.json()
  console.log(data)
  console.log(data.splice(141))
  data = data[0]
  return data
};

let container = document.querySelector('.container-pop')
container.innerHTML = ` 

        <div class="popup">
        <p>${data.summary}</p>
        <p>comment</p>
        <p>input</p>
        <form>
        <input type="text" name="username" placeholder="name" id="">
        <input type="text" name="comment" placeholder="comment" id="">
        <button>Submit</button>
        </form>
        </div>
`

import './style.css';

const fetchid = async () => {
  let response = await fetch('https://api.tvmaze.com/shows')
  console.log(await response.status)
  let data = await response.json()
  console.log(data)
  console.log(data.splice(141))
};

fetchid()
// https://pokeapi.co/api/v2/pokemon

let popup = document.querySelector('.pop')
let container = document.querySelector('.container-pop')
  popup.addEventListener('click', () => {
    container.classList.toggle('hide')
  }) 

