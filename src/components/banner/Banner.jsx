import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import cloud from '/src/assets/img/cloud.png'
import heroLImg from '/src/assets/img/sol.png'
import sol from '/src/assets/img/sol.png'
import copyIcon from '/src/assets/img/copyIcon.svg'
import heroRImg from '/src/assets/img/heroRImg.png'

const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
      }, []);
    
      const [countdown, setCountdown] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        expired: false, // Added state to track expiration
      });
    
      useEffect(() => {
        const countDownDate = new Date("May 31, 2024 00:00:00").getTime();
    
        const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = countDownDate - now;
    
          if (distance <= 0) {
            clearInterval(interval);
            setCountdown((prevState) => ({ ...prevState, expired: true }));
          } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            const paddedDays = days < 10 ? "0" + days : days;
            const paddedHours = hours < 10 ? "0" + hours : hours;
            const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
            const paddedSeconds = seconds < 10 ? "0" + seconds : seconds;
    
            setCountdown({
              days: paddedDays,
              hours: paddedHours,
              minutes: paddedMinutes,
              seconds: paddedSeconds,
              expired: false,
            });
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, []);
    
      const handleCopyClick = () => {
        const copyText = document.getElementById("copyTarget");
        copyText.select();
        document.execCommand("copy");
        const msgElem = document.getElementById("msg");
        msgElem.innerHTML = "Wallet Copied To Clipboard.";
        setTimeout(() => { msgElem.innerHTML = ""; }, 2000);
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
                {countdown.expired ? (
                  <div>EXPIRED</div>
                ) : (
                  <>
                    <div className="single-item">
                      <span id="days">{countdown.days}</span>
                      <h5>Day</h5>
                    </div>
                    <div className="single-item">
                      <span id="hours">{countdown.hours}</span>
                      <h5>Hours</h5>
                    </div>
                    <div className="single-item">
                      <span id="minutes">{countdown.minutes}</span>
                      <h5>Minutes</h5>
                    </div>
                    <div className="single-item">
                      <span id="seconds">{countdown.seconds}</span>
                      <h5>Sec..</h5>
                    </div>
                  </>
                )}
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
                <span id="msg"></span>
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