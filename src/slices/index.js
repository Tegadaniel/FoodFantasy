import { combineReducers } from 'redux'

import mealsReducer from './meals'
import cartReducer from './cart'

const rootReducer = combineReducers({
  meals: mealsReducer,
  cart: cartReducer
})

export default rootReducer