const menu = document.querySelector('#mobile-menu');
const projectsMenu = document.querySelector('#projectsMobile-menu');
const menuLinks = document.querySelector('.navbarMenu');
const projectsMenuLinks = document.querySelector('.projectsNavbarMenu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active'); // Corrected line
});

projectsMenu.addEventListener('click', function(){
    projectsMenu.classList.toggle('is-active');
    projectsMenuLinks.classList.toggle('active'); // Corrected line
});