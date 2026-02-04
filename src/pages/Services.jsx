import { useState } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
    useScrollAnimation('.section-title, .service-card, .tender-card');
    const [activeTab, setActiveTab] = useState('tenders');

    const tenders = [
        {
            id: 1,
            title: "Fourniture de 300 kits scolaires complets",
            reference: "AO-2026-001",
            deadline: "28 février 2026",
            budget: "15,000 €",
            status: "Ouvert",
            location: "Dakar, Sénégal",
            description: "Appel d'offres pour la fourniture de 300 kits scolaires complets (cahiers, stylos, cartables) pour la rentrée 2026.",
            requirements: ["Certification qualité", "Livraison sous 30 jours", "Garantie 1 an"]
        },
        {
            id: 2,
            title: "Construction d'une bibliothèque scolaire",
            reference: "AO-2026-002",
            deadline: "15 mars 2026",
            budget: "45,000 €",
            status: "Ouvert",
            location: "Thiès, Sénégal",
            description: "Appel d'offres pour la construction d'une bibliothèque de 100m² avec mobilier et équipement informatique.",
            requirements: ["Expérience construction", "Assurance décennale", "Références similaires"]
        },
        {
            id: 3,
            title: "Formation des enseignants - Pédagogie numérique",
            reference: "AO-2026-003",
            deadline: "10 avril 2026",
            budget: "8,500 €",
            status: "Ouvert",
            location: "Paris / Dakar (hybride)",
            description: "Prestation de formation pour 25 enseignants sur les outils pédagogiques numériques.",
            requirements: ["Formateur certifié", "Matériel pédagogique inclus", "Suivi post-formation"]
        }
    ];

    const partnershipTypes = [
        {
            icon: "handshake",
            title: "Devenir Partenaire Institutionnel",
            description: "Vous êtes une entreprise, une fondation ou une institution ? Collaborons pour amplifier notre impact.",
            benefits: ["Visibilité sur nos supports", "Rapport d'impact dédié", "Événements exclusifs"],
            cta: "Nous contacter"
        },
        {
            icon: "truck",
            title: "Devenir Prestataire",
            description: "Fournisseurs, constructeurs, formateurs : rejoignez notre réseau de prestataires de confiance.",
            benefits: ["Accès aux appels d'offres", "Paiements sécurisés", "Partenariats long terme"],
            cta: "S'inscrire"
        },
        {
            icon: "users",
            title: "Partenariat Associatif",
            description: "Vous êtes une association locale ? Travaillons ensemble sur le terrain pour maximiser notre impact.",
            benefits: ["Partage de ressources", "Formation mutuelle", "Projets communs"],
            cta: "Proposer un projet"
        }
    ];

    return (
        <section className="section" id="services">
            <div className="container">
                <h2 className="section-title">Services & Partenariats</h2>
                <p className="section-subtitle">
                    Découvrez nos appels d'offres en cours et les opportunités de collaboration
                </p>

                {/* Tabs */}
                <div className="services-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'tenders' ? 'active' : ''}`}
                        onClick={() => setActiveTab('tenders')}
                    >
                        <i className="fas fa-gavel"></i> Appels d'offres
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'partnerships' ? 'active' : ''}`}
                        onClick={() => setActiveTab('partnerships')}
                    >
                        <i className="fas fa-handshake"></i> Partenariats
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'policies' ? 'active' : ''}`}
                        onClick={() => setActiveTab('policies')}
                    >
                        <i className="fas fa-file-contract"></i> Politiques
                    </button>
                </div>

                {/* Tenders Tab */}
                {activeTab === 'tenders' && (
                    <div className="tenders-section">
                        <div className="tenders-intro">
                            <i className="fas fa-info-circle"></i>
                            <p>Tous nos appels d'offres sont ouverts et transparents. Les prestataires intéressés doivent soumettre leur candidature avant la date limite.</p>
                        </div>

                        <div className="tenders-grid">
                            {tenders.map((tender) => (
                                <div key={tender.id} className="tender-card">
                                    <div className="tender-header">
                                        <span className={`tender-status ${tender.status.toLowerCase()}`}>
                                            {tender.status}
                                        </span>
                                        <span className="tender-reference">{tender.reference}</span>
                                    </div>
                                    <h3 className="tender-title">{tender.title}</h3>
                                    <p className="tender-description">{tender.description}</p>

                                    <div className="tender-details">
                                        <div className="tender-detail">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>{tender.location}</span>
                                        </div>
                                        <div className="tender-detail">
                                            <i className="fas fa-calendar"></i>
                                            <span>Échéance : {tender.deadline}</span>
                                        </div>
                                        <div className="tender-detail">
                                            <i className="fas fa-euro-sign"></i>
                                            <span>Budget : {tender.budget}</span>
                                        </div>
                                    </div>

                                    <div className="tender-requirements">
                                        <strong>Prérequis :</strong>
                                        <ul>
                                            {tender.requirements.map((req, index) => (
                                                <li key={index}><i className="fas fa-check"></i> {req}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="tender-actions">
                                        <a href="#" className="btn btn-primary">Télécharger le cahier des charges</a>
                                        <a href="#" className="btn btn-outline">Soumettre une offre</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Partnerships Tab */}
                {activeTab === 'partnerships' && (
                    <div className="partnerships-section">
                        <div className="partnerships-grid">
                            {partnershipTypes.map((type, index) => (
                                <div key={index} className="partnership-card">
                                    <div className="partnership-icon">
                                        <i className={`fas fa-${type.icon} fa-3x`}></i>
                                    </div>
                                    <h3>{type.title}</h3>
                                    <p>{type.description}</p>
                                    <div className="partnership-benefits">
                                        <strong>Avantages :</strong>
                                        <ul>
                                            {type.benefits.map((benefit, i) => (
                                                <li key={i}><i className="fas fa-star"></i> {benefit}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link to="/contact" className="btn">{type.cta}</Link>
                                </div>
                            ))}
                        </div>

                        <div className="current-partners">
                            <h3>Nos Partenaires Actuels</h3>
                            <div className="partners-logos">
                                <div className="partner-logo">UNESCO</div>
                                <div className="partner-logo">UNICEF</div>
                                <div className="partner-logo">Fondation Orange</div>
                                <div className="partner-logo">AFD</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Policies Tab */}
                {activeTab === 'policies' && (
                    <div className="policies-section">
                        <div className="policy-card">
                            <h3><i className="fas fa-balance-scale"></i> Politique d'Achat Responsable</h3>
                            <p>Nous privilégions les fournisseurs locaux, les entreprises sociales et les pratiques durables dans tous nos achats.</p>
                            <a href="#" className="btn btn-outline">Télécharger le document</a>
                        </div>
                        <div className="policy-card">
                            <h3><i className="fas fa-shield-alt"></i> Code de Conduite des Prestataires</h3>
                            <p>Tous nos prestataires s'engagent à respecter notre code de conduite éthique et nos valeurs associatives.</p>
                            <a href="#" className="btn btn-outline">Télécharger le document</a>
                        </div>
                        <div className="policy-card">
                            <h3><i className="fas fa-file-invoice"></i> Politique de Transparence Financière</h3>
                            <p>Découvrez comment nous gérons les fonds et assurons une transparence totale sur nos dépenses.</p>
                            <Link to="/publications" className="btn btn-outline">Voir les rapports</Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
