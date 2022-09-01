const baseUl = 'https://api.tvmaze.com/shows';
const fetchShow = async () => {
  const response = await fetch(baseUl);
  let data = await response.json();
  data = data.splice(141);
  return data;
};

const fetchComment = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH4l4Y82QQgAWvpqUZUp/comments/?item_id=${id}`);
  const data = await response.json();
  return data;
};

const addNewComment = async (id, name, comment) => {
  let response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH4l4Y82QQgAWvpqUZUp/comments/', {
    method: 'POST',
    body: JSON.stringify({
    item_id: id,
    username: name,
    comment: comment
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
console.log(await response.status)
}
// fetchid()

const openModal = async (id) => {
  const shows = await fetchShow();
  const comments = await fetchComment(id);
  const modal = document.querySelector('.modal');
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
    <p class="series-length">Ended: ${shows[id].ended ? shows[id].ended : 'still showing'}</p>
    <p class="series-length">Language: ${shows[id].language}</p>
    <p class="series-length">Ratings: ${shows[id].rating.average ? shows[id].rating.average : 'not available'}</p>
  </div>
  <div class="genres">Genres: ${shows[id].genres ? shows[id].genres : 'not available'}</div>
  <div class="movie-link">Series link:
  <a href="${shows[id].url}" target="_blank"> Watch Here</a>
  </div>
      <h3 class="summary">Synopsis</h3>
      <p class="series-desc">${shows[id].summary.replaceAll(/<b>|<\/b>|<p>|<\/p>/g, '')}</p>
      <div class="comment-section">
      <h4 class="center-comment">Comments (${comments.length ? comments.length : 0})</h4>
      <div class="comment-list">
      ${comments.length >= 1
    ? comments.map((comment) => `<p>${comment.creation_date} ${comment.username}: ${comment.comment} </p>`).join('')
    : '<p>No available comment</p>'}
    </div>
      <h4 class="center-comment">Add a comment</h4>
      <form class="form-comment">
      <input type="text" name="name" class="username" placeholder="add your name">
      <textarea name="comment" id="" rows="5" placeholder="add your review"></textarea>
      <button type="submit" class="add-comment" id="${id}">submit comment</button>
      </form>
      </div>
</div>
      `;
  const close = document.querySelector('.close-popup');
  close.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('hide');
    modal.innerHTML = '';
  });

  const form = document.querySelector('form')
  const addButton = document.querySelector('.add-comment')
  form.addEventListener('submit', async (e) => {
    let id = Number(addButton.id)
    e.preventDefault()
    let comment = form.comment.value
    let user = form.name.value
    await addNewComment(id, user, comment)
    form.name.value = ''
    form.comment.value = ''
    await fetchComment()
  })
};

export default openModal;
