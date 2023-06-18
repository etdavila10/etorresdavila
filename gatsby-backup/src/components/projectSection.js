import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Project from './project';

const ProjectSection = () => {

  const data = useStaticQuery(graphql`
    query projectsQuery {
      allProjectsJson {
        edges {
          node {
            title
            description
            associatedPaper
            coAuthors
            languages
            frameworks
            id
            url
          }
        }
      }
    }
  `);

  const projects = data.allProjectsJson.edges;

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-section">
        {projects
          .map(project => {
            return <Project key={project.node.id} project={project.node} />
        })}
      </div>
    </div>
  );
};

export default ProjectSection;