console.log('working')

let baseUl = 'https://api.tvmaze.com/shows'
const fetchShow = async () => {
  let response = await fetch(baseUl)
  let data = await response.json()
  return data
};

export const openModal = async(id) => {
  let shows = await fetchShow() 
  let modal = document.querySelector('.modal')
  modal.innerHTML = ` 
  <div class="popup">
  <p id="close" class="close-popup">&times;</p>
  <div class="img-container">
      <img class="series-img" src="${shows[id].image.original}" alt="">
  </div>
  <div class="series-info">
    <p class="series-title">Name: ${shows[id].name}</p>
    <p class="series-length">Length: ${shows[id].averageRuntime} hours</p>
    <p class="series-length">Premiered: ${shows[id].premiered}</p>
    <p class="series-length">Ended: ${shows[id].ended ? shows[id].ended : 'still showing' }</p>
    <p class="series-length">Language: ${shows[id].language}</p>
    <p class="series-length">Ratings: ${shows[id].rating.average ? shows[id].rating.average : 'not available'}</p>
  </div>
  <div class="genres">Genres: ${shows[id].genres ? shows[id].genres : 'not available'}</div>
  <div class="movie-link">Series link:
  <a href="${shows[id].url}" target="_blank"> Watch Here</a>
  </div>
      <h3 class="summary">Synopsis</h3>
      <p class="series-desc">${shows[id].summary.replaceAll(/<b>|<\/b>|<p>|<\/p>/g, '')}</p>
      </div>
      `
      const close = document.querySelector('.close-popup')
      close.addEventListener('click', () => {
      let modal = document.querySelector('.modal')
      modal.classList.toggle('hide') 
      modal.innerHTML = ''

      })
  }
