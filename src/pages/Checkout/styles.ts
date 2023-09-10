import styled from 'styled-components';

export const CartResumeList = styled.ul`
  background-color: ${(props) => props.theme.colors.white};
  padding: 1rem;

  @media (min-width: 769px) {
    flex-basis: 500px;
  }
`;

export const CartItemResume = styled.li`
  margin: 0.7rem 0;
`;

export const DivPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  
`;

export const DivTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const DivTotal = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.white};
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;

export const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  & label {
    margin-bottom: 0.5rem;
  }

  & input {
    border: none;
    line-height: 2rem;

  }

  @media (max-width: 768px) {
    & input {
      width: 300px;
    }
  }

  @media (min-width: 769px) {
    & input {
      width: 200px;
      margin: 0.5rem;
    }
  }
`;

export const DivRadios = styled.div`
  @media (min-width: 769px) {
    display: block;
  }
`;

export const WrapperForm = styled.div`
   @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormCheckout = styled.form`
 
  display: flex;
  
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

export const ButtonFinishCheckout = styled.button`
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

export const CheckoutWrapper = styled.div`
  display: flex;

  & h3 {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
      flex-direction: column;
  }

  @media (min-width: 769px) {
    flex-direction: row;

    & > div {
      margin-right: 2rem;
      width: 32rem;
    }
   
  }
`;

export const DivPagamentos = styled.div`
  display: flex;
  align-items: center;
`;
