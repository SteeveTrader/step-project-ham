"use strict";

/* services-container--------------------------------------------------*/
const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', (event) => {
    const clickedTab = event.target;
    const textClass = `.js-${event.target.dataset.class}`;
    const textContent = document.querySelector(textClass);

    if (clickedTab.classList.contains('tabs-title')) {
  
    
      const tabs = document.querySelectorAll('.tabs-title');
      tabs.forEach(tab => tab.classList.remove('active'));
  
      clickedTab.classList.add('active');

      if (textContent.classList.contains('text')) {
          const texts = document.querySelectorAll('.text');
          texts.forEach(tab => tab.classList.remove('show-text'));
          textContent.classList.add('show-text');
      }

    }

  });

/*breaking-news--------------------------------------------------*/

const dateItem = document.querySelectorAll('.js-date');

const newDate = new Date();
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const getCurrentMonth = (arr, index) => {
    return arr[index];
};

const dateElements = `
  <div>${newDate.getDate()}</div>
  <div>${getCurrentMonth(month, newDate.getMonth())}</div>
`;

dateItem.forEach((item) => {
  item.insertAdjacentHTML('beforeend', dateElements);
});

/*testimonial-container --------------------------------------------------*/
$(document).ready(function () {

const usersArr = [
  {
    name: 'Jeremy Clarkson',
    image: `url('./IMG/testimonial/JZ.jpg')`,
    profession: 'Mr. Farmer',
    opinion: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Quam, libero saepe deleniti laudantium architecto sapiente omnis veniam minima,  
              cupiditate totam esse repellendus laboriosam aspernatur ipsa in ab odio `,
  },

  {
    name: 'Richard Hammond',
    image: `url('./IMG/testimonial/Hammond.jpg')`,
    profession: 'Hamster',
    opinion: `Libero saepe deleniti laudantium architecto sapiente omnis veniam minima,  
              cupiditate totam esse repellendus laboriosam aspernatur ipsa in ab odio 
              delectus numquam nobis ex! Maiores reprehenderit officia, tempore exercitationem 
              et sint perferendis.`,
  },

  {
    name: 'James May',
    image: `url('./IMG/testimonial/captain-slow.jpg')`,
    profession: 'Captain Slow',
    opinion: `A former soldier, he found that the crowds
              uniquely appreciated his flair for the dramatic, not to mention the spray of blood from each of his
              spinning axes.`,
  },

  {
    name: 'The Stig',
    image: `url('./IMG/testimonial/stig.jpg')`,
    profession: 'Mr. Noname',
    opinion: `Decisive in judgment and lethal in combat, Katarina is a Noxian assassin of the highest caliber. Eldest
              daughter to the legendary General Du Couteau, she made her talents known with swift kills against
              unsuspecting enemies.`,
  },

];

const img = (usersArr[0].image).slice(5,-2);
$('.opinion').text(usersArr[0].opinion);
$('.user-name').text(usersArr[0].name);
$('.profession').text(usersArr[0].profession);
$('.big-image').attr('src', img);   




$('.users-list').on('click', '.small-image-wrap', function () {

  const img = (usersArr[$(this).index()].image).slice(5,-2);
  $('.opinion').text(usersArr[$(this).index()].opinion);
  $('.user-name').text(usersArr[$(this).index()].name);
  $('.profession').text(usersArr[$(this).index()].profession);
  $('.big-image').attr('src', img); 

  $(this).addClass('action');
  $(this).siblings().removeClass('action');
});
}); 

$('.testimotial-list').on('click', '.pervious-btn', function(){
  const actualWrap = $('.action');
  $(actualWrap).removeClass('action');

  const prevWrap = $(actualWrap).prev('.small-image-wrap');
  if (prevWrap.length) {
    $(prevWrap).addClass('action');
  } else {
    $('.small-image-wrap').last().addClass('action');
  }

  $('.small-image-wrap.action').trigger('click');
});


$('.testimotial-list').on('click', '.next-btn', function(){
  const actualWrap = $('.action');
  $(actualWrap).removeClass('action');
  const nextWrap = $(actualWrap).next();
  if (nextWrap.length > 0) {
    $(nextWrap).addClass('action'); 
  } else {
    $('.small-image-wrap').first().addClass('action');
  }
  $('.small-image-wrap.action').trigger('click');
});