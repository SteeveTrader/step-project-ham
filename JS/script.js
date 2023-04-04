"use strict";

const searchForm  = document.querySelector('.search-form-container');
const searchPlace = document.querySelector('.js-search-place');
const btnTurnBack = document.querySelector('.js-btn-turn-back');
const btnSearch = document.querySelector('.js-btn-search');

searchPlace.classList.add('search-style');
btnTurnBack.classList.add('btn-visibility-style');
btnSearch.classList.add('btn-visibility-style');


/*----------------------*/
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

/* Breaking News-------------------*/

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