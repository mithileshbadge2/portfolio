import React from 'react';
import './Certifications.css'; // Assuming you have some styles for your Certifications component

function Certifications() {
    return (
        <div className="certifications-section">
            <h2>Certifications</h2>
            <div className="certification-grid">
                <div className="certification-item">
                    <img src={`${process.env.PUBLIC_URL}/Certificate_01.jpg`} alt="Certificate 01" className="certification-image" />
                    <p></p>
                </div>
                <div className="certification-item">
                    <img src="/MITHILESH BADGE.png" alt="Mithilesh Badge" className="certification-image" />
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Certifications;
