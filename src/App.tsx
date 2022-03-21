import React from "react"
import { Routes, Route } from "react-router-dom"

import "./App.css"
import HomePage from "./pages/homepage/HomePage"
import ShopPage from "./pages/shop/ShopPage"
import Header from "./components/header/Header"

const HatsPage = () => (
	<div>
		<div>HATS PAGE</div>
	</div>
)

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/hats" element={<HatsPage />} />
			</Routes>
		</div>
	)
}

export default App
