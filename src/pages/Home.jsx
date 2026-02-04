import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';
import ImpactCounter from '../components/ImpactCounter';
import TrustSignals from '../components/TrustSignals';

const Home = () => {
    useScrollAnimation('.hero-content, .donation-hero .container, .impact-section, .story-card');

    return (
        <>
            {/* Hero Section with Emotional Storytelling */}
            <section className="hero" id="accueil">
                <video autoPlay muted loop className="video-background" poster="/staticfiles/img/boy-holding-white-paper-school.jpg">
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>

                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    <h1>Éducation pour Tous en Afrique de l'Ouest</h1>
                    <p className="hero-quote">"Grâce à vous, j'ai pu aller à l'école" — Aïcha, 8 ans, Dakar</p>
                    <p className="hero-impact">En 2025, <strong>150 enfants</strong> comme Aïcha ont été scolarisés grâce à votre soutien.</p>
                    <div className="hero-cta-group">
                        <Link to="/mission" className="btn btn-large">Découvrir notre mission</Link>
                        <Link to="/donate" className="btn btn-large btn-outline-white">
                            <i className="fas fa-heart"></i> Faire un don
                        </Link>
                    </div>
                </div>
            </section>

            {/* Impact Section with Counters */}
            <section className="impact-section">
                <div className="container">
                    <h2 className="section-title">Notre Impact en 2025</h2>
                    <p className="section-subtitle">Des chiffres qui témoignent de votre générosité</p>
                    <div className="impact-stats-grid">
                        <ImpactCounter target={150} label="Enfants scolarisés" />
                        <ImpactCounter target={500} label="Kits scolaires distribués" />
                        <ImpactCounter target={1250} label="Donateurs actifs" />
                        <ImpactCounter target={85} label="% de réussite scolaire" suffix="%" />
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="stories-section">
                <div className="container">
                    <h2 className="section-title">Histoires qui Inspirent</h2>
                    <div className="stories-grid">
                        <div className="story-card">
                            <img src="/staticfiles/img/boy-holding-white-paper-school.jpg" alt="Mamadou" />
                            <div className="story-content">
                                <h3>L'histoire de Mamadou</h3>
                                <p>"Avant, je ne pouvais pas aller à l'école. Maintenant, je rêve de devenir médecin pour aider mon village."</p>
                                <span className="story-author">— Mamadou, 10 ans, Thiès</span>
                            </div>
                        </div>
                        <div className="story-card">
                            <img src="/staticfiles/img/Capture d'écran 2026-01-16 103733.png" alt="Fatou" />
                            <div className="story-content">
                                <h3>Le parcours de Fatou</h3>
                                <p>"Grâce aux fournitures scolaires, je peux suivre les cours comme les autres. Je suis première de ma classe !"</p>
                                <span className="story-author">— Fatou, 9 ans, Dakar</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="trust-section">
                <div className="container">
                    <TrustSignals />
                </div>
            </section>

            {/* Donation Hero Section - Optimized */}
            <section className="donation-hero">
                <div className="container">
                    <h2>Votre Soutien Change des Vies</h2>
                    <p className="donation-impact-message">
                        <strong>20€</strong> = 1 mois de fournitures scolaires •
                        <strong>50€</strong> = 3 mois de cantine •
                        <strong>100€</strong> = 1 trimestre complet
                    </p>
                    <div className="donation-cta-group">
                        <Link to="/donate" className="btn btn-large btn-gold">
                            <i className="fas fa-heart"></i> FAIRE UN DON
                        </Link>
                        <Link to="/join" className="btn btn-large btn-outline-white">
                            <i className="fas fa-users"></i> DEVENIR MEMBRE
                        </Link>
                    </div>
                    <p className="donation-reassurance">
                        <i className="fas fa-shield-alt"></i> Paiement 100% sécurisé •
                        <i className="fas fa-receipt"></i> Reçu fiscal 66%
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;

