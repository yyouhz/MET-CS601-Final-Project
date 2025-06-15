import React from 'react';
import './CV.css';

const CVItem = ({ title, time, postion, bulletPoints }) => {
  return (
    <div className="cv-item">
      <div className="cv-item-header">
        <h4>{title}</h4>
        <span>{time}</span>
      </div>
      <p>{postion}</p>
      <ul>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default CVItem;