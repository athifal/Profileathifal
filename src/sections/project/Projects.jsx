import React from "react";
import ProjectCard from "./ProjectCards";
import "./Projects.css"; // Import the CSS file
import crypto from '../../assets/crypto.jpg';
import website1 from '../../assets/website1.png';
import website2 from '../../assets/website2.png';
import drug from '../../assets/drug.png';
import rna from '../../assets/rna.webp';


function Projects() {
  return (
    <section>
    <div className="project-section">
      <div className="project-container">
        <h1 className="project-heading sectionTitle">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p>
          Here are a few projects I've worked on recently.
        </p>
        <br></br>
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
              imgPath={crypto}
              isBlog={false}
              title="Cryptobase"
              description="A Cryptobase Clone is a simple static website that provides information about cryptocurrencies. It includes features like market trends, the latest news, and detailed information about various cryptocurrencies, all presented with stylish design elements"
              ghLink="https://github.com/athifal/Cryptoclone.git"
              demoLink="https://athifal.github.io/Cryptoclone/#"
              
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
              imgPath={drug}
              isBlog={false}
              title="drug repurposing using deep learning"
              description="For my project on drug repurposing using deep learning, I developed a graph neural network in Python, utilizing libraries like TensorFlow and PyTorch. This model aimed to identify potential new therapeutic uses for existing drugs, contributing to accelerated drug discovery and improved healthcare solutions."
              ghLink="https://github.com/athifal/Drug-repurposing-using-GNN.git"
              // demoLink="https://www.example.com/demo" // Add demo link here if available
            />
          </div>

          <div className="project-card">
            <ProjectCard
              imgPath={rna}
              isBlog={false}
              title="CircRNA-Disease association prediction using deep learning"
              description=" I developed a deep learning model that employed XGBoost and autoencoder techniques to predict associations between circular RNAs and diseases, aiming to uncover potential links that could enhance our understanding of disease mechanisms."
              ghLink="https://github.com/athifal/CirRNA-interaction-XGboost-autoencoder.git"
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
