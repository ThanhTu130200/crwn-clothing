import React from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { State } from "../../redux/rootReducer"

import { auth } from "../../firebase/firebase"

import { ReactComponent as Logo } from "../../assets/crown.svg"

import "./Header.scss"

const Header: React.FC = () => {
	const state = useSelector((state: State) => state.user.currentUser)
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
				{state ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	)
}

export default Header
