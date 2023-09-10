import { AnyAction } from 'redux';
import { CartItem } from '../../types';
import { UPDATE_CART_LIST, REMOVE_CART_ITEM, CLEAR_CART } from '../actions';

const INITIAL_STATE: CartItem[] = [];

const cartList = (state = INITIAL_STATE, actions: AnyAction) => {
  let title: string;
  let cardItemExist: boolean;
  switch (actions.type) {
    case UPDATE_CART_LIST:
      title = actions.payload.cartItem.title;
      cardItemExist = state
        .find((item) => item.title === title) !== undefined;

      if (!cardItemExist) {
        return [...state, { ...actions.payload.cartItem, quantity: 1 }];
      }

      return state
        .map((item) => {
          if (item.title === title) {
            return { ...item,
              quantity: (actions.payload.op === 'add')
                ? item.quantity + 1 : item.quantity - 1 };
          }
          return item;
        });
    case REMOVE_CART_ITEM:
      return state.filter((item) => item.title !== actions.payload.title);

    case CLEAR_CART:
      return [];
    default:
      return state;
  }
};

export default cartList;
