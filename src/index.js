import './style.css';
import './cardStyles.css';
import Series from './modules/Series.js';
import createCard from './cards.js';

// Initialize Series Class
const seriesCl = new Series();

const baseUrl = 'https://api.tvmaze.com/shows';

const fetchShows = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  data.splice(141).forEach((el, i) => {
    seriesCl.allSeries.push(el);
    createCard(i, seriesCl.allSeries[i].name, seriesCl.allSeries[i].image.medium);
  });
};

fetchShows();

// const fetchid = async () => {
//   let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//   })
//   console.log(response)
// };
// fetchid()