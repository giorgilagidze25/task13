import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Projekts() {
  const projects = [
    {
      id: 1,
      githubUrl: 'https://github.com/giorgilagidze25/task9',
      vercelUrl: 'https://task9-six.vercel.app',
      img: 'assets/img2.png',
    },
    {
      id: 2,
      githubUrl: 'https://github.com/giorgilagidze25/task10',
      vercelUrl: 'https://task10-nu.vercel.app',
      img: 'assets/img1.png',
    },
  ];

  return (
    <div className="projekts-container">
      <Header />
      <h1 className="projekts-title">Home Projects Hobby</h1>
      <div className="projekts-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.img} alt={`Project ${project.id}`} />
            </div>
            <div className="project-links">
              <Link to={project.githubUrl} target="_blank" className="project-link">
                GitHub
              </Link>
              <Link to={project.vercelUrl} target="_blank" className="project-link">
                Vercel
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
