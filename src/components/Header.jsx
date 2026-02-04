import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src="/staticfiles/img/LOGO DE SIMADILA.jpeg" alt="Logo Simadila" className="logo-img" />
                    <div>Simadila <span>Educ’Action</span></div>
                </Link>
                <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} aria-label="Menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <nav>
                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Accueil</NavLink></li>
                        <li><NavLink to="/mission" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Mission</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>À Propos</NavLink></li>
                        <li><NavLink to="/join" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Adhérer</NavLink></li>
                        <li><NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Galerie</NavLink></li>
                        <li><NavLink to="/videos" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Vidéos</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
