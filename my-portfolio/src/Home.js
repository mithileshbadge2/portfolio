import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported

gsap.registerPlugin(ScrollTrigger);

function Home() {
    useEffect(() => {
        document.title = 'Home - Mithilesh Badge Portfolio';

        // Title animation
        gsap.from(".home-title", {
            duration: 1.5,
            opacity: 0,
            scale: 0.8,
            ease: "power3.out",
            delay: 0.5,
        });

        // Description animation
        gsap.from(".home-description", {
            duration: 2,
            opacity: 0,
            x: 100,
            ease: "power3.out",
            delay: 1,
        });

        // Scroll-triggered animation for shapes
        gsap.from(".animated-shape", {
            scrollTrigger: {
                trigger: ".animated-shape",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 1.5,
            ease: "power2.out",
        });
    }, []);

    return (
        <div className="home-section">
            <h1 className="home-title">Hey There, I’m Mithilesh</h1>

            <div className="expertise-text">
                My expertise lies in being an efficient Data Analyst who understands Python, JavaScript, SQL, Microsoft Excel together with PowerBI very well. I have knowledge of turning unrefined data into knowledgeable facts and providing appealing visualizations that facilitate informed decision-making. The proficiency that I possess entails managing massive amounts of datasets to enable me to undertake thorough analysis and then forward results to stakeholders understandably. Furthermore, I gain satisfaction from learning continuously, hence I excel where people come together, especially when it's about solving difficult issues for success in business.
            </div>

            <img src="/MB_photo.JPG" alt="Mithilesh Badge" className="profile-photo" />

            <footer className="footer">
                <div className="footer-social-icons">
                    <a href="https://www.linkedin.com/in/mithileshbadge/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:badgemithilesh7@gmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://github.com/mithileshbadge2" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
