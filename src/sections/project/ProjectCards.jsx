import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css"; // Import the CSS file

function ProjectCards(props) {
  return (
    <div className="project-card-view">
      <img className="project-card-image" src={props.imgPath} alt="project" />
      <div className="project-card-body">
        <h3 className="project-card-title">{props.title}</h3>
        <p className="project-card-text">{props.description}</p>
        <div className="project-card-buttons">
          <a href={props.ghLink} target="_blank" rel="noopener noreferrer" className="project-card-button">
            <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
          </a>

          {/* Render demo button if it's not a blog and has a demo link */}
          {!props.isBlog && props.demoLink && (
            <a href={props.demoLink} target="_blank" rel="noopener noreferrer" className="project-card-button">
              <CgWebsite /> &nbsp;Demo
            </a>
          )}

          {/* Render admin link if provided */}
          {props.adminLink && (
            <a href={props.adminLink} target="_blank" rel="noopener noreferrer" className="project-card-button">
              <CgWebsite /> &nbsp;Admin
            </a>
          )}

          {/* Render client link if provided */}
          {props.clientLink && (
            <a href={props.clientLink} target="_blank" rel="noopener noreferrer" className="project-card-button">
              <CgWebsite /> &nbsp;Client
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
