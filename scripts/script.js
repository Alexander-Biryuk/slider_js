const slides = [
  {
    city: 'Rostov-on-Don <br>LCD admiral',
    area: '81 m2',
    repairTime: '3.5 months',
  },

  {
    city: 'Sochi <br>Thieves',
    area: '105 m2',
    repairTime: '4 months',
  },

  {
    city: 'Rostov-on-Don <br>Patriotic',
    area: '93 m2',
    repairTime: '3 months',
  },
];

const mainSlide = document.querySelector('.main-slide');
const slidesNumber = mainSlide.querySelectorAll('img').length;
mainSlide.style.width = `${679 * slidesNumber}px`;

const nav = document.querySelectorAll('.page2-navigation_item');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const dots = document.querySelectorAll('.dots');

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const repairTime = document.querySelector('.repair-time');

let slideNumber = 0;

nav.forEach((item, index) =>
  item.addEventListener('click', (event) => {
    event.preventDefault();
    slideNumber = index;
    changeSlide(slideNumber);
  })
);

dots.forEach((item, index) =>
  item.addEventListener('click', (event) => {
    event.preventDefault();
    slideNumber = index;
    changeSlide(slideNumber);
  })
);

rightArrow.addEventListener('click', (event) => {
  slideNumber++;
  changeSlide('right');
});

leftArrow.addEventListener('click', (event) => {
  slideNumber--;
  changeSlide('left');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') {
    slideNumber++;
    changeSlide('right');
  } else if (event.key === 'ArrowLeft') {
    slideNumber--;
    changeSlide('left');
  }
});

// функция выделения активной точи
function makeDotActive(dotNumber) {
  dots[dotNumber].setAttribute('src', './images/Dot_light.svg');
  dots.forEach((item, index) => {
    // убрать подсветку с неактивных точек
    if (index !== dotNumber) item.setAttribute('src', './images/Dot_dark.svg');
  });
}
// функция выделения элемента меню
function makeNavItemActive(number) {
  nav[number].classList.add('active');
  nav.forEach((item, index) => {
    // убрать подсветку с неактивных элементов
    if (index !== number) item.classList.remove('active');
  });
}

function changeSlide(direction) {
  if (direction === 'right') {
    if (slideNumber === slidesNumber) {
      slideNumber = 0;
      mainSlide.style.transition = 'unset';
      setTimeout(() => {
        slideNumber = 1;
        mainSlide.style.transition = 'transform 0.5s ease-in-out';
        mainSlide.style.transform = `translateX(-${slideNumber * 679}px)`;
        fillInfo(slideNumber);
      }, 0);
      slideNumber = 0;
    }
  } else if (direction === 'left') {
    if (slideNumber < 0) {
      slideNumber = slidesNumber - 1;
      mainSlide.style.transition = 'unset';
      setTimeout(() => {
        slideNumber = slidesNumber - 2;
        mainSlide.style.transition = 'transform 0.5s ease-in-out';
        mainSlide.style.transform = `translateX(-${slideNumber * 679}px)`;
        fillInfo(slideNumber);
      }, 0);
    }
  }
  if (slideNumber !== slidesNumber - 1) {
    fillInfo(slideNumber);
  } else {
    fillInfo(0);
  }
  mainSlide.style.transform = `translateX(-${slideNumber * 679}px)`;
}

function fillInfo(slideNumber) {
  makeNavItemActive(slideNumber);
  makeDotActive(slideNumber);
  city.innerHTML = slides[slideNumber].city;
  area.innerHTML = slides[slideNumber].area;
  repairTime.innerHTML = slides[slideNumber].repairTime;
}
