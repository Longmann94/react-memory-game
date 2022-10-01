import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return(
    <div className="footer">
       All Characters and images used in this game are properties of Square Enix.
       <a href="https://github.com/Longmann94"> Long Mann (c){year}</a>
    </div>
  );
}

export default Footer;
