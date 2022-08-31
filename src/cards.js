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
  heartIcon.setAttribute('class', 'far fa-heart');
  heartIcon.setAttribute('id', `like${id}`);
  subtDiv.appendChild(subt);
  subtDiv.appendChild(heartIcon);
  cardDiv.appendChild(subtDiv);

  const likesDiv = document.createElement('div');
  likesDiv.setAttribute('class', 'likes');
  const numLikes = document.createElement('h5');
  numLikes.innerText = '9 likes';
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