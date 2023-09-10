import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DotOutline } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { ReduxState } from '../../types';
import { clearCartAction } from '../../redux/actions';

import {
  DivPrice,
  CartItemResume,
  DivTitle,
  CartResumeList,
  DivTotal,
  DivInputs,
  FormCheckout,
  DivError,
  ButtonFinishCheckout,
  CheckoutWrapper,
  WrapperForm,
  DivPagamentos } from './styles';

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   cpf: '',
//   phone: '',
//   cep: '',
//   address: '',
// };

function Checkout() {
  const cart = useSelector((state: ReduxState) => state.cart);
  const dispatch = useDispatch();

  // const [formValues, setFormValues] = useState(INITIAL_STATE);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [invalidFields, setInvalidFields] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requiredFields = [
      'name',
      'email',
      'cpf',
      'phone',
      'cep',
      'address',
    ];
    const formData = new FormData(event.currentTarget);

    const hasEmptyField = requiredFields.some((field) => !formData.get(field));

    if (hasEmptyField || !selectedPayment) {
      setInvalidFields(true);
    } else {
      setInvalidFields(false);

      dispatch(clearCartAction());
      navigate('/');
    }
  };

  return (
    <CheckoutWrapper>
      <div>
        <CartResumeList>
          {cart.map((cartItem) => {
            return (
              <CartItemResume key={ cartItem.id }>
                <DivTitle>
                  <DotOutline size={ 24 } weight="fill" />
                  <h2>
                    {cartItem.title}
                  </h2>
                </DivTitle>
                <DivPrice>
                  <span>{`${cartItem.quantity} x R$ ${cartItem.price}`}</span>
                  <span>{`R$ ${(cartItem.price * cartItem.quantity).toFixed(2)}`}</span>
                </DivPrice>
              </CartItemResume>
            );
          })}
        </CartResumeList>
        <DivTotal>
          <span>Total:</span>
          <span>
            {`R$ ${cart
              .reduce((total, { price, quantity }) => {
                return total + (quantity * price);
              }, 0).toFixed(2)}`}
          </span>
        </DivTotal>
      </div>
      <WrapperForm>
        {invalidFields && (
          <DivError>
            <p data-testid="error-msg">Campos inválidos</p>
          </DivError>)}

        <FormCheckout onSubmit={ handleSubmit }>
          <DivInputs>
            <label htmlFor="name">Nome completo:</label>
            <input
              name="name"
              data-testid="checkout-fullname"
              type="text"
              autoComplete="off"
            />
          </DivInputs>
          <DivInputs>
            <label htmlFor="email">E-mail:</label>
            <input
              name="email"
              data-testid="checkout-email"
              type="text"
              autoComplete="off"
            />
          </DivInputs>
          <DivInputs>
            <label htmlFor="cpf">Cpf:</label>
            <input
              name="cpf"
              data-testid="checkout-cpf"
              type="text"
              autoComplete="off"
            />
          </DivInputs>
          <DivInputs>
            <label htmlFor="phone">Telefone:</label>
            <input
              name="phone"
              data-testid="checkout-phone"
              type="text"
              autoComplete="off"
            />
          </DivInputs>
          <DivInputs>
            <label htmlFor="cep">Cep:</label>
            <input
              name="cep"
              data-testid="checkout-cep"
              type="text"
              autoComplete="off"
            />
          </DivInputs>
          <DivInputs>
            <label htmlFor="address">Endereço:</label>
            <input
              name="address"
              data-testid="checkout-address"
              type="text"
              autoComplete="off"
            />
          </DivInputs>
          <h3>Forma de pagamento: </h3>

          <DivPagamentos>
            <label htmlFor="boleto">Boleto</label>
            <input
              id="boleto"
              name="pagamento"
              type="radio"
              data-testid="ticket-payment"
              checked={ selectedPayment === 'boleto' }
              onChange={ () => setSelectedPayment('boleto') }
            />
            <label htmlFor="mastercard">MasterCard</label>
            <input
              id="mastercard"
              name="pagamento"
              type="radio"
              data-testid="master-payment"
              checked={ selectedPayment === 'mastercard' }
              onChange={ () => setSelectedPayment('mastercard') }
            />
            <label htmlFor="Visa">Visa</label>
            <input
              id="Visa"
              name="pagamento"
              type="radio"
              data-testid="visa-payment"
              checked={ selectedPayment === 'visa' }
              onChange={ () => setSelectedPayment('visa') }
            />
            <label htmlFor="Elo">Elo</label>
            <input
              id="elo"
              name="pagamento"
              type="radio"
              data-testid="elo-payment"
              checked={ selectedPayment === 'elo' }
              onChange={ () => setSelectedPayment('elo') }
            />
          </DivPagamentos>
          <ButtonFinishCheckout
            data-testid="checkout-btn"
          >
            Finalizar compra

          </ButtonFinishCheckout>
        </FormCheckout>

      </WrapperForm>
    </CheckoutWrapper>
  );
}

export default Checkout;
