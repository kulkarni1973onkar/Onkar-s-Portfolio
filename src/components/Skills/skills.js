import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import BackDesign from '../../assets/BackendImg.png';
import DBDesign from '../../assets/DatabaseImg.png';


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">My Expertise</span>
            <span className="skillDesc">I build fullstack web applications, combining clean UI design with powerful, scalable backend systems.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="Frontend Design Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Frontend Development</h2>
                        <p>I build responsive and interactive user interfaces using HTML, CSS, and modern frameworks like React, Vue, and Angular.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={BackDesign} alt="Backend Development Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend Development</h2>
                        <p>Built secure and scalable backend services and REST APIs using Node.js and Express for real-world web applications.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={DBDesign} alt="Database Management Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Database Management</h2>
                        <p>Worked on designing and tuning MySQL, PostgreSQL, and MongoDB databases to ensure fast and reliable data operations.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign} alt="API Integration Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>API Integration</h2>
                        <p>Connected external services and tools through third-party APIs to extend application features and improve overall functionality.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="DevOps Icon" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Deployment & DevOps</h2>
                        <p>Handled deployments by setting up CI/CD pipelines, managing cloud infrastructure, and using Git for version control.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
