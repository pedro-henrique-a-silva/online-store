import styled from 'styled-components';

export const ProductDetails = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  & p {
    margin: 0.5rem 0;
  }

  & img {
    width: 300px;
  }

  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  & textarea {
    border: none;
    line-height: 2rem;
    width: 19rem;
    height: 19rem;
  }
`;

export const ButtonAddCart = styled.button`
  background: ${(props) => props.theme.colors.primaryColor};
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  border: none;
  margin-top: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const DivRate = styled.div`
  & button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 19rem;

  & input {
    border: none;
    line-height: 2rem;
    margin-top: 0.5rem;
  }
`;

export const ButtonComment = styled.button`
    background: ${(props) => props.theme.colors.primaryColor};
    text-align: center;
    padding: 1rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    border: none;
    margin-top: 0.5rem;

    &:hover {
      background: ${(props) => props.theme.colors.secondaryColor};
    }

`;

export const DivError = styled.div`
    background-color: ${(props) => props.theme.colors.red500};
    font-weight: bold;
    padding: 1rem;
    text-align: center;
    margin: 1rem auto;
    width: 300px;
`;

export const DivComments = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;

  & > div {
    margin: 0.5rem 0;
  }

  & > div div{
    display: flex;
    margin-bottom: 0.5rem;
  }

  & > div div p {
    margin-right: 0.5rem;
  }
  

`;

export const FreteGratis = styled.span`
  margin: 1rem 0;
  font-weight: bold;
`;
