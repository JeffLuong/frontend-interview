import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';
import { REPOSITORIES_ROUTE } from '../constants/routes';
import Section from './Section';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: calc(33% - 1rem);
  border: 1px solid ${theme.colors.darkgray};
  border-radius: .25rem;
  margin-bottom: ${theme.space[3]};

  @media (max-width: ${theme.windowWidths[2]}) {
    width: calc(50% - 1rem);
  }

  @media (max-width: ${theme.windowWidths[0]}) {
    width: 100%;
  } 
`;

const HeaderSection = styled.div`
  padding: ${theme.space[3]};
  border-bottom: 1px solid ${theme.colors.lightgray};
  flex-grow: 1;
`;

const Header = styled.h3`
  margin: 0 0 ${theme.space[2]} 0;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  line-height: 1.5;

  > a {
    text-decoration: none;
    color: ${theme.colors.black};

    &:hover {
      border-bottom: 1px solid ${theme.colors.black};
    }
  }
`;

const Description = styled.p`
  margin: 0 0 ${theme.space[2]} 0;
  font-size: ${theme.fontSizes[1]};
`;

const Details = styled.div`
  padding: ${theme.space[3]};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > p {
    margin: 0;
    font-size: ${theme.fontSizes[0]};

    &:first-of-type {
      font-weight: ${theme.fontWeights.semibold};
      margin-bottom: .5rem;
      width: 100%;
    }
  }
`

const RepositorySearchResults = ({ searchResults = [], onRepoClick }) => (
  <Section>
    {searchResults.map(result => (
      <Card key={result.id}>
        <HeaderSection>
          <Header>
            <Link onClick={() => onRepoClick(result)} to={`${REPOSITORIES_ROUTE}/${result.id}`}>
              {result.fullName}
            </Link>
          </Header>
          <Description>{result.description}</Description>
        </HeaderSection>
        <Details>
          <p>Stars: {result.stargazersCount}</p>
          <p>Issues:{result.openIssues}</p>
          <p>Score: {result.score}</p>
        </Details>
      </Card>
    ))}
  </Section>
);

export default RepositorySearchResults;