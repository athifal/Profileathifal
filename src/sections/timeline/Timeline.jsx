// Timeline.js
import './Timeline.css';
import React from "react";
import CUK from '../../assets/CUK.jpg';
import CU from '../../assets/CU.png';
import KU from '../../assets/kerala.png';
import { useTheme } from '../../common/ThemeContext';

const Timeline = () => {
    const { theme } = useTheme();
  return (
    <section className="page-section">
      <div className="maincontainer">
        <h1 className="sectionTitle">Education</h1>
      </div>
      <div className="container">
        <ul className="timeline">
          <li>
            <div className="timeline-content">
              <div className="timeline-img">
                <img src={CUK} alt="Central University of Kerala" />
              </div>
              <div className="timeline-details">
                <h2>2022-2024</h2>
                <h3>MSc Computer Science</h3>
                <p>MSc in Computer Science (78%) from Central University of Kerala, specializing in Intelligent Systems, with skills in cybersecurity, machine learning, Python, IoT, and web development.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <div className="timeline-img">
                <img src={CU} alt="Calicut University" />
              </div>
              <div className="timeline-details">
                <h2>2018-2021</h2>
                <h3>BSc Computer Science</h3>
                <p>BSc in Computer Science from AVAH Arts and Science College (affiliated with Calicut University). Developed skills in HTML, C, C++, and other foundational programming languages.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-content">
              <div className="timeline-img">
                <img src={KU} alt="Kerala School" />
              </div>
              <div className="timeline-details">
                <h2>2016-2018</h2>
                <h3>Higher Secondary School</h3>
                <p>Studied Computer Science at AVALA Kuttoth Government School, beginning my journey into technology.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
