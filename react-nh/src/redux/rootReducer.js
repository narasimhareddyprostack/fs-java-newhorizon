import { combineReducers } from 'redux'
import { wishReducer } from './wish/wish.reducer'
import { productReducer } from './product/product.reducer'
let rootReducer = combineReducers({ wish: wishReducer, product: productReducer });

export { rootReducer }