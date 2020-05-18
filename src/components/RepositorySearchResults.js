import * as React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const SectionWidth = {
  large: '50rem',
  medium: '40rem',
  small: '30rem',
  xsmall: '18rem'
};

const CardWidth = {
  large: '25%',
  medium: '33%',
  small: '50%',
  xsmall: '100%'
}

const Section = styled.section`
  display: flex;
  max-width: ${SectionWidth.large};
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${theme.windowWidths[2]}) {
    max-width: ${SectionWidth.medium};
  }

  @media (max-width: ${theme.windowWidths[1]}) {
    max-width: ${SectionWidth.small};
  }

  @media (max-width: ${theme.windowWidths[0]}) {
    max-width: ${SectionWidth.xsmall};
  } 
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
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

const Header = styled.h3`
  margin: 0 0 ${theme.space[2]} 0;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`;

const Description = styled.p`
  margin: 0 0 ${theme.space[2]} 0;
  font-size: ${theme.fontSizes[1]};
  flex-grow: 1;
`;

const Details = styled.div`
  display: flex;

  > p {
    margin: 0;
  }
`

const RepositorySearchResults = ({ searchResults = [] }) => {
  return (
    <Section>
      {searchResults.map(result => (
        <Card>
          <Header>{result.fullName}</Header>
          <Description>{result.description}</Description>
          <Details>
            <p>{result.stargazersCount}</p>
            <p>{result.openIssues}</p>
            <p>{result.score}</p>
          </Details>
        </Card>
      ))}
    </Section>
  );
};

export default RepositorySearchResults;