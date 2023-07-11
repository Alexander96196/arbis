const toggleNav = document.querySelector(`.header__toggle`);
const header = document.querySelector(`.header`);

// Меню
toggleNav.addEventListener("click",  () => {
    header.classList.toggle(`header--active`)
  });