window.addEventListener('resize', mobileMenu);

function mobileMenu () {
    var screenWidth = window.innerWidth;
    var fullscreenMenu = document.getElementById('menu');
    var menuIcon = document.getElementById('hamburger-icon');
    // console.log(screenWidth);
    if(screenWidth <= 500) {
        fullscreenMenu.classList.add('hide');
        menuIcon.classList.remove('hide');
    } else {
        fullscreenMenu.classList.remove('hide');
        menuIcon.classList.add('hide');
    }
    // var windowSize = window.scrollX;
    
    // console.log(screenWidth);
    // if(screenWidth <= 500) {
    //     fullscreenMenu.classList.add('hide');
    // }
}
mobileMenu();

// function hideMenu() {
//     var fullscreenMenu = document.getElementById('menu');
//     var screenWidth = window.screen.width;

//     if(screenWidth <= 500) {
//         fullscreenMenu.classList.add('hide');
//     } else {
//         console.log('screen is not 500px');
//     }
// }
// hideMenu();
// console.log(screenWidth);
// console.log(fullscreenMenu);