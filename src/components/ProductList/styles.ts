import styled from 'styled-components';

export const ProducListStyled = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ProductItem = styled.li`
  border-radius: 5px;
  box-shadow: 1px 0px 8px -4px black;
  color: ${(props) => props.theme.colors.gray600};

  @media (max-width: 768px) {
    text-align: center;
    background-color: white;
    margin: 1rem 1rem;
    padding: 1rem;
  }

  @media (min-width: 769px) {
    flex-basis: 200px;
    text-align: center;
    background-color: white;
    margin: 1rem 1rem;
    padding: 1rem;
    height: 15.5rem;

    & div {
      height: 11.5rem;
    }

    & h3 {
      font-size: 0.75rem;
    }
    
  }
`;

export const ProductTitle = styled.h3`
  
  margin: 0.5rem 0;
`;

export const ButtonAddCart = styled.button`
    background: ${(props) => props.theme.colors.primaryColor};
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border: none;
    margin-top: 0.5rem;

    &:hover {
      background: ${(props) => props.theme.colors.secondaryColor};
    }

    @media (max-width: 768px) {
      padding: 1rem;
    }

    @media (min-width: 769px) {
      padding: 0.5rem;
    }
`;

export const FreteGratis = styled.span`
  font-weight: bold;
`;

export const Message = styled.p`
  margin: 0 auto;
`;
