const toggleNav = document.querySelector(`.header__toggle`);
const header = document.querySelector(`.header`);

// Меню
toggleNav.addEventListener("click", () => {
  header.classList.toggle(`header--active`)
});

// Аккордион
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(function(item) {
  const header = item.querySelector('.accordion__header');
  const content = item.querySelector('.accordion__panel');

  header.addEventListener('click', function() {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

