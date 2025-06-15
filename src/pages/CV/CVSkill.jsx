import React from 'react';
import './CV.css';

const CVSkill = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h4>{title}</h4>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default CVSkill;