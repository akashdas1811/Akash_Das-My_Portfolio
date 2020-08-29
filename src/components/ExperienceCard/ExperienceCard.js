import React from 'react'

import './experience-card.css';

export const ExperienceCard = ({ experience }) => {
    return (
        <div className="experience-card">
            <p><b>Organization_Name:</b> {experience.name}</p>
            <p><b>Description:</b>{experience.description}</p>
        </div>
    )
}