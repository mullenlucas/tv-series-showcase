import './css/style.css';
import Series from './modules/Series.js';
import createCard from './modules/cards.js';
import openModal, { addNewComment, fetchComment } from './modules/popup.js';

// Initialize Series Class
const seriesCl = new Series();

const baseUrl = 'https://api.tvmaze.com/shows';

let dat;
const fetchShows = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  dat = data;
};

const populateShows = async () => {
  await fetchShows();

  dat.splice(141).forEach((el) => {
    seriesCl.allSeries.push(el);
  });
  seriesCl.allSeries.forEach((el, i) => {
    createCard(i, el.name, el.image.medium);
  });
  const atvs = document.getElementById('atvs');
  atvs.innerText = `Awesome TV-Series(${seriesCl.allSeries.length})`;
};
populateShows();

const displayPop = async () => {
  await fetchShows();
  const popup = document.querySelectorAll('.comment-btn');
  const modal = document.querySelector('.modal');
  popup.forEach((el) => {
    el.addEventListener('click', async (e) => {
      const id = Number(e.target.id);
      modal.classList.toggle('hide');
      await openModal(id);

      const form = document.querySelector('form');
      const addButton = document.querySelector('.add-comment');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const id = Number(addButton.id);
        const comment = form.comment.value;
        const user = form.name.value;
        await addNewComment(id, user, comment);
        form.name.value = '';
        form.comment.value = '';
        await fetchComment(id);
        await openModal(id);
      });
    });
  });
};

displayPop();