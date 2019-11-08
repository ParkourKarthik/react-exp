import productList from "./products";
import product from './product'
import { combineReducers } from 'redux'

export default combineReducers({
  product,
  productList
});