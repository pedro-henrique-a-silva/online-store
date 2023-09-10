import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
