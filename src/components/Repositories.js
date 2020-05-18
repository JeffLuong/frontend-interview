import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import useDebounce from '../hooks/useDebounce';
import RepositorySearchResults from './RepositorySearchResults';
import useQuery from '../hooks/useQuery';
import { REPOSITORIES_ROUTE, REPOSITORY_ID_ROUTE } from '../constants/routes';
import Repository from './Repository';

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

export const serializeRepo = repo => {
  const {
    id, full_name, description, stargazers_count, open_issues, issues_url, pulls_url, license, score
  } = repo;
  return {
    description,
    fullName: full_name,
    id,
    issuesUrl: issues_url,
    license,
    openIssues: open_issues,
    pullsUrl: pulls_url,
    score,
    stargazersCount: stargazers_count
  }
};

/**
 * Serializes only the information we need from each item.
 * @param {object[]} items
 * @returns {object[]}
 */
const serializeResults = (items = []) => {
  return items.map(serializeRepo);
};

const Repositories = ({ onRepoClick, searchResults, onLoadedRepos }) => {
  const [query, setQuery] = useState('');
  const debQuery = useDebounce(query, 250);
  const { result, loading, error } = useQuery(() => {
    if (debQuery) {
      return fetchRepos(debQuery);
    }
    return Promise.resolve({});
  }, [debQuery]);

  useEffect(() => {
    if (result && result.items) {
      onLoadedRepos(serializeResults(result.items));
    }
  }, [result, onLoadedRepos]);

  return (
    <div>
      <input
        name='search-terms'
        value={query}
        onChange={e => setQuery(e.target.value)} />
      {loading && <h1>Loading....</h1>}
      {error && <h2>An error occurred when searching for repositories. Please try again.</h2>}
      {!loading && searchResults && searchResults.length ? (  
        <RepositorySearchResults searchResults={searchResults} onRepoClick={onRepoClick} />
      ) : (
        <div>Enter some test to search github repositories</div>
      )}
    </div>
  );
};

export default function() {
  // Local state for this route so we can navigate between /repositories <---> /repositories/:id
  // without losing the fetched repos. Ideally would use redux but given the constraints, will not for this exercise.
  const [currRepo, setCurrRepo] = useState(null);
  const [loadedRepos, setLoadedRepos] = useState([]);
  return (
    <Switch>
      <Route exact path={REPOSITORIES_ROUTE} render={() => (
        <Repositories searchResults={loadedRepos} onLoadedRepos={setLoadedRepos} onRepoClick={setCurrRepo} />
      )} />
      <Route path={REPOSITORY_ID_ROUTE} render={props => <Repository {...props} repo={currRepo} />} />
    </Switch>
  );
};
