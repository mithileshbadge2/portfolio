import React from 'react';
import './Skills.css'; // Assuming you have a CSS file for styling

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2>Skills</h2>

                {/* Displaying skill names with image logos */}
                <div className="skills-list">
                    <div className="skill-item">
                        Python
                        <img src="/python-logo.jpg" alt="Python Logo" className="skill-icon" />
                    </div>
                    <div className="skill-item">
                        SQL
                        <img src="/sql_image_new.jpg" alt="SQL Logo" className="skill-icon" />
                    </div>
                    <div className="skill-item">
                        Power BI
                        <img src="/Microsoft-Power-BI.webp" alt="Power BI Logo" className="skill-icon" />
                    </div>
                    <div className="skill-item">
                        JavaScript
                        <img src="/javascript_image.png" alt="JavaScript Logo" className="skill-icon" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
