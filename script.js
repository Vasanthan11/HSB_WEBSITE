document.addEventListener('DOMContentLoaded', function () {
    handleScrollTopSec()
});


function handleScroll() {
    const scrollPosition = window.scrollY;
    const targetHeight = 100;
    if (scrollPosition >= targetHeight) {


        document.querySelector('.menuCardSection').classList.add('animate-left');
        document.querySelector('.testimonialContainer').classList.add('animate-left');
        document.querySelector('.mapSec').classList.add('animate-right');
        document.querySelector('.formSec').classList.add('animate-left');
        document.querySelector('.formSec').classList.add('animate-left');

        window.removeEventListener('scroll', handleScroll);

    }

}


function handleScrollTopSec() {

    if (true) {

        document.querySelector('.introSectionMainCont').classList.add('animate-left');
        // document.querySelector('.introRight').classList.add('animate-right');

        window.removeEventListener('scroll', handlehandleScrollTopSecScroll);
    }
}

window.addEventListener('scroll', handleScroll);

