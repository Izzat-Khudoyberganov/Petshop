
// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

let menuBtn = document.querySelector('.header__menu'),
nav = document.querySelector('.nav')


menuBtn.addEventListener('click', ()=> {
  nav.classList.toggle('active')
  menuBtn.classList.toggle('active')
})

const modal = document.querySelector('.modal__window'),
  closeModal = document.querySelector('.modal__close-btn'),
  body = document.querySelector('body')


function openModal(){
  setTimeout(() => {
    modal.style.display = 'flex'
    modal.style.transition = '.5s'
  }, 5000);
}
closeModal.addEventListener('click', ()=>{
  modal.style.display = 'none'
})
openModal()