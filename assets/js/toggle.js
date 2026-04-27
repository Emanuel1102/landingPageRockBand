// button togle 
const toggleMenu = document.querySelector('.main-nav__toggle')
// the menu
const menu = document.querySelector('.main-list')

// when the user click in buttton the menu is displayed
toggleMenu.addEventListener('click', ()=>{
    menu.classList.toggle('show-menu')
})

// the options
const options = menu.querySelectorAll('.main-list__link')
// when  the user select a menu option, the menu is hidden
options.forEach((option)=>{
    option.addEventListener('click', ()=>{
        menu.classList.toggle('show-menu')
    })
})


