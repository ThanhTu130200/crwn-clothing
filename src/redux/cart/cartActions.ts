import { CartActionTypes } from "./cartTypes"

import { Item } from "../../model"

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item: Item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
})
