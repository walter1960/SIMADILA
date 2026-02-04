document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    let index = 0;

    function showSlide(i) {
        if (!track) return;
        index = (i + slides.length) % slides.length;
        const offset = -index * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    window.nextSlide = function () { showSlide(index + 1); };
    window.prevSlide = function () { showSlide(index - 1); };

    showSlide(0);
    setInterval(() => showSlide(index + 1), 4000);
});
