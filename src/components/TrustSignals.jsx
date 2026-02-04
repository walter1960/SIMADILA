const TrustSignals = () => {
    const signals = [
        { icon: 'shield-alt', text: 'Paiement 100% sécurisé', color: '#4a9d4f' },
        { icon: 'certificate', text: 'Association reconnue', color: '#ffd700' },
        { icon: 'receipt', text: 'Reçu fiscal 66%', color: '#2c5530' },
        { icon: 'users', text: '1,250+ donateurs', color: '#6c757d' }
    ];

    return (
        <div className="trust-signals-container">
            {signals.map(({ icon, text, color }) => (
                <div key={text} className="trust-badge">
                    <i className={`fas fa-${icon}`} style={{ color }}></i>
                    <span>{text}</span>
                </div>
            ))}
        </div>
    );
};

export default TrustSignals;
