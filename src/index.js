import './style.css';
import './popup.css';
import './cardStyles.css';
import './comment.css'
import Series from './modules/Series.js';
import createCard from './cards.js';
import openModal, { addNewComment, fetchComment } from './popup.js';

// Initialize Series Class
const seriesCl = new Series();

const baseUrl = 'https://api.tvmaze.com/shows';

const fetchShows = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  
  data.splice(141).forEach((el) => {
    seriesCl.allSeries.push(el);
  });
};

const populateShows = async () => {
  await fetchShows();
  seriesCl.allSeries.forEach((el, i) => {
    createCard(i, el.name, el.image.medium);
  });
};
populateShows();

// const fetchid = async () => {
//   let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//     method: 'POST',
//   })
//   console.log(response)
// };
// fetchid()

const displayPop = async () => {
  await fetchShows();
  const popup = document.querySelectorAll('.comment-btn');
  const modal = document.querySelector('.modal');
  popup.forEach((el) => {
    el.addEventListener('click', async(e) => {
      const id = Number(e.target.id);
      console.log(id)
      modal.classList.toggle('hide');
      await openModal(id);
      
      const form = document.querySelector('form')
      const addButton = document.querySelector('.add-comment')
      form.addEventListener('submit', async (e) => {
        e.preventDefault()
        let id = Number(addButton.id)
        let comment = form.comment.value
        let user = form.name.value
        await addNewComment(id, user, comment)
        console.log(comment, user)
        form.name.value = ''
        form.comment.value = ''
        await fetchComment(id)
        await openModal(id)

      })      
    });
  });
};

displayPop();