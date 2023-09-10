import { AnyAction } from 'redux';
import { ProductType } from '../../types';
import { CREATE_PRODUCT_LIST } from '../actions';

const INITIAL_STATE: ProductType[] = [];

const prodList = (state = INITIAL_STATE, actions: AnyAction) => {
  switch (actions.type) {
    case CREATE_PRODUCT_LIST:
      return ([
        ...actions.payload,
      ]);
    default:
      return state;
  }
};

export default prodList;
