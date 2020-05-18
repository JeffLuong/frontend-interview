import * as React from 'react';

const RepositorySearchResults = ({ searchResults }) => {
  return (
    <ul>
      {searchResults.map(result => (
        <li>{result.name}</li>
      ))}
    </ul>
  );
};

export default RepositorySearchResults;