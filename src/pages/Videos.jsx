import useScrollAnimation from '../hooks/useScrollAnimation';

const Videos = () => {
    useScrollAnimation('.section-title, .video-item');

    return (
        <section className="section" id="videos">
            <div className="container">
                <h2 className="section-title">Nos Vidéos</h2>
                <div className="video-grid">
                    <div className="video-item">
                        <iframe
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
                            title="Vidéo présentation"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-item">
                        <iframe
                            src="https://www.youtube.com/embed/lxSyg1QyCvw?controls=0"
                            title="Reportage terrain"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-item">
                        <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#eee',
                            color: '#666'
                        }}>
                            Plus de vidéos bientôt...
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Videos;
