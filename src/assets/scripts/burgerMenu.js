const burger = document.getElementById('burger')
const burgerButton = document.querySelector('.burger__button')
const burgerMenu = document.getElementById('burger-menu')
const body = document.body

const openBurgerMenu = () => {
  burgerButton.classList.toggle('active')
  burgerMenu.classList.toggle('show')
  body.classList.toggle('locked')
}

burger.addEventListener('click', openBurgerMenu)