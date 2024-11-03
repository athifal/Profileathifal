import React, { useEffect } from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/file.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import Type from "./Type";
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;


  
  

  return (
    <section id="hero" className={styles.container}>
      
             
      <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
      />
      
      <div className={styles.colorModeContainer}>
      
      

        
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Athif"
        />
      
      </div>
      <div className={styles.info}>
        <h1>
          MUHAMMED
          <br />
          ATHIF A L
        </h1>
        <h3><Type/></h3>
        <span>
          <a href="https://twitter.com/mhammedathifal" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/athifal" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/athifal" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        Motivated and versatile, I thrive on challenges and strive for high-quality results with a positive, growth-oriented mindset.
        </p>
        <a href={CV} download >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
