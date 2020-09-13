var menuIcon = document.getElementById('hamburger-icon');
function showMobileMenu () {
    var screenWidth = window.innerWidth;
    var fullscreenMenu = document.getElementById('menu');
    // console.log(screenWidth);
    if(screenWidth <= 500) {
        fullscreenMenu.classList.add('hide');
        menuIcon.classList.remove('hide');
    } else {
        fullscreenMenu.classList.remove('hide');
        menuIcon.classList.add('hide');
    }
}
showMobileMenu();
window.addEventListener('resize', showMobileMenu);

// ------------------------------------------------ 
function openMenu() {
    var fullscreenMobileMenu = document.getElementById('fullscreen-mobile-menu');
    menuIcon.addEventListener('click', () => {
        // console.log(this.menuIcon);
        fullscreenMobileMenu.classList.add('height');
        // fullscreenMobileMenu.style.width = "100%" && fullscreenMobileMenu.classList.add('width');
    });
}
openMenu();