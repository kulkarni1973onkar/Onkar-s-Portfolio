import React from 'react';
import './tskills.css';

const skillsData = {
  "Frontend Technologies": [
    { name: "HTML5", level: 85 },
    { name: "CSS3 + Flex/Grid", level: 85 },
    { name: "JavaScript (ES6+)", level: 80 },
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 85 },
  ],
  "Backend Technologies": [
    { name: "Node.js + Express", level: 85 },
    { name: "REST APIs", level: 85 },
    { name: "SQL", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "JWT (JSON Web Tokens)", level: 85 },
  ],
};

const Skills = () => {
  return (
    <section id="skillsSection">
      <h2 className="skillsTitle">Technical Skills</h2>
      <p className="skillsDesc">
        My technical toolkit covers full-stack development, including building scalable backend systems, responsive frontends, and working across a range of modern languages and frameworks.
      </p>

      <div className="skillsContainer">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skillsColumn" key={category}>
            <h3 className="skillsCategory">{category}</h3>
            {skills.map((skill, index) => (
              <div className="skillBarWrapper" key={index}>
                <div className="skillBarTop">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skillBarBase">
                  <div
                    className="skillBarFill"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
