import useScrollAnimation from '../hooks/useScrollAnimation';
import Carousel from '../components/Carousel';

const Gallery = () => {
    useScrollAnimation('.section-title, .carousel-container');

    const images = [
        { src: '/staticfiles/img/boy-holding-white-paper-school.jpg', alt: 'Enfant à l\'école' },
        { src: '/staticfiles/img/Capture d\'écran 2026-01-16 103733.png', alt: 'Activité Simadila' },
        { src: '/staticfiles/img/front-view-colored-pencils-kept-glass-jar-stacked-spiral-notebooks-right-side-blue-color.jpg', alt: 'Fournitures scolaires' },
        { src: '/staticfiles/img/front-view-academic-cap-with-books-pencils.jpg', alt: 'Diplôme' },
        { src: '/staticfiles/img/Capture d\'écran 2026-01-16 103922.png', alt: 'Équipe Simadila' },
        { src: '/staticfiles/img/front-view-stacked-books-graduation-cap-ladders-education-day.jpg', alt: 'Réussite scolaire' }
    ];

    return (
        <section className="section carousel-section" id="galerie">
            <div className="container">
                <h2 className="section-title">Notre Galerie Photo</h2>
                <Carousel images={images} />
            </div>
        </section>
    );
};

export default Gallery;
