import React from "react";
import styles from './ContactStyles.module.css'; // Import the CSS module

function Contact() {
  const handleCall = () => {
    window.open("tel:+919446401925");
  };

  const handleEmail = () => {
    window.open("mailto:athif105@gmail.com");
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Get in touch!</h2>
        <div className={styles.subtitle}></div>
      </div>
      <div className={styles.contactInfoContainer}>
        <div className={styles.contactCard}>
          <span className="material-icons" aria-hidden="true">home</span>
          <div className={styles.contactDetails}>
            <div className={styles.mobileInfo}>Calicut, Kerala</div>
            <div className={styles.contactInfo}></div>
          </div>
        </div>
        <div className={styles.contactCard} onClick={handleCall} style={{ cursor: "pointer" }}>
          <span className="material-icons" aria-hidden="true">phone</span>
          <div className={styles.contactDetails}>
            <div className={styles.mobileInfo}>+91 9446401925</div>
          </div>
        </div>
        <div className={styles.contactCard} onClick={handleEmail} style={{ cursor: "pointer" }}>
          <span className="material-icons" aria-hidden="true">email</span>
          <div className={styles.contactDetails}>
            <div className={styles.mobileInfo}>athif105@gmail.com</div>
            <div className={styles.contactInfo}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
