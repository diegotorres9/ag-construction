var menuIcon = document.getElementById('hamburger-icon');
var fullscreenMobileMenu = document.getElementById('fullscreen-mobile-menu');
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
    menuIcon.addEventListener('click', () => {
        fullscreenMobileMenu.classList.add('height');
        menuIcon.classList.toggle('active');
    });
}
openMenu();
// -------------------------------------------------
// function closeMenu() {
//     if(fullscreenMobileMenu.style.width === "100%") {
//         menuIcon.addEventListener('click', () => {
//             fullscreenMobileMenu.classList.remove('height');
//         })
//     }
// }
// closeMenu();