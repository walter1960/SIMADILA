import { useEffect, useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import DonationAmountSelector from '../components/DonationAmountSelector';
import TrustSignals from '../components/TrustSignals';

const Donate = () => {
    useScrollAnimation('.section-title, .donation-card');
    const [selectedAmount, setSelectedAmount] = useState(50);

    useEffect(() => {
        // Load PayPal SDK
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=sb&currency=EUR&locale=fr_FR`;
        script.async = true;
        script.onload = () => {
            if (window.paypal) {
                renderPayPalButton();
            }
        };
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [selectedAmount]);

    const renderPayPalButton = () => {
        const container = document.getElementById('paypal-button-container');
        if (!container) return;

        container.innerHTML = ''; // Clear previous button

        window.paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'donate',
            },
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: selectedAmount.toString()
                        }
                    }]
                });
            },
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    alert(`Merci pour votre don de ${selectedAmount}€, ${details.payer.name.given_name} ! Votre contribution va scolariser des enfants.`);
                });
            }
        }).render('#paypal-button-container');
    };

    return (
        <section className="section" id="donate">
            <div className="container">
                <h2 className="section-title">Soutenez Nos Actions</h2>
                <p className="donate-intro">
                    Votre contribution change des vies. <strong>Chaque euro compte</strong> pour offrir une éducation de qualité aux enfants d'Afrique de l'Ouest.
                </p>

                {/* Trust Signals */}
                <TrustSignals />

                {/* Impact Message */}
                <div className="impact-message-box">
                    <i className="fas fa-heart fa-2x"></i>
                    <div>
                        <h3>Votre Impact Direct</h3>
                        <p><strong>20€</strong> = 1 mois de fournitures scolaires pour 1 enfant</p>
                        <p><strong>50€</strong> = 3 mois de cantine pour 1 enfant</p>
                        <p><strong>100€</strong> = Scolarisation complète pour 1 trimestre</p>
                    </div>
                </div>

                {/* Amount Selector */}
                <DonationAmountSelector onSelect={setSelectedAmount} />

                <div className="donation-options">
                    {/* Column 1: Online Payment API */}
                    <div className="donation-card" style={{ borderTopColor: 'var(--accent)' }}>
                        <div className="recommended-badge-large">
                            <i className="fas fa-bolt"></i> Recommandé : Instantané & Sécurisé
                        </div>
                        <h3>Paiement en ligne</h3>
                        <p>Payez simplement par Carte Bancaire ou PayPal.</p>

                        {/* PayPal Button Container */}
                        <div className="payment-api-container">
                            <div id="paypal-button-container"></div>
                        </div>
                        <p className="security-note">
                            <i className="fas fa-lock"></i> Transaction sécurisée SSL • Reçu fiscal automatique
                        </p>
                    </div>

                    {/* Column 2: Bank Transfer */}
                    <div className="donation-card">
                        <i className="fas fa-university fa-3x" style={{ color: 'var(--secondary)', marginBottom: '20px' }}></i>
                        <h3>Virement Bancaire</h3>
                        <p>Pour les dons importants ou réguliers, privilégiez le virement.</p>

                        <div className="bank-details-direct">
                            <h3>Coordonnées Bancaires (RIB)</h3>
                            <p><strong>Titulaire :</strong> Simadila Educ'Action</p>
                            <p><strong>Banque :</strong> [Nom de la Banque]</p>
                            <p className="iban-display">
                                IBAN : FR76 XXXX XXXX XXXX XXXX XXXX XXX
                            </p>
                            <p><strong>BIC / SWIFT :</strong> XXXXXXXX</p>
                        </div>

                        <br />
                        <a href="#" className="btn" style={{ backgroundColor: 'var(--gray)' }}>
                            <i className="fas fa-print"></i> Imprimer la fiche complète
                        </a>
                    </div>
                </div>

                {/* Transparency Section */}
                <div className="transparency-section">
                    <h3><i className="fas fa-chart-pie"></i> Où va votre don ?</h3>
                    <div className="transparency-breakdown">
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '80%', backgroundColor: '#4a9d4f' }}></div>
                            <span>80% Actions terrain</span>
                        </div>
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '15%', backgroundColor: '#ffd700' }}></div>
                            <span>15% Frais administratifs</span>
                        </div>
                        <div className="breakdown-item">
                            <div className="breakdown-bar" style={{ width: '5%', backgroundColor: '#6c757d' }}></div>
                            <span>5% Collecte de fonds</span>
                        </div>
                    </div>
                    <p className="transparency-note">
                        <i className="fas fa-info-circle"></i> Consultez notre <a href="/publications">rapport financier complet</a> pour plus de détails.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Donate;
