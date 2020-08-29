import React from 'react';

import { About } from './../about/About';
import { Education } from './../Education/Education';
import { Skills } from './../Skills/Skills';
import { Projects } from './../projects/Projects';
import { Experiences } from './../Experience/Experience';
import { Achievement } from './../Achievements/Achievements';

import './section-container.css';

export const SectionContainer = ({ 
    selectedHeading, 
    selectedQuote,
    selectedSection,
    about,
    education,
    skills,
    projects,
    experiences,
    achievement }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About bio={about.bio} />,
                        education: <Education edu={education.edu} />,
                        skills: <Skills skills={skills} />,
                        projects: <Projects projects={projects} />,
                        experiences: <Experiences experiences={experiences} />,
                        achievement: <Achievement ach={achievement.ach} />
                    }[selectedSection]
                }
            </div>
        </div>
    )
}