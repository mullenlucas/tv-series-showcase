const baseUrl = 'https://api.tvmaze.com/shows';

const fetchShows = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};
fetchShows();
const comment = document.querySelector('.comment-btn');
comment.innerHTML = ` 

`;

const fetchid = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  return data;
};

fetchid();
// https://pokeapi.co/api/v2/pokemon

const popup = document.querySelector('.modal');
const container = document.querySelector('.container-pop');
popup.addEventListener('click', () => {
  container.classList.toggle('hide');
});
