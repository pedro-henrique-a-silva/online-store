import { ProductType } from '../../types';

export const CREATE_PRODUCT_LIST = 'CREATE_PRODUCT_LIST';

export const UPDATE_CART_LIST = 'UPDATE_CART_LIST';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const updateProductListAction = (productList: ProductType[]) => ({
  type: CREATE_PRODUCT_LIST,
  payload: productList,
});

export const updateCartListAction = (cartItem: ProductType, op: string) => ({
  type: UPDATE_CART_LIST,
  payload: { cartItem, op },
});

export const removeCartItemAction = (cartItem: ProductType) => ({
  type: REMOVE_CART_ITEM,
  payload: cartItem,
});

export const clearCartAction = () => ({
  type: CLEAR_CART,
});
