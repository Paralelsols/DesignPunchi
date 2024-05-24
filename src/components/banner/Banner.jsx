import React, { useState } from 'react'

import cloud from '/src/assets/img/cloud.png'
import heroLImg from '/src/assets/img/sol.png'
import sol from '/src/assets/img/sol.png'
import copyIcon from '/src/assets/img/copyIcon.svg'
import heroRImg from '/src/assets/img/heroRImg.png'

const Banner = () => {

    const [copyMsg, setCopyMsg] = useState('');

    const copyToClipboard = (elem) => {
        const targetId = "_hiddenCopyText_";
        const isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
        let origSelectionStart, origSelectionEnd;
        let target;
        if (isInput) {
            target = elem;
            origSelectionStart = elem.selectionStart;
            origSelectionEnd = elem.selectionEnd;
        } else {
            target = document.getElementById(targetId);
            if (!target) {
                target = document.createElement("textarea");
                target.style.position = "absolute";
                target.style.left = "-9999px";
                target.style.top = "0";
                target.id = targetId;
                document.body.appendChild(target);
            }
            target.textContent = elem.textContent;
        }
        const currentFocus = document.activeElement;
        target.focus();
        target.setSelectionRange(0, target.value.length);

        let succeed;
        try {
            succeed = document.execCommand("copy");
        } catch (e) {
            succeed = false;
        }
        if (currentFocus && typeof currentFocus.focus === "function") {
            currentFocus.focus();
        }
        if (isInput) {
            elem.setSelectionRange(origSelectionStart, origSelectionEnd);
        } else {
            target.textContent = "";
        }
        return succeed;
    };

    const handleCopyClick = () => {
        const copyTarget = document.getElementById("copyTarget");
        const succeed = copyToClipboard(copyTarget);
        const msg = succeed
            ? "Wallet Copied To Clipboard."
            : "Copy not supported or blocked. Press Ctrl+c to copy.";
        setCopyMsg(msg);
        setTimeout(() => setCopyMsg(''), 2000);
    };

    return (
        <div style={{ width: '100%', boxSizing: 'border-box' }}>
            <section className="banner-area" id="home">
                <figure className="cloud">
                    <img src={cloud} alt="" />
                </figure>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="banner-content text-center">
                                <figure className="heroLImg">
                                    <img src={heroLImg} alt="" />
                                </figure>
                                <h1 data-aos="fade-up" data-aos-duration={1200} data-aos-offset={0}>
                                    $punchi on sol
                                </h1>
                                <div className="presals-box">
                                    <h4>Presale Starts In</h4>
                                    <div id="countdown">
                                        <div className="single-item">
                                            <span id="days" />
                                            <h5>Day</h5>
                                        </div>
                                        <div className="single-item">
                                            <span id="hours" />
                                            <h5>Hours</h5>
                                        </div>
                                        <div className="single-item">
                                            <span id="minutes" />
                                            <h5>Minutes</h5>
                                        </div>
                                        <div className="single-item">
                                            <span id="seconds" />
                                            <h5>Sec..</h5>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="copytoclipboard1 container">
                                        <input type="text" id="copyTarget" placeholder="Enter SOL Amount" />
                                        <button onClick={handleCopyClick}>
                                            <span>
                                                <img className="copy0" src={sol} alt="" />
                                            </span>
                                        </button>
                                    </div>
                                    <br />
                                    <a href="https://punchionsol.com/sell.html" className="boxed-btn mt-0">
                                        Buy Now
                                    </a>
                                    <h5 className="send_sol">Can't Connect, send SOL to</h5>
                                    <div className="copytoclipboard">
                                        <input
                                            type="text"
                                            id="copyTarget"
                                            defaultValue="2NGeE2Ad6GXJm7gJ2Gv7BGHoSQKzcayhoKhLrHwwg1dt"
                                            readOnly
                                        />
                                        <span id="msg">{copyMsg}</span>
                                        <button id="copyButton" onClick={handleCopyClick}>
                                            <span>
                                                <img className="copy0" src={copyIcon} alt="" />
                                            </span>
                                        </button>
                                    </div>
                                    <br />
                                    <div className="note">
                                        <p>Token will be airdropped to sending wallet</p>
                                        <p>Note: Only send SOL from dex wallet</p>
                                    </div>
                                </div>
                                <figure className="heroRImg">
                                    <img src={heroRImg} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner