import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import faq from '/src/assets/img/faq-img.png';

const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  return (
    <section className="faqArea" id="faq">
      <div className="container faqArea-wrapper">
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-title text-center">
              <h2>F.A.Q<br /></h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6 col-xxl-7 faq-wrapper-item">
            <div className="faqArea-wrapper-left" id="accordionExample">
              <div className="faq-item" data-aos="fade-up">
                <h4 className="text-uppercase">WHAT IS $PUNCHI?</h4>
                <p>
                  $PUNCHI is the cutest cat on the Solana Network, seeking to change the focus of meme coins by bringing fun and adding value to the crypto ecosystem.
                </p>
              </div>
              <div className="faq-item" data-aos="fade-up">
                <h4 className="text-uppercase">WHY LAUNCH ON SOLANA?</h4>
                <p>
                  $PUNCHI token is created on the Solana network due to its security, low transaction fees, and fast network speed.
                </p>
              </div>
              <div className="faq-item" data-aos="fade-up">
                <h4 className="text-uppercase">HOW TO GET PUNCHI?</h4>
                <p>
                  You can get Punchi Token by joining the presale. Just send SOL to our provided wallet, and the token will be airdropped to your sending wallet. Later, you will be able to buy Punchi token on both Dex and Cex.
                </p>
              </div>
              <div className="faq-item" data-aos="fade-up">
                <h4 className="text-uppercase">HOW TO CONTACT SUPPORT?</h4>
                <p>
                  You can contact support anytime 24/7 through our X handle, Telegram, and by sending a message to support@punchionsol.com.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-xxl-5">
            <div className="faqArea-wrapper-image">
              <img src={faq} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
