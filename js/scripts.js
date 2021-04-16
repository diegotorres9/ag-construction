var menuIcon = document.getElementById('hamburger-icon');
var fullscreenMobileMenu = document.getElementById('fullscreen-mobile-menu');
function showMobileMenu () {
    var screenWidth = window.innerWidth;
    var fullscreenMenu = document.getElementById('menu');
    if(screenWidth <= 500) {
        fullscreenMenu.classList.add('hide');
        menuIcon.classList.remove('hide');
    } else {
        fullscreenMenu.classList.remove('hide');
        menuIcon.classList.add('hide');
    }
}
showMobileMenu();
window.addEventListener('resize', showMobileMenu());

// ------------------------------------------------ 
function openMenu() {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        if(!fullscreenMobileMenu.classList.contains('height')){
            fullscreenMobileMenu.classList.add('height');
            fullscreenMobileMenu.classList.remove('remove-height');
        } else {
            fullscreenMobileMenu.classList.remove('height');
            fullscreenMobileMenu.classList.add('remove-height');
        }

    });
}
openMenu();