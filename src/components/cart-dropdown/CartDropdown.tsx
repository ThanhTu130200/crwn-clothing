import React from "react"
import { useSelector } from "react-redux"

import { State } from "../../redux/rootReducer"
import { CartItem as CartItemType } from "../../model"

import CustomButton from "../custom-button/CustomButton"
import CartItem from "../cart-item/CartItem"

import "./CartDropdown.scss"

const CartDropdown: React.FC = () => {
	const cartItems = useSelector((state: State) => state.cart.cartItems)
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem: CartItemType) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default CartDropdown
