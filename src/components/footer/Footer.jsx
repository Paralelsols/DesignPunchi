import React from 'react'

//asset
import FooterLogo from '/src/assets/img/FooterLogo.png'
import footercat from '/src/assets/img/footercat.png'
import socialIcon1 from '/src/assets/img/socialIcon1.png'
import socialIcon2 from '/src/assets/img/socialIcon2.png'
import socialIcon3 from '/src/assets/img/socialIcon3.png'
import socialIcon4 from '/src/assets/img/socialIcon4.png'
import socialIcon5 from '/src/assets/img/socialIcon5.png'
import socialIcon6 from '/src/assets/img/socialIcon6.png'
import socialIcon7 from '/src/assets/img/socialIcon7.png'
import socialIcon8 from '/src/assets/img/socialIcon8.png'
import socialIcon9 from '/src/assets/img/socialIcon9.png'
import socialIcon10 from '/src/assets/img/socialIcon10.png'
import socialIcon11 from '/src/assets/img/socialIcon11.png'
import socialIcon12 from '/src/assets/img/socialIcon12.png'
import twitter from '/src/assets/img/twitter.png'
import tlegram from '/src/assets/img/tlegram.png'
//func
import { scrollToSection } from '../../../utails/functionsModels'


const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row justify-content-between align-items-end">
                    <div className="col-lg-6 text-center text-lg-start">
                        <div className="d-flex align-items-end gap-5 justify-content-center justify-content-lg-start">
                            <a href="#" className="footer-logo mb-4 mb-lg-0">
                                <img src={FooterLogo} alt="" />
                            </a>
                            <figure className="footercat d-none d-lg-block">
                                <img src={footercat} alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 text-lg-end">
                        <div className="partner-wrapper">
                            <h4 className="text-lg-start text-center">our partners</h4>
                            <ul className="partners-inner mt-3 justify-content-center justify-content-lg-start">
                                <li>
                                    <img src={socialIcon1} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon2} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon3} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon4} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon5} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon6} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon7} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon8} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon9} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon10} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon11} alt="" />
                                </li>
                                <li>
                                    <img src={socialIcon12} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <div className="row align-items-center">
                    <div className="col-lg-5 text-center text-lg-start order-2 order-lg-1">
                        <p className="copyright">© ,punchionsol.com ,all rights reserved.</p>
                    </div>
                    <div className="col-lg-7 mt-lg-2 mb-3 mb-lg-0 order-1 order-lg-2">
                        <div className="footer-bottom-right d-flex  align-items-center justify-content-center justify-content-lg-end ">
                            <ul className="footer-menu">
                                <li>
                                    <a onClick={() => scrollToSection('home')}>home</a>
                                </li>
                                <li>
                                    <a onClick={() => scrollToSection('about')}>about</a>
                                </li>
                                <li>
                                    <a onClick={() => scrollToSection('roadmap')}>roadmap</a>
                                </li>
                                <li>
                                    <a onClick={() => scrollToSection('tokenomics')}>punchinomics</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li>
                                    <a href="https://x.com/punchionsol" target="_blank">
                                        <img src={twitter} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/PunchiTalk" target="_blank">
                                        <img src={tlegram} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer