import React from 'react';

import { ExperienceCard } from './../ExperienceCard/ExperienceCard';

import './experience.css';

export const Experiences = ({ experiences }) => {
    return (
        <div className="experiences-container">
            <div className="industry-skill-container">
                {
                    experiences.projectList.map(experience => <ExperienceCard experience={experience} />)
                }
            </div>
        </div>
    )
}