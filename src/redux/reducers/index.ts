import { combineReducers } from 'redux';
import products from './prodList';
import cart from './cartList';

const rootReducer = combineReducers({ products, cart });

export default rootReducer;
