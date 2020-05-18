import React, { useEffect, useState } from 'react';
import Section from './Section';
import styled from 'styled-components';
import theme from '../theme';
import useQuery from '../hooks/useQuery';
import { serializeRepo } from './Repositories';

const fetchRepoById = async(id) => {
  const repo = await fetch(`https://api.github.com/repositories/${id}`);
  return repo.json();
};

const Article = styled.article`
  width: 100%;
`;

const Details = styled.div`
  > a {
    display: inline-block;

    &:first-of-type {
      margin-right: ${theme.space[1]};
    }
  }
`;

const ExternalLink = styled.a`
  font-weight: ${theme.fontWeights.semibold};
`;

const LicenseDetails = styled.div`
  color: ${theme.colors.black};
`;

const Header = styled.h1`
  font-weight: ${theme.fontWeights.bold};
`;

const Description = styled.p`
  color: ${theme.colors.black};
`;

const License = ({ name, spdx_id, url }) => (
  <LicenseDetails>
    <p>{name}</p>
    <p>{spdx_id}</p>
    {url &&
      <p>
        <ExternalLink target="_blank" rel="noopener noreferrer" href={url}>
          View License
        </ExternalLink>
      </p>
    }
  </LicenseDetails>
);

const RepositoryView = ({
  description,
  fullName,
  issuesUrl,
  license,
  openIssues,
  pullsUrl,
  score,
  stargazersCount
}) => (
  <Section>
    <Article>
      <Header>{fullName}</Header>
      <Description>{description}</Description>
      <Details>
        <ExternalLink href={issuesUrl}>View {openIssues} Issues</ExternalLink>
        <ExternalLink href={pullsUrl}>View Pull Requests</ExternalLink>
      </Details>
      {license &&
        <>
          <h3>License</h3>
          <License {...license} />
        </>
      }
    </Article>
  </Section>
);

const FetchRepository = ({ id }) => {
  const [repo, setRepo] = useState();
  const { result, error, loading } = useQuery(() => {
    if (id) {
      return fetchRepoById(id);
    }
    return Promise.resolve(null);
  }, [id]);

  useEffect(() => {
    if (result) {
      setRepo(serializeRepo(result));
    }
  }, [result]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error || !repo) {
    return <h3>An error occurred fetching repository ID {id}</h3>;
  }

  return <RepositoryView {...repo} />;
};

const Repository = ({ repo, match: { params: { id } } }) => {
  if (repo) {
    return <RepositoryView {...repo} />;
  }
  return <FetchRepository id={id} />
}

export default Repository;