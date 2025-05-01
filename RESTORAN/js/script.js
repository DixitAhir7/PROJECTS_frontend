new WOW().init();

// progress bar
const progressbar = document.getElementById('pBar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressbar.style.width = scrollPercent + '%';
});