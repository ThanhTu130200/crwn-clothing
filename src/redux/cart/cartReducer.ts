import { CartActionTypes } from "./cartTypes"
import { addItemToCart } from "./cartUtils"

const initialState = {
	hidden: true,
	cartItems: [],
}

type Action = {
	type: string
	payload?: any
}

const cartReducer = (state: any = initialState, action: Action) => {
	switch (action.type) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			}
		case CartActionTypes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			}
		default:
			return state
	}
}

export default cartReducer
