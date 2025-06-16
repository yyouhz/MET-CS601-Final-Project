// src/pages/Projects/Projects.jsx
import React, { useState } from 'react';
import projectData from '../../data/project-data.json';
import './Projects.css';

// Projects page
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const projects = projectData.projects;

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Define categories for filtering projects
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'ai', name: 'AI/ML Projects' }
  ];

  // Render the projects page
  return (
    <div className="projects-content">
      <h2>My Projects</h2>
      <p className="subtitle">Explore my recent work and personal projects</p>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="category-badge">{project.category}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <button className="view-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;