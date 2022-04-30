window.addEventListener('DOMContentLoaded', () => {

  // Varaibles

  const modal = document.querySelector('.modal__window'),
    closeModal = document.querySelector('.modal__close-btn'),
    header = document.querySelector('.header'),
    card = document.querySelectorAll('.card'),
    specialCards = document.querySelectorAll('.card__light'),
    customModeBtn = document.querySelector('.btn__custom-mode'),
    upBtn = document.querySelector('.up__btn'),
    menuBtn = document.querySelector('.header__menu'),
    nav = document.querySelector('.nav')


  // Header menu -- Open//Close functions


  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
    menuBtn.classList.toggle('active')
  })


  // Modal Window -- Open//Close functions

  function openModal() {
    setTimeout(() => {
      modal.style.display = 'flex'
      document.body.style.overflow = 'hidden'
      modal.style.transition = '.5s'
    }, 5000);
  }
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
    document.body.style.overflow = 'scroll'
  })
  openModal()


  // Custom color mode -- Selecting color function  
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


  // ScrollTop function


  window.addEventListener('scroll', () => {
    upBtn.classList.toggle('active', window.scrollY > 500)
  })
  upBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0
  })
})


// Loader function 


setTimeout(() => {
  let loader = document.querySelector('.loader');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.display = 'none'
  }, 2000)
}, 3500)


// OPP -- viewImg section's functions
class Img {
  constructor(el) {
    this.cards = document.querySelectorAll(el.cards)
    this.view = document.querySelector(el.view)
    this.closeBtn = document.querySelector(el.closeBtn)
    this.viewImg = document.querySelector(el.viewImg)


    const mainViewImg = this.viewImg
    const viewArea = this.view
    const closeViewBtn = this.closeBtn

    closeViewBtn.addEventListener('click', () => {
      viewArea.classList.toggle('active')
    })
    for (let i = 0; i < this.cards.length; i++) {
      const element = this.cards[i];
      element.addEventListener('dblclick', function () {
        select(this)
        viewArea.classList.add('active')
      })
    }
    function select(img) {
      let parentDiv = img.closest('.card');
      let mainImg = parentDiv.querySelector('img');
      let imgAtt = mainImg.getAttribute('src');
      mainViewImg.setAttribute('src', `${imgAtt}`)
    }
  }
}

new Img({
  cards: '.card',
  view: '.view',
  viewImg: '.view__img',
  closeBtn: '.view__close'
})
