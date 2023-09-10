import styled from 'styled-components';

export const CategoryList = styled.ul`
  margin: 0 2rem;
  

  & li:last-child { 
    border-bottom: none;
  }

  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }

  @media (min-width: 769px) {
    width: 200px;
  }
`;

export const CategoryTitle = styled.li`
  border: none;
  background-color: white;
  padding: 0.5rem 0;
  font-weight: bold;
  cursor: pointer;

  & h2 {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 100vw;
    margin-bottom: 1rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 1rem;
    width: 200px;
    
  }
 
`;

export const CategoryItem = styled.li`
  border: none;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid gray;
  padding: 0.5rem 0;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray100};
  }

  & button {
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  

  @media (max-width: 768px) {
    display: block;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  @media (min-width: 769px) {
    width: 200px;
    
    & button {
      text-align: left;
    }
  }

`;
