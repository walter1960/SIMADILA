import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="carousel-container" aria-label="Galerie d'images">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-slide">
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            <button className="prev" onClick={prevSlide} aria-label="Image précédente">&#10094;</button>
            <button className="next" onClick={nextSlide} aria-label="Image suivante">&#10095;</button>
        </div>
    );
};

export default Carousel;
