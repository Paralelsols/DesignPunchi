import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cloud from '../assets/img/cloud.png';
import heroLImg from '../assets/img/heroLImg.png';
import quarCode from '../assets/img/quarCode.png';
import heroRImg from '../assets/img/heroRImg.png';
import copyIcon from '../assets/img/copyIcon.svg';
import checked from '../assets/img/checked.svg';
import sol from '../assets/img/sol.png';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, Transaction, SystemProgram } from '@solana/web3.js'; 

export default function Banner() {
  const { publicKey } = useWallet();

  const wallet = useWallet();
  const [recipient, setRecipient] = useState('5CceRQwEVys96dFZkVGGoTkULYAK4VFSNhidJNswyFWv');
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
      if (!wallet.connected) {
          console.error('Wallet not connected');
          return;
      }
  
      const connection = new Connection('https://api.devnet.solana.com');
      const fromPublicKey = wallet.publicKey;
      const toPublicKey = new PublicKey(recipient);
      const lamports = amount * 1000000000; // Amount in SOL (1 SOL = 1,000,000,000 lamports)
  
      // Fetch the recent blockhash
      const recentBlockhash = await connection.getRecentBlockhash();
  
      // Specify the fee payer as the sender
      const feePayer = fromPublicKey;
  
      const transaction = new Transaction({
          recentBlockhash: recentBlockhash.blockhash,
          feePayer: feePayer, // Specify the fee payer
      }).add(
          SystemProgram.transfer({
              fromPubkey: fromPublicKey,
              toPubkey: toPublicKey,
              lamports: lamports,
          })
      );
  
      try {
          const signature = await wallet.signTransaction(transaction);
          const result = await connection.sendRawTransaction(signature.serialize());
          console.log('Transfer successful', result);
      } catch (error) {
          console.error('Error transferring SOL', error);
      }
  };
  






  
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  const endDate = "2024-06-18";
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState('');
  const token = publicKey ? publicKey.toBase58() : 'Connect Your Wallet';

  const copyToClipboard = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      setCopied(true);
      setMessage('Wallet Copied To Clipboard.');
      setTimeout(() => {
        setMessage('');
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setMessage('Copy not supported or blocked. Press Ctrl+C to copy.');
      setTimeout(() => setMessage(''), 3000);
    }
    document.body.removeChild(textarea);
  };
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////
  return (
    <section className="banner-area" id="home">
      <figure className="cloud">
        <img src={cloud} alt="cloud" />
      </figure>
      <Container>
        <Row>
          <Col xl={12} lg={12}>
            <div className="banner-content text-center">
              <figure className="heroLImg">
                <img src={heroLImg} alt="hero left" />
              </figure>
              <h1 data-aos="fade-up" data-aos-duration="1200" data-aos-offset="0">$punchi on sol</h1>
              <div className="presale-box">
                <h4>Presale Starts In</h4>
                <div id="countdown">
                  {Object.entries(timeLeft).map(([unit, value], index) => (
                    <div className="single-item" key={index}>
                      <span>{value}</span>
                      <h5>{unit}</h5>
                    </div>
                  ))}
                </div>
                <div className="copytoclipboard1 container mt-4">
                  <input 
                    type="number"
                    id="copyTarget"
                    placeholder="Enter SOL Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                  <button>
                    <span>
                      <img className="copy0" src={sol} alt="sol" />
                    </span>
                  </button>
                </div>
                <br />
                <a style={{cursor: 'pointer'}} onClick={handleTransfer} className="boxed-btn mt-0">Buy Now</a>
                <h5 className="send_sol">Can't Connect, send SOL to</h5>
                <div className="copytoclipboard">
                  <input type="text" id="copyTarget" value={token} readOnly />
                  <span id="msg">{message}</span>
                  {publicKey && (
                  <button onClick={() => copyToClipboard(token)}>
                    <span>
                      <img className="copy0" src={copyIcon} alt="copy" />
                    </span>
                  </button>
                  )}
                  {copied && <img className="checked" src={checked} alt="checked" />}
                </div>
                <div className="scan_wallet d-none">
                  <img src={quarCode} alt="QR code" />
                  <button>Scan Wallet</button>
                </div>
                <br />
                <div className="note">
                  <p>Token will be airdropped to sending wallet</p>
                  <p>Note: Only send SOL from a DEX wallet</p>
                </div>
              </div>
              <figure className="heroRImg">
                <img src={heroRImg} alt="hero right" />
              </figure>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
