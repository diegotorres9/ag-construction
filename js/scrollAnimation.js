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
    console.log(drywallSlideInAt);
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