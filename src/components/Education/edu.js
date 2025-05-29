import React from 'react';
import './edu.css';
import SUNYLogo from '../../assets/SUNY_logo.png';
import SPPULogo from '../../assets/SPPU.png';
import MSBTELogo from '../../assets/MSBTE.jpg';

const Education = () => {
  return (
    <section id="educationCards">
      <h2 className="eduTitle">Education</h2>
      <div className="eduCardsContainer">
        <div className="eduCard">
          <img src={SUNYLogo} alt="SUNY College" className="eduLogo" />
          <div className="eduContent">
            <p className="eduDate">Jan 2024 – May 2025</p>
            <h3 className="eduDegree">Master's in Computer Science</h3>
            <p className="eduSchool">State University of New York at New Paltz</p>
            
          </div>
        </div>

        <div className="eduCard">
          <img src={SPPULogo} alt="KBT College" className="eduLogo" />
          <div className="eduContent">
            <p className="eduDate">June 2020 – July 2023</p>
            <h3 className="eduDegree">Bachelor's in Computer Science</h3>
            <p className="eduSchool">Pune University</p>
          
          </div>
        </div>

        <div className="eduCard">
          <img src={MSBTELogo} alt="GGSP College" className="eduLogo" />
          <div className="eduContent">
            <p className="eduDate">March 2017 – Nov 2020</p>
            <h3 className="eduDegree">Diploma in Computer Science</h3>
            <p className="eduSchool">Mumbai University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
