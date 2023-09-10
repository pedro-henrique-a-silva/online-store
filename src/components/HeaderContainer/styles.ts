import styled from 'styled-components';

export const Header = styled.header`
  align-items: center;
  background-color: #FFF159;
  display: flex;
  justify-content: space-around;
  padding: 1em;
  min-width: 375px;
  max-width: 100vw;
  margin-bottom: 3em;
  
  & form {
    flex-grow: 1;
    max-width: 500px;
    min-width: 190px;
    margin: 0 1.5rem;
  }

  & h2 {
    content: 'Livre Mercado';
    text-align: left;
    
  }

  & nav {
    margin: 0 0.5rem;
  }

  @media (max-width: 768px) {
    & form {
      max-width: 300px;
    }

    & h2 {
      content: "LM";
    }
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  & a {
    margin: 0 0.5rem;
  }
`;

export const FormSearch = styled.form`

  position: relative;

  & input {
    width: 100%;
    border: none;
    padding: 0.75rem;
    outline: none;
  }

  & button {
    background: none;
    border: none;
    position: absolute;
    top: 50%;
    right: 0;
    font-size: 1rem;
    transform: translateY(-50%);
    border-left: 1px solid;
    padding: 0 0.5rem;
    cursor: pointer;
  }
`;

export const DivCartHeader = styled.div`
  position: relative;

  & div {
    background-color: ${(props) => props.theme.colors.white};
    position: absolute;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -7px;
    right: -12px;
  }
`;
