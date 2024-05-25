import React,{useState} from 'react'

//asset
import logo from '/src/assets/img/Logo.png'
import twitter from '/src/assets/img/twitter.png'
import telegram from '/src/assets/img/tlegram.png'

import { scrollToSection } from '../../../utails/functionsModels'

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [collapseOpen, setCollapseOpen] = useState(false);

    const handleSetActive = (id) => {
        setActive(id);
        scrollToSection(id);
    };

    const toggleCollapse = () => {
        setCollapseOpen(!collapseOpen);
    };

    return (
        <header className="header-area" id="header">
            <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="header-left d-flex align-items-center">
                        <a className="navbar-brand navbar-logo" href="https://punchionsol.com/">
                            <img src={logo} alt="" />
                        </a>
                        <div className="social-links">
                            <a href="https://x.com/punchionsol" target="_blank">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="https://t.me/PunchiTalk" target="_blank">
                                <img src={telegram} alt="" />
                            </a>
                        </div>
                    </div>
                    <button
                        className={`navbar-toggler ${collapseOpen ? 'collapsed' : ''}`}
                        type="button"
                        onClick={toggleCollapse}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${collapseOpen ? 'show' : ''}`} id="navbarText">
                        <ul className="navbar-nav main-menu ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className={`nav-item ${active === 'home' ? 'active' : ''}`}>
                                <a onClick={() => handleSetActive('home')} className="nav-link">
                                    Home
                                </a>
                            </li>
                            <li className={`nav-item ${active === 'about' ? 'active' : ''}`}>
                                <a onClick={() => handleSetActive('about')} className="nav-link">
                                    About
                                </a>
                            </li>
                            <li className={`nav-item ${active === 'roadmap' ? 'active' : ''}`}>
                                <a onClick={() => handleSetActive('roadmap')} className="nav-link">
                                    Roadmap
                                </a>
                            </li>
                            <li className={`nav-item ${active === 'tokenomics' ? 'active' : ''}`}>
                                <a onClick={() => handleSetActive('tokenomics')} className="nav-link">
                                    Punchinomics
                                </a>
                            </li>
                            <li className={`nav-item ${active === 'faq' ? 'active' : ''}`}>
                                <a onClick={() => handleSetActive('faq')} className="nav-link">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                        <div className="header-right">
                            <a href="https://punchionsol.com/sell.html" className="boxed-btn mt-0">
                                Connect Wallet
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;