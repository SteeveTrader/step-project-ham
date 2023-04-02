"use strict";

const workCardsArr = [
        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design1.jpg`,
          icon: `./IMG/icon.svg`,
        },
        
        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design2.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design3.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design4.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design5.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design6.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design7.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design8.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design9.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design10.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design11.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Graphic Design',
          image: `./IMG/graphic-design/graphic-design12.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design1.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design2.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design3.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design4.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design5.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design6.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design7.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design1.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design2.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design3.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design4.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Web Design',
          image: `./IMG/web-design/web-design5.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/graphic-design/graphic-design1.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page1.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page2.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page3.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page4.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page5.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/graphic-design/graphic-design6.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page7.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page1.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page2.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page3.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page4.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Landing Pages',
          image: `./IMG/landing-page/landing-page5.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress1.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress2.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress3.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress4.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress5.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress6.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress7.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress8.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress9.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress10.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress1.jpg`,
          icon: `./IMG/icon.svg`,
        },

        {
          category: 'Creative Design',
          cardName: 'Wordpress',
          image: `./IMG/wordpress/wordpress2.jpg`,
          icon: `./IMG/icon.svg`,
        },  
];

const card = document.querySelector('.cards');
const cardContainer = document.querySelector('.card-container');
const allCards = document.querySelector('.js-all');


const getRandomCard = (arr, len) => {
  const shuffledArr = [...arr]; 
  for (let i = shuffledArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArr[i], shuffledArr[j]] = [shuffledArr[j], shuffledArr[i]];
  }
  return shuffledArr.slice(0, len);
};

const shuffledCards = getRandomCard(workCardsArr, 12);


const getCardsByCardName = (arr, len, index) => {
  const graphicDesignCards = arr.filter(card => card.cardName === index);
  const shuffledCards = [...graphicDesignCards].sort(() => Math.random() - 0.5);
  return shuffledCards.slice(0, len);
};

const a = getCardsByCardName(workCardsArr, 12, 'Graphic Design');
const b = getCardsByCardName(workCardsArr, 12, 'Web Design');
const c = getCardsByCardName(workCardsArr, 12, 'Landing Pages');
const d = getCardsByCardName(workCardsArr, 12, 'Wordpress');



const getCardHtml = (card) => `
  <li class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front" style="background-image: url('${card.image}')"></div>
      <div class="flip-card-back">
        <img src="${card.icon}" alt="${card.cardName}">
        <h3 class="card-category">${card.category}</h3>
        <p class="card-name">${card.cardName}</p>
      </div>
    </div>
  </li>
`;

const cardListHtml = shuffledCards.map(getCardHtml).join('');
const graphicDesignCard = a.map(getCardHtml).join('');
const webDesignCard = b.map(getCardHtml).join('');
const landingPageCard = c.map(getCardHtml).join('');
const wordpressCard = d.map(getCardHtml).join('');

cardContainer.insertAdjacentHTML('beforeend', cardListHtml);

card.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) { 
    return;
  }
  
  if (event.target.dataset.class === 'all') { 
    cardContainer.innerHTML = '';
    cardContainer.insertAdjacentHTML('beforeend', cardListHtml);
    return;
  }

  if (event.target.dataset.class === 'graphic-design') { 
    cardContainer.innerHTML = '';
    cardContainer.insertAdjacentHTML('beforeend', graphicDesignCard);
    return;
  } 

  if (event.target.dataset.class === 'web-design') { 
    cardContainer.innerHTML = '';
    cardContainer.insertAdjacentHTML('beforeend', webDesignCard);
    return;
  } 

  if (event.target.dataset.class === 'landing-pages') { 
    cardContainer.innerHTML = '';
    cardContainer.insertAdjacentHTML('beforeend', landingPageCard);
    return;
  } 

  if (event.target.dataset.class === 'wordpress') { 
    cardContainer.innerHTML = '';
    cardContainer.insertAdjacentHTML('beforeend', wordpressCard);
    return;
  } 


});

const btn = document.querySelector('.load-btn');
const load = document.querySelector('#preloader');

btn.addEventListener('click', elem => {
    load.classList.toggle('active');
    btn.style.display = 'none';

    setTimeout(() => {
      load.classList.toggle('active');
      cardContainer.insertAdjacentHTML('beforeend', cardListHtml);
    }, 3000);
});



