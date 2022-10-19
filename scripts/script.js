const slides = [{ city: 'Rostov-on-Don <br>LCD admiral', 
                  area: '81 m2',
                  repairTime: '3.5 months',
                  image: './images/image2_1.jpg'}, 

                { city: 'Sochi <br>Thieves', 
                  area: '105 m2',
                  repairTime: '4 months',
                  image: './images/image2_2.jpg'}, 

                { city: 'Rostov-on-Don <br>Patriotic', 
                  area: '93 m2',
                  repairTime: '3 months',
                  image: './images/image2_3.jpg'}];

const slideBox = document.querySelector('.completed-projects_photo');

const nav = document.querySelectorAll('.page2-navigation_item');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

const dots = document.querySelectorAll('.dots');

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const repairTime = document.querySelector('.repair-time');

let slideNumber = 0;

nav.forEach((item, index) => item.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = index;
  setSlide(slideNumber);
}));

dots.forEach((item, index) => item.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = index;
  setSlide(slideNumber);
}));

rightArrow.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = slideNumber > 1 ? 0 : slideNumber += 1;
  setSlide(slideNumber);
});

leftArrow.addEventListener('click', (event) => {
  event.preventDefault();
  slideNumber = slideNumber < 1 ? 2 : slideNumber -= 1;
  setSlide(slideNumber);
});
// функция смены слайда
function setSlide(number) {
  slideBox.setAttribute('src', slides[number].image);
  city.innerHTML = slides[number].city;
  area.innerHTML = slides[number].area;
  repairTime.innerHTML = slides[number].repairTime;
  makeNavItemActive(number);
  makeDotActive(number);
};
// функция выделения активной точи
function makeDotActive(dotNumber) {
  dots[dotNumber].setAttribute('src', './images/Dot_light.svg');
  dots.forEach((item, index) => { // убрать подсветку с неактивных точек
    if (index !== dotNumber) item.setAttribute('src', './images/Dot_dark.svg');
  });
};
// функция выделения элемента меню
function makeNavItemActive(number) {
  nav[number].classList.add('active');
  nav.forEach((item, index) => { // убрать подсветку с неактивных элементов
    if (index !== number) item.classList.remove('active');
  });
}
