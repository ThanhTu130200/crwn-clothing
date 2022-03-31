import React from "react"
import { CartItem as CartItemType } from "../../model"

import "./CartItem.scss"

type Props = {
	item: CartItemType
}

const CartItem: React.FC<Props> = ({ item: { imageUrl, price, name, quantity } }) => {
	return (
		<div className="cart-item">
			<img src={imageUrl} alt="item" />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x ${price}
				</span>
			</div>
		</div>
	)
}

export default CartItem
