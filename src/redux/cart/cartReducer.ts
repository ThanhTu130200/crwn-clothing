import { CartActionTypes } from "./cartTypes"

const initialState = {
	hidden: true,
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
		default:
			return state
	}
}

export default cartReducer
