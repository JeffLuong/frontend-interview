import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';
import RepositorySearchResults from './RepositorySearchResults';
import useQuery from '../hooks/useQuery';

/**
 * Once given an input, fetch the repositories we searched
 * via:
 *
 * https://api.github.com/search/repositories?q={}
 *
 * This should not kickoff a fetch for every keystroke, but rather when
 * typing stops.
 *
 * Documentation for the search api is here:
 * https://developer.github.com/v3/search/#search-repositories
 */

const fetchRepos = async(q) => {
  const results = await fetch(`https://api.github.com/search/repositories?q=${q}`);
  return results.json();
};

const Repositories = () => {
  const [query, setQuery] = useState('');
  const debQuery = useDebounce(query, 250);
  const [searchResults, setSearchResults] = useState([]);

  const { results, loading, error } = useQuery(() => {
    if (debQuery) {
      return fetchRepos(debQuery);
    }
    return Promise.resolve({});
  }, [debQuery]);

  useEffect(() => {
    if (results && results.items) {
      setSearchResults(results.items || []);
    }
  }, [results]);

  return (
    <div>
      <input
        name='search-terms'
        value={query}
        onChange={e => setQuery(e.target.value)} />
      {loading && <h1>Loading....</h1>}
      {error && <h2>An error occurred when searching for repositories. Please try again.</h2>}
      {!loading && searchResults && searchResults.length ? (  
        <RepositorySearchResults searchResults={searchResults} />
      ) : (
        <div>Enter some test to search github repositories</div>
      )}
    </div>
  );
};

export default Repositories;
