import { combineReducers } from "redux"

import userReducer from "./user/userReducer"
import cartReducer from "./cart/cartReducer"

const reducers = combineReducers({
	user: userReducer,
	cart: cartReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>
