import useScrollAnimation from '../hooks/useScrollAnimation';

const Publications = () => {
    useScrollAnimation('.section-title, .publication-card');

    const publications = [
        {
            id: 1,
            title: "Rapport Annuel 2025",
            type: "Rapport financier",
            date: "Décembre 2025",
            pages: 42,
            size: "2.3 MB",
            icon: "file-pdf",
            color: "#e74c3c",
            description: "Bilan complet de nos actions 2025 : 150 enfants scolarisés, 500 kits distribués, transparence financière totale.",
            downloadLink: "#"
        },
        {
            id: 2,
            title: "Étude d'Impact 2024-2025",
            type: "Étude",
            date: "Novembre 2025",
            pages: 28,
            size: "1.8 MB",
            icon: "file-chart-line",
            color: "#3498db",
            description: "Analyse détaillée de l'impact de nos programmes éducatifs sur la réussite scolaire des enfants bénéficiaires.",
            downloadLink: "#"
        },
        {
            id: 3,
            title: "Guide du Donateur",
            type: "Guide pratique",
            date: "Octobre 2025",
            pages: 12,
            size: "850 KB",
            icon: "file-alt",
            color: "#2ecc71",
            description: "Tout savoir sur les dons : déductibilité fiscale, transparence, suivi de votre contribution.",
            downloadLink: "#"
        },
        {
            id: 4,
            title: "Statuts de l'Association",
            type: "Document légal",
            date: "Janvier 2024",
            pages: 8,
            size: "420 KB",
            icon: "file-contract",
            color: "#9b59b6",
            description: "Statuts officiels de Simadila Educ'Action, association loi 1901 reconnue d'utilité publique.",
            downloadLink: "#"
        },
        {
            id: 5,
            title: "Newsletter Trimestrielle Q4 2025",
            type: "Newsletter",
            date: "Décembre 2025",
            pages: 6,
            size: "1.2 MB",
            icon: "file-image",
            color: "#f39c12",
            description: "Retrouvez toutes nos actualités du dernier trimestre : actions terrain, témoignages, événements.",
            downloadLink: "#"
        },
        {
            id: 6,
            title: "Politique de Protection des Données",
            type: "Document légal",
            date: "Mars 2025",
            pages: 10,
            size: "520 KB",
            icon: "file-shield",
            color: "#1abc9c",
            description: "Notre engagement pour la protection de vos données personnelles (RGPD).",
            downloadLink: "#"
        }
    ];

    return (
        <section className="section" id="publications">
            <div className="container">
                <h2 className="section-title">Publications</h2>
                <p className="section-subtitle">
                    Accédez à tous nos rapports, études et documents officiels en toute transparence
                </p>

                {/* Transparency Message */}
                <div className="transparency-message">
                    <i className="fas fa-eye fa-2x"></i>
                    <div>
                        <h3>Transparence Totale</h3>
                        <p>Tous nos rapports financiers et d'activité sont publics et téléchargeables gratuitement.
                            Nous croyons en la transparence comme pilier de la confiance.</p>
                    </div>
                </div>

                {/* Publications Grid */}
                <div className="publications-grid">
                    {publications.map((pub) => (
                        <div key={pub.id} className="publication-card">
                            <div className="publication-icon" style={{ color: pub.color }}>
                                <i className={`fas fa-${pub.icon} fa-3x`}></i>
                            </div>
                            <div className="publication-content">
                                <span className="publication-type">{pub.type}</span>
                                <h3 className="publication-title">{pub.title}</h3>
                                <p className="publication-description">{pub.description}</p>
                                <div className="publication-meta">
                                    <span><i className="far fa-calendar"></i> {pub.date}</span>
                                    <span><i className="far fa-file"></i> {pub.pages} pages</span>
                                    <span><i className="fas fa-download"></i> {pub.size}</span>
                                </div>
                                <a href={pub.downloadLink} className="btn btn-download">
                                    <i className="fas fa-download"></i> Télécharger PDF
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Archive Section */}
                <div className="publications-archive">
                    <h3>Archives</h3>
                    <p>Consultez nos publications des années précédentes</p>
                    <div className="archive-years">
                        <a href="#" className="archive-year">2024</a>
                        <a href="#" className="archive-year">2023</a>
                        <a href="#" className="archive-year">2022</a>
                        <a href="#" className="archive-year">2021</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
