import Swiper from 'swiper/swiper-bundle';

const toggleNav = document.querySelector(`.header__toggle`);
const header = document.querySelector(`.header`);

// Меню
toggleNav.addEventListener("click", () => {
  header.classList.toggle(`header--active`)
});

// Аккордион
const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(function (item) {
  const header = item.querySelector('.accordion__header');
  const content = item.querySelector('.accordion__panel');

  header.addEventListener('click', function () {
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Инициализация слайдера
new Swiper('.reviews__slider', {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    clickable: true,
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
});

new Swiper('.clients__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 60,
    }
  },
});

new Swiper('.articles__slider', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 6,
});
