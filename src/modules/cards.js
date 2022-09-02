const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH4l4Y82QQgAWvpqUZUp/likes/';

const likesArr = [];
const fetchLikes = async () => {
  const response = await fetch(likesUrl);
  const data = await response.json();

  data.forEach((el) => {
    likesArr.push(el);
  });
};

const updateLikes = async (id) => {
  await fetchLikes();
  const numLikes = document.getElementById(`numlike${id}`);
  let n = 0;
  likesArr.forEach((l) => {
    if (l.item_id === id) {
      n = l.likes;
    }
  });
  numLikes.innerText = `${n} likes`;
};

let userLikesList = [];
if (localStorage.getItem('userLikes')) {
  userLikesList = JSON.parse(localStorage.userLikes);
}

const giveLike = async (id) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/LH4l4Y82QQgAWvpqUZUp/likes/', {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  userLikesList.push(id);
  localStorage.setItem('userLikes', JSON.stringify(userLikesList));
};

const mainSec = document.getElementById('main-sec-id');
const createCard = (id, txt, imgsrc) => {
  const cardDiv = document.createElement('div');
  cardDiv.setAttribute('id', `card-id${id}`);
  cardDiv.setAttribute('class', 'card');
  const cardImg = document.createElement('img');
  cardImg.setAttribute('id', `card-img${id}`);
  cardImg.setAttribute('class', 'img-class');
  cardImg.setAttribute('src', `${imgsrc}`);
  cardDiv.appendChild(cardImg);

  const subtDiv = document.createElement('div');
  subtDiv.setAttribute('class', 'card-subtitle');
  const subt = document.createElement('h4');
  subt.setAttribute('class', 'subtitle');
  subt.innerText = `${txt}`;

  const heartIcon = document.createElement('i');
  if (userLikesList.includes(id)) {
    heartIcon.setAttribute('class', 'fa-solid fa-heart');
  } else {
    heartIcon.setAttribute('class', 'far fa-heart');
  }
  heartIcon.setAttribute('id', `like${id}`);
  subtDiv.appendChild(subt);
  subtDiv.appendChild(heartIcon);
  cardDiv.appendChild(subtDiv);

  const likesDiv = document.createElement('div');
  likesDiv.setAttribute('class', 'likes');
  const numLikes = document.createElement('h5');
  numLikes.setAttribute('id', `numlike${id}`);

  updateLikes(id);
  if (heartIcon.classList.contains('far')) {
    heartIcon.addEventListener('click', () => {
      const newHeart = document.createElement('i');
      newHeart.setAttribute('id', `like${id}`);
      newHeart.setAttribute('class', 'fa-solid fa-heart');
      heartIcon.parentNode.replaceChild(newHeart, heartIcon);
      giveLike(id);
      const getN = numLikes.innerText;
      const thenum = getN.match(/\d+/)[0];
      numLikes.innerText = `${Number(thenum) + 1} likes`;
    });
  }

  likesDiv.appendChild(numLikes);
  cardDiv.appendChild(likesDiv);
  const commentBtn = document.createElement('button');
  commentBtn.setAttribute('class', 'comment-btn');
  commentBtn.setAttribute('id', `${id}`);
  commentBtn.innerText = 'Comments';
  cardDiv.appendChild(commentBtn);
  mainSec.appendChild(cardDiv);
};

export default createCard;