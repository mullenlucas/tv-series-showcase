/* eslint-disable */
import './style.css';
import './cardStyles.css';
import Series from './modules/Series';
import createCard from './cards.js';

// Initialize Series Class
const seriesCl = new Series();

let baseUrl = 'https://api.tvmaze.com/shows'

const fetchShows = async () => {
  let response = await fetch(baseUrl)
  let data = await response.json()
 
  data.splice(141).forEach( (el, i) => {
    seriesCl.allSeries.push(el)
    console.log(seriesCl.allSeries[i])
    console.log(seriesCl.allSeries[i].image.medium)
    createCard(i, seriesCl.allSeries[i].name, seriesCl.allSeries[i].image.medium)
  })
};

fetchShows()

// const fetchid = async () => {
//   let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//   })
//   console.log(response)
// };
// fetchid()