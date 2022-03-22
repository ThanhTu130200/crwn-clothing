import React from "react"
import "./CustomButton.scss"

type Props = {
	children: any
	isGoogleSignIn?: boolean
	type?: string
	onClick?: any
}

const CustomButton: React.FC<Props> = ({ children, onClick, isGoogleSignIn }) => {
	return (
		<button
			onClick={onClick ? onClick : undefined}
			className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}>
			{children}
		</button>
	)
}

export default CustomButton
