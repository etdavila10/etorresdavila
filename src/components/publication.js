import React from 'react';

const Publication = (props) => {
  const publication = props.publication;
  const title = publication.title;
  const coAuthors = publication.coAuthors;
  const submissionStatus = publication.submissionStatus;
  const url = publication.url;
  const site = publication.Site;

  const journal = publication.journal;

  return (
    <div className="publication">
      <h3><a href={url}>{title}</a></h3>
      <span>In collaboration with</span>
      {coAuthors.map((author, index) => {
        if (index === coAuthors.length - 1) {
          return <span key={index}>&#38; {author}.</span>;
        } else if (coAuthors.length === 2) {
          return <span key={index}>{author}</span>;
        }
        return <span key={index}>{author},</span>;
      })}
      {submissionStatus === 'Submitted' && <span><em>Submitted</em>.</span>}
      {submissionStatus === 'Accepted' && <span><em>{journal}</em>.</span>}
      {site && <span><em>{site}</em>.</span>}
    </div>
  );
};

export default Publication;