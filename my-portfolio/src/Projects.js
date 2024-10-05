import React, { useState } from 'react';
import './Projects.css';

function Projects() {
    const [projects] = useState([
        { id: 1, title: 'Amazon Sales Report',image: '/Amazon-Seller-Reports.jpg', file: 'https://nbviewer.org/github/mithileshbadge2/Amazon-Sales-Project/blob/main/Amazon_Sale_Report.ipynb' },
        { id: 2, title: 'Adventure Works Sales', image: '/Mithilesh_project.jpg',file: 'https://github.com/mithileshbadge2/PowerBI'},
    ]);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    return (
        <section className="projects-section">
            <h2>My Projects</h2>
            <div className="project-list">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="project-item"
                        onClick={() => handleProjectClick(project)}
                    >
                        <h3>{project.title}</h3>
                        {project.file && (
                            <a href={project.file} target="_blank" rel="noopener noreferrer">
                                View {project.title}
                            </a>
                        )}
                     {project.image && (
                            <img src={project.image} alt={project.title} className="project-image" />
                        )}
                    </div>
                ))}
            </div>
            {selectedProject && (
                <div className="project-details">
                    <h3>{selectedProject.title}</h3>
                    <p>{selectedProject.details}</p>
                </div>
            )}
        </section>
    );
}

export default Projects;
