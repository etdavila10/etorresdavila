import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Publication from './publication';

const PublicationSection = () => {
  const data = useStaticQuery(graphql`
    query publicationsQuery {
      allPublicationsJson {
        edges {
          node {
            Site
            coAuthors
            id
            journal
            submissionStatus
            title
            type
            url
            year
            volume
            pages
            number
          }
        }
      }
    }
  `);

  const publications = data.allPublicationsJson.edges;

  return (
    <div id="publications">
      <h1>Publications</h1>
      <div className="publication-section" id="research-papers">
        <h2>Academic Research</h2>
        {publications
          .filter(publication => publication.node.type === 'researchPaper')
          .map(publication => {
          return <Publication key={publication.node.id} publication={publication.node} />;
        })}
      </div>
      <div className="publication-section" id="writing-contributions">
        <h2>Writing Contributions</h2>
        {publications
          .filter(publication => publication.node.type === 'writingContribution')
          .map(publication => {
          return <Publication key={publication.node.id} publication={publication.node} />;
        })}
      </div>
    </div>
  );
};

export default PublicationSection;