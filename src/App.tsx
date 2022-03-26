import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import HomePage from "./pages/homepage/HomePage"
import ShopPage from "./pages/shop/ShopPage"
import Header from "./components/header/Header"
import { auth, createUserProfileDocument } from "./firebase/firebase"
import { onSnapshot } from "firebase/firestore"
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUpPage"

const HatsPage = () => (
	<div>
		<div>HATS PAGE</div>
	</div>
)

const App: React.FC = () => {
	const [currentUser, setCurrentUser] = useState<null | object>(null)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth, null)
				if (userRef) {
					onSnapshot(userRef, (snapshot: any) => {
						setCurrentUser({
							id: snapshot.id,
							...snapshot.data(),
						})
					})
				}
			} else setCurrentUser(userAuth)
		})

		return () => unsubscribe()
	}, [])

	return (
		<div>
			<Header currentUser={currentUser} />
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
