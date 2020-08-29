import React from 'react';

import './achievements.css';

export const Achievement = ({ ach }) => {
    return (
        <div className="ach-container">
            <p>{ach}</p>
        </div>
    )
}