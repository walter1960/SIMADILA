import { useEffect, useRef } from 'react';

const useScrollAnimation = (selector) => {
    useEffect(() => {
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

        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Only set initial styles if not already visible to avoid pop-in on re-renders
            if (!el.classList.contains('visible')) {
                el.style.opacity = "0";
                el.style.transform = "translateY(20px)";
                el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
                observer.observe(el);
            }
        });

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, [selector]);
};

export default useScrollAnimation;
