// debounce
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}
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
window.addEventListener('resize', debounce(showMobileMenu));

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
// -------------------------------------------------
var paintingContainer = document.querySelector('.painting');
function slide() {
    // ------- painting image and content
    var paintingImage = document.querySelector('.painting-section-image');
    var paintingContent = document.querySelector('.painting-content');
    // ---------- get height of container
    var slideInAt = (window.scrollY + window.innerHeight) - paintingContainer.offsetHeight / 2;
    var containerBottom = paintingContainer.offsetTop + paintingContainer.offsetHeight;
    var halfShown = slideInAt > paintingContainer.offsetTop;
    var notScrolledPast = window.scrollY < containerBottom;
    if(halfShown && notScrolledPast) {
        paintingImage.classList.add('slideInScroll');
        paintingContent.classList.add('slideInScroll');
    } else {

        paintingImage.classList.remove('slideInScroll');
        paintingContent.classList.remove('slideInScroll');
    }

}
window.addEventListener('scroll', debounce(slide));
// ------------------- slide function for drywall section
var drywallContainer = document.querySelector('.drywall');
function drywallSlide() {
    var drywallImage = document.querySelector('.drywall-section-image');
    var drywallContent = document.querySelector('.drywall-content');

    var drywallSlideInAt = (window.scrollY + window.innerHeight) - drywallContainer.offsetHeight / 2;
    var drywallContainerBottom = drywallContainer.offsetTop + drywallContainer.offsetHeight;
    var halfShown = drywallSlideInAt > drywallContainer.offsetTop;
    var notScrolledPast = window.scrollY < drywallContainerBottom;
    if(halfShown && notScrolledPast) {
        drywallImage.classList.add('slideInScroll');
        drywallContent.classList.add('slideInScroll');
    } else {
        drywallImage.classList.remove('slideInScroll');
        drywallContent.classList.remove('slideInScroll');
    }
}
window.addEventListener('scroll', debounce(drywallSlide));