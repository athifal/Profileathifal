import React from 'react';
import './Pop.css';
import whatsappIcon from '../assets/whatsappicon.png';

function Pop() {
  return (
    <div>
      <a
        href="https://wa.me/+919446401925"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </div>
  );
}

export default Pop;
