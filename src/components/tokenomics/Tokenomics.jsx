import React from 'react'

import Chart from '/src/assets/img/Chart.png'
import token_bShap from '/src/assets/img/token-bShap.png'

const Tokenomics = () => {
    return (
        <div><section className="tokenomics-area" id="tokenomics">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title text-center">
                            <h2>punchinomics</h2>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="tokenomics-content-area">
                            <div className="no-nonsense-box">
                                <h4>NO TAX. NO NONSENSE</h4>
                                <p>
                                    trackable via the blockchain. PUNCHI, bestows prosperity on its
                                    followers with zero taxes for $PUNCHI transactions. The economy
                                    thrives with PUNCHI’s guidance and the faithful reap the rewards.
                                </p>
                                <p>
                                    $PUNCHI is a custest cat on Solana Blockchain.$PUNCHI is 100%
                                    decentralized,safe and secure.{" "}
                                </p>
                                <h5>Contract Address:</h5>
                                <div className="copytoclipboard">
                                    <input
                                        type="text"
                                        id="textToCopy1"
                                        defaultValue="BiNSmM3o64AuTgggQyZkBU2zKTjDswsvAcHmhYtJPVS4"
                                        readOnly=""
                                    />
                                    <button onclick="handleCopyToClipboard(1)">
                                        <span>
                                            <img className="copy1" src="assets/img/copyIcon.svg" alt="" />
                                            <img
                                                className="checked1"
                                                src="assets/img/checked.svg"
                                                alt=""
                                                style={{ display: "none" }}
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="token-item-wrapper">
                                <div className="single-item">
                                    <h5>Token name:</h5>
                                    <h6>punchi on sol</h6>
                                </div>
                                <div className="single-item">
                                    <h5>token ticker</h5>
                                    <h6>$punchi</h6>
                                </div>
                                <div className="single-item">
                                    <h5>total supply</h5>
                                    <h6>100,000,000,000</h6>
                                </div>
                                <div className="single-item">
                                    <h5>blockchain</h5>
                                    <h6>solana</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tokenomicsRight text-center">
                            <img src={Chart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <figure className="token-bShap">
                <img src={token_bShap} alt="" />
            </figure>
        </section>
        </div>
    )
}

export default Tokenomics