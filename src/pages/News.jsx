import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const News = () => {
    useScrollAnimation('.section-title, .news-card');
    const [filter, setFilter] = useState('all');

    const newsArticles = [
        {
            id: 1,
            title: "150 enfants scolarisés en 2025 !",
            date: "15 janvier 2026",
            category: "impact",
            image: "/staticfiles/img/boy-holding-white-paper-school.jpg",
            excerpt: "Grâce à votre générosité, nous avons pu scolariser 150 enfants cette année. Un record qui nous pousse à aller encore plus loin.",
            link: "#"
        },
        {
            id: 2,
            title: "Nouveau partenariat avec l'UNESCO",
            date: "8 janvier 2026",
            category: "partenariat",
            image: "/staticfiles/img/front-view-academic-cap-with-books-pencils.jpg",
            excerpt: "Simadila Educ'Action signe un partenariat stratégique avec l'UNESCO pour renforcer l'éducation en Afrique de l'Ouest.",
            link: "#"
        },
        {
            id: 3,
            title: "Distribution de 500 kits scolaires à Dakar",
            date: "20 décembre 2025",
            category: "terrain",
            image: "/staticfiles/img/front-view-colored-pencils-kept-glass-jar-stacked-spiral-notebooks-right-side-blue-color.jpg",
            excerpt: "Notre équipe sur le terrain a distribué 500 kits scolaires complets aux élèves de 5 écoles partenaires à Dakar.",
            link: "#"
        },
        {
            id: 4,
            title: "Témoignage : L'histoire d'Aïcha",
            date: "10 décembre 2025",
            category: "temoignage",
            image: "/staticfiles/img/Capture d'écran 2026-01-16 103733.png",
            excerpt: "Aïcha, 8 ans, nous raconte comment l'école a changé sa vie. Un témoignage émouvant qui rappelle pourquoi nous agissons.",
            link: "#"
        },
        {
            id: 5,
            title: "Rapport annuel 2025 disponible",
            date: "1 décembre 2025",
            category: "transparence",
            image: "/staticfiles/img/front-view-stacked-books-graduation-cap-ladders-education-day.jpg",
            excerpt: "Découvrez notre rapport annuel 2025 : bilan financier, actions menées, et perspectives pour 2026.",
            link: "/publications"
        }
    ];

    const categories = [
        { value: 'all', label: 'Toutes les actualités' },
        { value: 'impact', label: 'Impact' },
        { value: 'terrain', label: 'Terrain' },
        { value: 'partenariat', label: 'Partenariats' },
        { value: 'temoignage', label: 'Témoignages' },
        { value: 'transparence', label: 'Transparence' }
    ];

    const filteredNews = filter === 'all'
        ? newsArticles
        : newsArticles.filter(article => article.category === filter);

    return (
        <section className="section" id="news">
            <div className="container">
                <h2 className="section-title">Actualités</h2>
                <p className="section-subtitle">
                    Suivez nos actions sur le terrain et découvrez l'impact de votre soutien
                </p>

                {/* Filter Tabs */}
                <div className="news-filters">
                    {categories.map(({ value, label }) => (
                        <button
                            key={value}
                            className={`filter-btn ${filter === value ? 'active' : ''}`}
                            onClick={() => setFilter(value)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                {/* News Grid */}
                <div className="news-grid">
                    {filteredNews.map((article) => (
                        <article key={article.id} className="news-card">
                            <div className="news-image">
                                <img src={article.image} alt={article.title} />
                                <span className="news-category">{article.category}</span>
                            </div>
                            <div className="news-content">
                                <time className="news-date">{article.date}</time>
                                <h3 className="news-title">{article.title}</h3>
                                <p className="news-excerpt">{article.excerpt}</p>
                                <Link to={article.link} className="news-link">
                                    Lire la suite <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="news-cta">
                    <h3>Restez informé de nos actions</h3>
                    <p>Inscrivez-vous à notre newsletter pour recevoir nos actualités chaque mois</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Votre email" />
                        <button className="btn">S'inscrire</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
