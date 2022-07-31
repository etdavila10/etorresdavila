import React from 'react';

const Project = (props) => {
  const project = props.project;

  const title = project.title;
  const description = project.description;
  const coAuthors = project.coAuthors;
  // const languages = project.languages;
  // const frameworks = project.frameworks;
  const url = project.url;

  return (
    <div className="project">
      <h3><a href={url}>{title}</a></h3>
      <p>{description}</p>
      <span>In collaboration with </span>
      {coAuthors.map((author, index) => {
        if (index === coAuthors.length - 1) {
          return <span key={index}> &#38; {author}.</span>;
        } else if (coAuthors.length === 2) {
          return <span key={index}> {author}</span>;
        }
        return <span key={index}> {author},</span>;
      })}
    </div>
  );
};

export default Project;