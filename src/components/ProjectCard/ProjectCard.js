import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b>Name:</b> {project.name}</p>
            <p><b>Title:</b> {project.title}</p>
            <p><b>Description:</b>{project.description}</p>
        </div>
    )
}