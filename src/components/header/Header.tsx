import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { State } from "../../redux/rootReducer"

import { auth } from "../../firebase/firebase"
import CartIcon from "../cart-icon/CartIcon"
import CartDropdown from "../cart-dropdown/CartDropdown"

import { ReactComponent as Logo } from "../../assets/crown.svg"

import "./Header.scss"

const Header: React.FC = () => {
	const { currentUser } = useSelector((state: State) => state.user)
	const { hidden } = useSelector((state: State) => state.cart)
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}
		</div>
	)
}

export default Header
