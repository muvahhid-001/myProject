const elementsToShow = [
  { selector: '.services__h1-two', className: 'visible' },
  { selector: '.lang-img', className: 'visible2' },
  { selector: '.services__h1-three', className: 'visible2' },
  { selector: '.services__h1-four', className: 'visible2' },
  { selector: '.contact__h1-strong', className: 'visible' },
  { selector: '.contact__h1-three', className: 'visible' },
  { selector: '.contact__list', className: 'visible' }
]

const handleScroll = () => {
  const screenPosition = window.innerHeight

  elementsToShow.forEach(({ selector, className }) => {
    const box = document.querySelector(selector)
    if (box) {
      const boxPosition = box.getBoundingClientRect().top
      box.classList.toggle(className, boxPosition < screenPosition)
    }
  })
}

document.addEventListener('scroll', handleScroll)

const button = document.querySelector('.menu__buy')
const hidden = document.querySelector('.hidden')
const buy = document.querySelector('.buy')
const overlay = document.querySelector('.overlay')
const buttonTwo = document.querySelector('.buy__close')

if (button) {
  button.addEventListener('click', () => {
    buy.classList.remove('hidden')
    overlay.classList.remove('non')
  })
}

if (overlay) {
  overlay.addEventListener('click', () => {
    buy.classList.add('hidden')
    overlay.classList.add('non')
  })
}

if (buttonTwo) {
  buttonTwo.addEventListener('click', () => {
    buy.classList.add('hidden')
    overlay.classList.add('non')
  })
}

const buttonMenu = document.querySelector('.menu__mobileBT')
const menuMobile = document.querySelector('.menuMobile')
const overlayBody = document.querySelector('.overlay-body')

const toggleMenu = () => {
  overlayBody.classList.toggle('non')
  menuMobile.style.right = menuMobile.style.right === '0px' ? '-300px' : '0px'
}

if (buttonMenu) {
  buttonMenu.addEventListener('click', toggleMenu)
}

if (overlayBody) {
  overlayBody.addEventListener('click', toggleMenu)
}

const menuMobileBT = document.querySelectorAll('.menuMobile__BT')

menuMobileBT.forEach((button) => {
  button.addEventListener('click', toggleMenu)
})

const video = document.getElementById('myVideo')

video.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen()
  }
})
