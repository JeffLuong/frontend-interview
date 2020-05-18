import styled from 'styled-components';
import theme from '../theme';

const SectionWidth = {
  large: '50rem',
  medium: '40rem',
  small: '30rem',
  xsmall: '18rem'
};

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

export default Section;