import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { toggleCartHidden } from "../../redux/cart/cartActions"

import "./CartIcon.scss"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

const CartIcon: React.FC = () => {
	const dispatch = useDispatch()
	const toggleCart = bindActionCreators(toggleCartHidden, dispatch)

	return (
		<div className="cart-icon" onClick={toggleCart}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
		</div>
	)
}

export default CartIcon
