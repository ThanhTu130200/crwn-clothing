import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import "./App.css"
import HomePage from "./pages/homepage/HomePage"
import ShopPage from "./pages/shop/ShopPage"
import Header from "./components/header/Header"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUpPage"
import { auth, createUserProfileDocument } from "./firebase/firebase"
import { onSnapshot } from "firebase/firestore"
import { setCurrentUser } from "./redux/user/userActions"

const HatsPage = () => (
	<div>
		<div>HATS PAGE</div>
	</div>
)

const App: React.FC = () => {
	const dispatch = useDispatch()
	const setUser = bindActionCreators(setCurrentUser, dispatch)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth, null)
				if (userRef) {
					onSnapshot(userRef, (snapshot: any) => {
						setUser({
							id: snapshot.id,
							...snapshot.data(),
						})
					})
				}
			} else setUser(userAuth)
		})

		return () => unsubscribe()
	}, [])

	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/hats" element={<HatsPage />} />
				<Route path="/signin" element={<SignInAndSignUp />} />
			</Routes>
		</div>
	)
}

export default App
