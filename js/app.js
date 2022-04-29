window.addEventListener('DOMContentLoaded', () => {

  let menuBtn = document.querySelector('.header__menu'),
    nav = document.querySelector('.nav')


  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('active')
  })

  const modal = document.querySelector('.modal__window'),
    closeModal = document.querySelector('.modal__close-btn'),
    header = document.querySelector('.header'),
    card = document.querySelectorAll('.card'),
    specialCards = document.querySelectorAll('.card__light'),
    customModeBtn = document.querySelector('.btn__custom-mode'),
    upBtn = document.querySelector('.up__btn');


  function openModal() {
    setTimeout(() => {
      modal.style.display = 'flex'
      modal.style.transition = '.5s'
    }, 5000);
  }
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
  })
  // openModal()

  customModeBtn.addEventListener('click', () => {
    let request = prompt('Rang kiriting')
    header.style.setProperty('--headerBg', `${request}`)
    card.forEach(element => {
      element.style.setProperty('--custom__card', `${request}`)
    });
    specialCards.forEach(element => {
      element.style.setProperty('--custom__card', `${request}`)
    })
  })


  window.addEventListener('scroll', ()=>{
    upBtn.classList.toggle('active', window.scrollY > 500)
  })
  upBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  })
})