import React, { useState, useEffect } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const CustomWalletButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonStyle, setButtonStyle] = useState({});

  useEffect(() => {
    const updateButtonStyle = () => {
      const width = window.innerWidth;
      let style = {
        padding: '14px 20px',
        display: 'inline-block',
        borderRadius: '8px',
        borderBottom: '5px solid #000',
        background: isHovered ? '#ffc712' : '#fc8383',
        color: isHovered ? '#primary' : '#333',
        textAlign: 'center',
        fontFamily: 'Recursive',
        fontSize: '16px',
        fontStyle: 'normal',
        fontWeight: 800,
        lineHeight: '160%',
        textTransform: 'uppercase',
        transition: 'background 0.3s, color 0.3s', // Smooth transition for hover effect
      };

      if (width <= 576) { // small screens
        style = {
          ...style,
          padding: '10px 15px',
          borderRadius: '5px',
          fontSize: '14px',
          textTransform: 'capitalize',
        };
      } else if (width <= 768) { // medium screens
        style = {
          ...style,
          padding: '14px 20px',
          borderRadius: '10px',
          marginBottom: '20px',
        };
      } else { // large screens
        style = {
          ...style,
          padding: '14px 20px',
          borderRadius: '10px',
        };
      }

      setButtonStyle(style);
    };

    updateButtonStyle();
    window.addEventListener('resize', updateButtonStyle);
    return () => window.removeEventListener('resize', updateButtonStyle);
  }, [isHovered]);

  return (
    <WalletMultiButton
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};

export default CustomWalletButton;
