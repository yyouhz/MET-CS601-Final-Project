// src/pages/CV/CV.jsx
import React from 'react';
import './CV.css';
import CVItem from './CVItem';
import CVSkill from './CVSkill';

// CV page
const CV = () => {
  return (
    <div className="cv-content">
      <h2>Curriculum Vitae</h2>
      <a href="./files/YuhaoWu_CV.pdf" className="download-cv-button" target="_blank">View CV in PDF</a>
      <div className="cv-container">
        <section className="education">
          <h3>Education</h3>
          <CVItem
            title="Boston University"
            time="09/2024 - Present"
            postion="Master of Science in Software Development"
            bulletPoints={[]}
          />

          <CVItem
            title="University of Sheffield"
            time="09/2018 - 11/2019"
            postion="Master of Science in Management"
            bulletPoints={[]}
          />

          <CVItem
            title="Huazhong Agricultural University"
            time="09/2013 - 06/2017"
            postion="Bachelor of Fine Arts"
            bulletPoints={[]}
          />
        </section>

        <section className="experience">
          <h3>Work Experience</h3>
          <CVItem
            title="Foreign Language Teaching and Research Press"
            time="04/2022 - 09/2023"
            postion="Product Operations Manager"
            bulletPoints={[
              "Developed a web application using JavaScript, React, React Router allowing users to filter and register for courses",
              "Implemented an evaluation system using Python, Flask, RESTful APIs and MySQL to gather user feedback on course content and functionality, facilitating continuous improvement",
              "Utilized Python and Pandas to analyze user behavior and profile, including age, gender, attendance rate and others, to provide data-driven optimization suggestions, increasing 12.8% of the click-through rate of the user learning page",
              "Collaborated with the teacher team, used Matplotlib to analyze student engagement and homework submission rates visually, generating course quality reports for evaluation"
            ]}
          />

          <CVItem
            title="NetEase Youdao Information Technology Co., Ltd."
            time="09/2019 - 04/2022"
            postion="Advanced Product Operations"
            bulletPoints={[
              "Developed a learning check-in application on the WeChat platform, enabling users to daily check-in, upload homework pictures, and interact with classmates through messaging, seamlessly integrated with WeChat communities for a cohesive learning environment",
              "Utilized React, JavaScript and Axios to enable users to register for free courses through the website, accurately profiling users by collecting information and analyzing their usage behavior",
              "Conducted quarterly distribution of survey questionnaires, analyzed data using Python, and generated reports from various dimensions including product functionality, quantified learning outcomes, and teacher feedback"
            ]}
          />
        </section>

        <section className="skills">
          <h3>Skills</h3>
          <div className="skills-grid">
            <CVSkill
              title="Programming"
              skills={["JavaScript/TypeScript", "Python", "Java", "HTML/CSS"]}
            />

            <CVSkill
              title="Frameworks"
              skills={["React", "Node.js", "Express", "Django"]}
            />

            <CVSkill
              title="Design"
              skills={["UI/UX Design", "Figma", "Adobe Creative Suite", "Responsive Design"]}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;