// Timeline.js
import './Timeline.css';
import React from "react";
import CUK from '../../assets/CUK.jpg';
import CU from '../../assets/CU.png';
import KU from '../../assets/kerala.png';

const Timeline = () => {
  return (
    <section className="page-section">
      <div className="maincontainer">
        <h1 className="sectionTitle">Education</h1>
      </div>
      <div className="timeline-roadmap">
        <div className="timeline-item left">
          <div className="timeline-card">
            <img src={CUK} alt="Central University of Kerala" className="timeline-image" />
            <div className="timeline-info">
              <h2>2022-2024</h2>
              <h3>MSc Computer Science</h3>
              <p>MSc in Computer Science (78%) from Central University of Kerala, specializing in Intelligent Systems, with skills in cybersecurity, machine learning, Python, IoT, and web development.</p>
            </div>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="timeline-card">
            <img src={CU} alt="Calicut University" className="timeline-image" />
            <div className="timeline-info">
              <h2>2018-2021</h2>
              <h3>BSc Computer Science</h3>
              <p>BSc in Computer Science from AVAH Arts and Science College (affiliated with Calicut University). Developed skills in HTML, C, C++, and other foundational programming languages.</p>
            </div>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="timeline-card">
            <img src={KU} alt="Kerala School" className="timeline-image" />
            <div className="timeline-info">
              <h2>2016-2018</h2>
              <h3>Higher Secondary School</h3>
              <p>Studied Computer Science at AVALA Kuttoth Government School, beginning my journey into technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
