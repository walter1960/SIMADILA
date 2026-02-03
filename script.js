document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    
    // Auto-advance interval
    let slideInterval;

    function updateSlidePosition() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    }
    
    function startSlideShow() {
        // Clear existing interval if any
        if (slideInterval) clearInterval(slideInterval);
        // Set new interval
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    function stopSlideShow() {
        if (slideInterval) clearInterval(slideInterval);
    }

    // Event Listeners
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            nextSlide();
            // Reset timer when manually interacting
            startSlideShow(); 
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            prevSlide();
            // Reset timer when manually interacting
            startSlideShow();
        });
    }
    
    // Pause on hover
    track.addEventListener('mouseenter', stopSlideShow);
    track.addEventListener('mouseleave', startSlideShow);

    // Initial Start
    startSlideShow();
});
