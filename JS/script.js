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