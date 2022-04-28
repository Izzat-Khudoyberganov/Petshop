window.addEventListener('DOMContentLoaded', ()=>{

  let menuBtn = document.querySelector('.header__menu'),
    nav = document.querySelector('.nav')


  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('active')
  })

  const modal = document.querySelector('.modal__window'),
    closeModal = document.querySelector('.modal__close-btn'),
    body = document.querySelector('.header'),
    card = document.querySelectorAll('.card'),
    specialCards = document.querySelectorAll('.card__light')


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

  function mode() {
    let request = prompt('Rang kiriting')
    body.style.setProperty('--custom__bg', `${request}`)
    card.forEach(element => {
      element.style.setProperty('--custom__card', `${request}`)
    });
    specialCards.forEach(element => {
      element.style.setProperty('--custom__card', `${request}`)
    })
  }
  mode()
})