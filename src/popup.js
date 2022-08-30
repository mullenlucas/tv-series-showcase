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
fetchShows()
let comment = document.querySelector('.comment-btn')
comment.innerHTML = ` 

`

const fetchid = async () => {
  let response = await fetch('https://api.tvmaze.com/shows')
  console.log(await response.status)
  let data = await response.json()
  console.log(data)
  console.log(data.splice(141))
};

fetchid()
// https://pokeapi.co/api/v2/pokemon

let popup = document.querySelector('.modal')
let container = document.querySelector('.container-pop')
  popup.addEventListener('click', () => {
    container.classList.toggle('hide')
  }) 

