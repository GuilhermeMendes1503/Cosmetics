const navSlide = () => {
    const burger = document.querySelector('.nav_burger')
    const nav = document.querySelector('.nav_links')


    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    })
}

navSlide();