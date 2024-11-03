import React from "react";
import ProjectCard from "./ProjectCards";
import "./Projects.css"; // Import the CSS file
import crypto from '../../assets/crypto.jpg';
import website1 from '../../assets/website1.png';
import website2 from '../../assets/website2.png';

function Projects() {
  return (
    <section>
    <div className="project-section">
      <div className="project-container">
        <h1 className="project-heading sectionTitle">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="project-description">
          Here are a few projects I've worked on recently.
        </p>
        <div className="project-row">
          <div className="project-card">
            <ProjectCard
              imgPath={website2}
              isBlog={false}
              title="Music Boxxx"
              description="Music Boxxx is a modern music streaming web app built with Node.js, React, Material UI, and TypeScript, utilizing the Unofficial JioSaavn API for streaming and searching music. It features a clean, responsive interface with support for light and dark themes, playlist management, and mobile-friendly design."
              ghLink="https://github.com/athifal/MusicBoxx.git"
              demoLink="https://music-boxx.vercel.app/home"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Cryptobase"
              description="A Cryptobase Clone is a website that provides information about cryptocurrencies. It includes features like market trends, latest news, and detailed information about various cryptocurrencies."
              ghLink="https://github.com/athifal/Cryptoclone.git"
              demoLink="https://athifal.github.io/Cryptoclone/#"
              
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={website1}
              isBlog={false}
              title="Dynamic WebSite with Admin and Client "
              description="Developed using React for a responsive frontend and PHP for robust backend operations, the platform ensures efficient communication between users and administrators, connected seamlessly through an API for real-time data exchange."
              ghLink="https://github.com/athifal/React-Deeyeef.git"
              //demoLink="http://athifalreact.great-site.net/"
              adminLink="https://athifal.rf.gd/admin/index.php" // Link for the admin side
              clientLink="http://athifalreact.great-site.net/" //
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="AI For Social Good"
              description="Applied Natural Language Processing for detecting suicide-related posts, helping in suicide prevention through early detection in cyberspace."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.example.com/demo" // Add demo link here if available
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Built a CNN classifier on the FER-2013 dataset with Keras and TensorFlow to predict emotions with an accuracy of 60.1%. Integrated with OpenCV for face detection and passed detected faces to the classifier for emotion prediction."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://www.example.com/demo" // Add demo link here if available
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Projects;
