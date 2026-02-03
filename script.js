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

    // --- Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements to animate
    const animatedElements = document.querySelectorAll('.mission-card, .stat-item, .section-title, .about-text, .about-image');
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)"; // Start slightly down
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });
});
