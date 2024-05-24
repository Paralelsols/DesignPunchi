import React from 'react'

import about_icon1 from '/src/assets/img/about-icon1.png'
import about_icon2 from '/src/assets/img/about-icon2.png'
import about_bg from '/src/assets/img/about-bg.png'

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center ">
                            <div className="section-title">
                                <h2>About us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="about-title">
                                <h6>How to buy ?</h6>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-lg-3 ">
                        <div className="col-sm-6 col-lg-3 mt-lg-0 mb-5">
                            <div className="about-card position-relative z-1">
                                <div className="position-absolute  z-3  about-card-img ">
                                    <img src={about_icon1} alt="" />
                                </div>
                                <div className="about-card-content text-center ">
                                    <h5 className="card-title text-uppercase ">DOWNLOAD DEX</h5>
                                    <p className="p1">
                                        Download and install Solflare or Phantom on the appstore, or,
                                        alternatively if you're on desktop download and install the
                                        browser&nbsp;extension.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3  mt-lg-0 mb-5">
                            <div className="about-card position-relative z-1">
                                <div className="position-absolute  z-3  about-card-img ">
                                    <img src={about_icon1} alt="" />
                                </div>
                                <div className="about-card-content text-center ">
                                    <h5 className="card-title text-uppercase ">Secure your sol</h5>
                                    <p className="p1">
                                        Now all you've got to do is buy your SOL in the DEX APP, or,
                                        alternatively you can use an exchange and deposit using
                                        your&nbsp;wallet&nbsp;address.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-lg-0 mb-5">
                            <div className="about-card position-relative z-1">
                                <div className="position-absolute  z-3  about-card-img ">
                                    <img src={about_icon2} alt="" />
                                </div>
                                <div className="about-card-content text-center ">
                                    <h5 className="card-title text-uppercase ">Buy some $punchi</h5>
                                    <p className="p1">
                                        Now go to your wallet ,copy our provided wallet by copy icon and
                                        send sol to our provided wallet.$PUNCHI will be airdroped
                                        to&nbsp;sending&nbsp;wallet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 mt-lg-0 mb-5">
                            <div className="about-card position-relative z-1">
                                <div className="position-absolute  z-3  about-card-img ">
                                    <img src={about_icon1} alt="" />
                                </div>
                                <div className="about-card-content text-center ">
                                    <h5 className="card-title text-uppercase ">Add to your wallet</h5>
                                    <p className="p1">
                                        Now you're all set! Welcome aboard the next rocket to the moon,
                                        just import the contract address to view you're&nbsp;holdings.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative z-1">
                        <div className=" row about-section">
                            <div className=" col-sm-12  col-lg-6  ">
                                <div className="about-section-left position-relative z-1 ">
                                    <div className="image">
                                        <img src={about_bg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12  col-lg-6   d-flex  align-items-center  justify-content-center  ">
                                <div className="about-section-right">
                                    <h3 className="text-uppercase ">about punchi on sol </h3>
                                    <p>
                                        Missed the Doge? Shiba? Dogelon Mars? And others? Missed Pepe this
                                        year? Did you also miss copies of them that weren't all made just
                                        for the community? But you can still be strong part of the new
                                        community? Yes? Either way, Punchi, the magic cosmo cat, was born
                                        to connect all communities and open the gateway to unbelieveable
                                        gains and takeover the meme space with secret formulas.
                                    </p>
                                    <p className="p2">
                                        Launching with zero taxes and locked LP, $PUNCHI is a coin for the
                                        people, forever. Fueled by pure memetic power, and magic cosmic
                                        dust, let Punchi rise and shine. Made by veterans.
                                    </p>
                                    <div className="about-section-right-btn d-flex justify-content-between align-items-center  ">
                                        <button>Immutable</button>
                                        <button>revoked mint</button>
                                        <button>Revoked Freeze</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About