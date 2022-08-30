
let baseUrl = 'https://api.tvmaze.com/shows'
const fetchShows = async () => {
  let response = await fetch(baseUrl)
  let data = await response.json()
  return data.splice(141)
};

const arry = Array.from({length: 99}, (_, i) => i + 1)

const mainSec = document.getElementById('main-sec-id');
const createCard = (id) => {
  const cardDiv = document.createElement('div')
  cardDiv.setAttribute('id', `card-id${id}`);
  cardDiv.setAttribute('class', 'card');
  const cardImg = document.createElement('img');
  cardImg.setAttribute('id', `card-img${id}`)
  cardImg.setAttribute('class', 'img-class')
  cardDiv.appendChild(cardImg)

  const subtDiv = document.createElement('div')
  subtDiv.setAttribute('class', 'card-subtitle')
  const subt = document.createElement('h4')
  subt.setAttribute('class', 'subtitle')
  const heartIcon = document.createElement('i')
  heartIcon.setAttribute('class', 'like-icon')
  subtDiv.appendChild(subt)
  subtDiv.appendChild(heartIcon)
  cardDiv.appendChild(subtDiv)

  const likesDiv = document.createElement('div')
  likesDiv.setAttribute('class', 'likes')
  const numLikes = document.createElement('h5')
  numLikes.innerText = '9 likes'
  likesDiv.appendChild(numLikes)
  cardDiv.appendChild(likesDiv)
  const commentBtn = document.createElement('button')
  commentBtn.setAttribute('class', 'comment-btn')
  commentBtn.setAttribute('id', `btn-id${id}`)
  commentBtn.innerText = 'Comments'
  cardDiv.appendChild(commentBtn)
  mainSec.appendChild(cardDiv)
}

// arry.forEach( (n) => {
//   createCard(n)
// })

import './cardStyles.css';
import Series from './modules/Series';

const seriesCl = new Series();

let baseUrl = 'https://api.tvmaze.com/shows'
const fetchShows = async () => {
  let response = await fetch(baseUrl)
  let data = await response.json()
  // data.forEach( (n) => {
  // console.log(n.name)
  // })
  data.splice(141).forEach( (el) => {
    seriesCl.allSeries.push(el)
  })
  console.log(seriesCl.allSeries)
};

fetchShows()
console.log(seriesCl.allSeries)