import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Star } from '@phosphor-icons/react';
import { updateCartListAction } from '../../redux/actions';
import { ProductDetailsType, CommentType } from '../../types';
import { getProductById } from '../../services/api';

import {
  ProductDetails,
  ButtonAddCart,
  DivRate,
  DivInput,
  Form,
  ButtonComment,
  DivError,
  DivComments,
  FreteGratis } from './styles';

const DEFAULT_FORM = { email: '', description: '', rate: 0 };

function Details() {
  const dispatch = useDispatch();
  const { id = '' } = useParams();
  const [productData, setproductData] = useState<ProductDetailsType>();

  const items: number[] = [...(new Array(5).keys() as any)];

  const [activeIndex, setActiveIndex] = useState<number>();
  const [formValues, setFormValues] = useState<CommentType>(DEFAULT_FORM);
  const [invalidFields, setInvalidFields] = useState(false);
  const [comments, setComments] = useState<CommentType[]>([]);

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onClickStar = (index: number) => {
    setActiveIndex((oldState) => (oldState !== index ? index : oldState));
    setFormValues({
      ...formValues,
      rate: index,
    });
  };

  function validarEmail(inputEmail: string) {
    return regex.test(inputEmail);
  }

  const saveToLocalStorage = () => {
    if (id) {
      let storageComments = JSON.parse(localStorage.getItem(id) || '[]');
      storageComments = [...comments, formValues];
      localStorage.setItem(id, JSON.stringify(storageComments));
    }
  };

  const getProductImgUrl = (product: ProductDetailsType) => {
    return Object.entries(Object.entries(product.pictures))[0][1][1].url;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requiredFields = ['email'];
    const formData = new FormData(event.currentTarget);
    const hasEmptyField = requiredFields.some((field) => !formData.get(field));

    if (hasEmptyField || !validarEmail(formValues.email) || activeIndex === undefined) {
      setInvalidFields(true);
    } else {
      setInvalidFields(false);
      setComments([...comments, formValues]);
      setFormValues(DEFAULT_FORM);
      saveToLocalStorage();
      setActiveIndex(-1);
    }
  };

  const handleChange = (event:
  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    const getDescription = async () => {
      const productInfo = await getProductById(id);
      setproductData(productInfo);
    };

    const getDataFromStorage = () => {
      if (id) {
        const getLocalStorage = JSON.parse(localStorage.getItem(id) || '[]');
        setComments(getLocalStorage);
      }
    };
    getDataFromStorage();
    getDescription();
  }, [id]);

  return (
    <main>
      {productData
      && (
        <ProductDetails>
          <h2 data-testid="product-detail-name">{productData.title}</h2>
          <p data-testid="product-detail-price">{`Preço: R$ ${productData.price}`}</p>
          <p>{`Disponível: ${productData.available_quantity}`}</p>
          <p>{`Vendidos: ${productData.sold_quantity}`}</p>

          <img
            data-testid="product-detail-image"
            src={ getProductImgUrl(productData) }
            alt={ productData.title }
          />
          {productData.shipping?.free_shipping && (
            <FreteGratis data-testid="free-shipping">*Frete Grátis</FreteGratis>
          )}
          <ButtonAddCart
            data-testid="product-detail-add-to-cart"
            onClick={ () => dispatch(updateCartListAction(productData, 'add')) }
          >
            Adicionar ao carrinho
          </ButtonAddCart>
          {invalidFields && (
            <DivError>
              <p data-testid="error-msg">Campos inválidos</p>
            </DivError>)}
          <Form onSubmit={ (event) => handleSubmit(event) }>
            <DivRate>
              {items.map((index) => (
                <button
                  data-testid={ `${index + 1}-rating` }
                  type="button"
                  key={ `star_${index}` }
                  onClick={ () => onClickStar(index) }
                >
                  <Star
                    fill={ (index <= activeIndex!) ? 'orange' : 'gray' }
                    weight="fill"
                  />

                </button>
              ))}
            </DivRate>
            <DivInput>
              <label htmlFor="email">E-mail:</label>
              <input
                data-testid="product-detail-email"
                onChange={ handleChange }
                value={ formValues.email }
                type="text"
                name="email"
                id="email"
                autoComplete="off"
              />
            </DivInput>
            <textarea
              data-testid="product-detail-evaluation"
              onChange={ handleChange }
              value={ formValues.description }
              name="description"
              cols={ 30 }
              rows={ 10 }
            />
            <ButtonComment data-testid="submit-review-btn">Avaliar</ButtonComment>
          </Form>
        </ProductDetails>
      )}
      <DivComments>
        {(comments.length > 0)
          && comments.map((comment, index) => (
            <div key={ `${comment.email}${index}` }>
              <div>
                <p data-testid="review-card-email">{comment.email}</p>
                <div data-testid="review-card-rating">
                  {items
                    .map((indexStar) => {
                      return (
                        <Star
                          key={ indexStar }
                          fill={ (indexStar <= comment.rate!) ? 'orange' : 'gray' }
                          weight="fill"
                        />
                      );
                    })}

                </div>
              </div>
              <p data-testid="review-card-evaluation">{comment.description}</p>
            </div>
          ))}
      </DivComments>
    </main>
  );
}

export default Details;
