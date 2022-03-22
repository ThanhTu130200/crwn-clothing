import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import HomePage from "./pages/homepage/HomePage"
import ShopPage from "./pages/shop/ShopPage"
import Header from "./components/header/Header"
import SignIn from "./components/sign-in/SignIn"
import { auth } from "./firebase/firebase"

const HatsPage = () => (
	<div>
		<div>HATS PAGE</div>
	</div>
)

const App: React.FC = () => {
	const [currentUser, setCurrentUser] = useState<any>(null)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user)
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
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</div>
	)
}

export default App
