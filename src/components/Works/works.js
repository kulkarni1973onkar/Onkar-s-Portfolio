import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Project-1.png';
import Portfolio2 from '../../assets/Project-2.jpg'
import Portfolio3 from '../../assets/Project-3.jpg';
import Portfolio4 from '../../assets/Project-4.jpg';
import Portfolio5 from '../../assets/Project-5.jpg';
import Portfolio6 from '../../assets/Project-6.jpg';

const Works = () => {
    return (
        <section id='works'>
            <h2 className="worksTitle">Projects</h2>
            <span className="worksDesc">
                On these projects, I’ve taken ownership from design to deployment—writing clean, scalable code and integrating full-stack features.
            </span>

            <div className="worksImgs">

                <div className="worksCard">
                    <div className="worksImgWrapper">
                        <img src={Portfolio1} alt="Project 1" className="worksImg" />
                        <span className="worksTag">Web / Dashboard</span>
                    </div>
                    <h3 className="worksHeading">Enterprise Accreditation Department Automation</h3>
                    <p className="worksText">A cloud-based workflow automation platform designed to streamline accreditation processes, enhance collaboration, and minimize manual tasks across departments.</p>
                    <a href="https://github.com/kulkarni1973onkar/Enterprise-Accreditation-Department-Automation" target="_blank" rel="noopener noreferrer" className="viewBtn">View</a>
                </div>

                <div className="worksCard">
                    <div className="worksImgWrapper">
                        <img src={Portfolio2} alt="Project 2" className="worksImg" />
                        <span className="worksTag">Web / Dashboard</span>
                    </div>
                    <h3 className="worksHeading">Municipal Finances Tax Management System</h3>
                    <p className="worksText">A government financial system built to streamline tax collection, reporting, and real-time transaction processing for efficient municipal revenue management.</p>
                    <a href="https://github.com/kulkarni1973onkar/Municipal-Finances-Tax-Management-System" target="_blank" rel="noopener noreferrer" className="viewBtn">View</a>
                </div>

                <div className="worksCard">
                    <div className="worksImgWrapper">
                        <img src={Portfolio3} alt="Project 3" className="worksImg" />
                        <span className="worksTag">Web / Dashboard</span>
                    </div>
                    <h3 className="worksHeading">Covid Test Management System</h3>
                    <p className="worksText">A web app for managing COVID-19 testing, registration, result tracking, and reporting to streamline workflows for clinics and health authorities.</p>
                    <a href="https://github.com/kulkarni1973onkar/Smart-Medical-Services" target="_blank" rel="noopener noreferrer" className="viewBtn">View</a>
                </div>

                <div className="worksCard">
                    <div className="worksImgWrapper">
                        <img src={Portfolio4} alt="Project 4" className="worksImg" />
                        <span className="worksTag">Mobile / Android</span>
                    </div>
                    <h3 className="worksHeading">Smart Medical Services</h3>
                    <p className="worksText">A cross-platform system for booking, managing, and receiving real-time alerts for medical appointments and consultations with certified healthcare professionals.</p>
                    <a href="https://github.com/kulkarni1973onkar/Covid-TMS-Covid-Test-Management-System-" target="_blank" rel="noopener noreferrer" className="viewBtn">View</a>
                </div>

                <div className="worksCard">
                    <div className="worksImgWrapper">
                        <img src={Portfolio5} alt="Project 5" className="worksImg" />
                        <span className="worksTag">Web / Dashboard</span>
                    </div>
                    <h3 className="worksHeading">BooksBuzz - Online Book Purchases</h3>
                    <p className="worksText">Full-stack web app for secure book browsing, purchasing, order tracking, cart handling, user login, and integrated payment gateway support.</p>
                    <a href="https://github.com/kulkarni1973onkar/BooksBuzz---Online-Book-Purchases" target="_blank" rel="noopener noreferrer" className="viewBtn">View</a>
                </div>

                <div className="worksCard">
                    <div className="worksImgWrapper">
                        <img src={Portfolio6} alt="Project 6" className="worksImg" />
                        <span className="worksTag">AI / NLP</span>
                    </div>
                    <h3 className="worksHeading">Clinical NLP Pipeline for Symptom Extraction and Classification</h3>
                    <p className="worksText">Developed an NLP pipeline with spaCy, SecTag, INCEpTION, and LLMs to extract, classify, and evaluate symptoms in clinical notes.</p>
                    <a href="https://github.com/kulkarni1973onkar/Clinical-NLP-Pipeline-for-Symptom-Extraction-and-Classification" target="_blank" rel="noopener noreferrer" className="viewBtn">View</a>
                </div>

            </div>
        </section>
    );
}

export default Works;
