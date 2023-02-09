const scrollers = document.querySelectorAll('[data-scroll]');

scrollers.forEach(a => {
    a.addEventListener('click', () => {
        document.querySelector(a.dataset.scroll).scrollIntoView();
    });
});