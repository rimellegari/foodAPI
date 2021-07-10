//selecting toggle button to change its class

const toggleButton = document.getElementsByClassName('toggle-button')[0]

//selecting nav-item

const navItems = document.getElementsByClassName('nav-list')[0]

toggleButton.addEventListener('click', ()=>{
    navItems.classList.toggle('active')
})