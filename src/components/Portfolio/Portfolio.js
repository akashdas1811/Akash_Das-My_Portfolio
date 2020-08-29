import React from 'react';

import { SideNav } from './../sideNav/SideNav.js';
import { SectionContainer } from './../SectionContainer/SectionContainer';

import './portfolio.css';

export const Portfolio = ({ 
    handleSectionClick,
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
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                    handleSectionClick={handleSectionClick}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer
                    selectedSection={selectedSection}
                                        selectedHeading={selectedHeading}
                                        selectedQuote={selectedQuote}
                                        about={about}
                                        education={education}
                                        skills={skills}
                                        projects={projects}
                                        experiences={experiences}
                                        achievement={achievement}/>
            </div>
        </div>
    );
};