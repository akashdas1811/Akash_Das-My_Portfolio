import React from 'react';

import './SideNav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars2.githubusercontent.com/u/50514652?s=400&u=a5fd09e47c64e3eff065e501ae88ca1ee3f0158f&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Akash Das</h2>
            <p className="subtitle">"A competitive programmer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("education")}>Education</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                <p className="section-list-element" onClick={() => handleSectionClick("experiences")}>Experiences</p>
                <p className="section-list-element" onClick={() => handleSectionClick("achievement")}>Achievements</p>
            </div>
        </div>
    );
};