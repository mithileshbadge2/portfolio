import React, { useEffect } from 'react';
import './About.css';

function About() {
    useEffect(() => {
        document.title = 'About - Mithilesh Portfolio';
    }, []);

    return (
        <div className="about-container">
            <div className="about-skills-container">
                {/* About Me Section */}
                <h2 className="section-header">About Me</h2>
                <p className="section-text">
                    Hi, I'm <strong>Mithilesh Badge</strong>, a motivated and detail-oriented data analyst with a passion for turning complex data into actionable insights.
                    Currently based in <strong>Maharashtra, India</strong>, I have a background in <strong>Data Analysis</strong> and <strong>Electrical Engineering</strong>,
                    and I’m proficient in Python, JavaScript, SQL, and data visualization tools like Power BI and Excel.
                </p>
                <p className="section-text">
                    During my studies and personal projects, I’ve worked on various analytical and programming tasks, including processing large datasets, visualizing trends,
                    and providing meaningful insights to help decision-makers. I thrive on solving complex problems and enjoy learning new technologies to stay at the
                    forefront of the industry.
                </p>

                {/* Resume Link */}
                <div className="resume-button-container">
                    <a
                        href="/Mithilesh_Fresh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Technical Skills Section */}
                <h3 className="section-header">Technical Skills</h3>
                <ul className="skills-list">
                    <li><strong>Programming Languages:</strong> Python, JavaScript, SQL</li>
                    <li><strong>Tools:</strong> Power BI, Microsoft Excel, NumPy, pandas, matplotlib, seaborn</li>
                    <li><strong>Other Skills:</strong> Data Visualization, Statistical Analysis, Problem Solving, Collaborative Teamwork</li>
                </ul>
            </div>
        </div>
    );
}

export default About;
