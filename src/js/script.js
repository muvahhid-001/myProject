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
  const screenPosition = window.innerHeight / 1

  elementsToShow.forEach(({ selector, className }) => {
    const box = document.querySelector(selector)
    const boxPosition = box.getBoundingClientRect().top

    if (boxPosition < screenPosition) {
      box.classList.add(className)
    } else {
      box.classList.remove(className)
    }
  })
}

document.addEventListener('scroll', handleScroll)

const button = document.querySelector('.menu__buy')
const hidden = document.querySelector('.hidden')
const buy = document.querySelector('.buy')
const non = document.querySelector('.non')
const overlay = document.querySelector('.overlay')
const buttonTwo = document.querySelector('.buy__close')

button.addEventListener('click', function () {
  buy.classList.remove('hidden')
  overlay.classList.remove('non')
})

overlay.addEventListener('click', function () {
  buy.classList.add('hidden')
  overlay.classList.add('non')
})

buttonTwo.addEventListener('click', function () {
  buy.classList.add('hidden')
  overlay.classList.add('non')
})
