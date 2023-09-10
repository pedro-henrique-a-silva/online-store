import styled from 'styled-components';

export const CartItemElement = styled.li`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  margin-bottom: 1rem;
  position: relative;
  padding: 1rem 1.6rem 1rem 1rem;

  @media (min-width: 769px) {
      margin-left: 1.5rem;
      width: 600px;
  }
`;

export const ButtonQuantity = styled.button`
    background-color: ${(props) => props.theme.colors.gray100};
    border: 1px solid gray;
    background-color: #f5f5f5;
    border: 1px solid gray;
    margin: 0.5rem;
    font-weight: bold;
    padding: 0.1rem 0.4rem;
    font-size: 1.2rem;
    cursor: pointer;
`;

export const ButtonRemove = styled.button`
  position: absolute;
  right: 0;
  top: 2px;
  background: none;
  border: none;
  cursor: pointer;
  
`;

export const DivCheckout = styled.div`
  text-align: center;

  & a {
    display: inline-block;
    background: ${(props) => props.theme.colors.primaryColor};
    margin: 0 auto;
    padding: 1rem 2rem;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer
  }

  & a:hover {
      background: ${(props) => props.theme.colors.secondaryColor};
    }

  @media (max-width: 768px) {
    text-align: center;

  }

  @media (min-width: 769px) {
    text-align: left;
    margin-left: 1.5rem;
  }
`;

export const Message = styled.p`
  margin: 0 auto;
  text-align: center;
`;

export const AvailableQuantity = styled.p`
  margin: 0.5rem 0;
  font-size: 0.75rem;
`;
