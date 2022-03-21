import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/homepage/HomePage"
import ShopPage from "./pages/shop/ShopPage"

const HatsPage = () => (
	<div>
		<div>HATS PAGE</div>
	</div>
)

const App: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/hats" element={<HatsPage />} />
			</Routes>
		</div>
	)
}

export default App
