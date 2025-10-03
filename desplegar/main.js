const btnHamburguesa = document.getElementById('btn-hamburguesa')
const menu = document.getElementById('menu')

btnHamburguesa.addEventListener('click', () => {
    menu.classList.toggle('active')
})