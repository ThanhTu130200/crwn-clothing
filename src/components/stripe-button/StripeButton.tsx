import React from "react"
import StripeCheckout from "react-stripe-checkout"

type Props = {
	price: number
}

const StripeButton: React.FC<Props> = ({ price }) => {
	const priceForStripe = price * 100
	const publicShableKey =
		"pk_test_51Kljh1BZQTng4389ohrKPCkJRnzCijRgeebcL5U83C8zB3rR9Bbi7kOEl8UDxnjrsnDu2YHfeC6ENN1QI1r9e6x900qEdcLtrO"
	const onToken = (token: any) => {
		console.log(token)
		alert("Payment Successful")
	}

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="../../assets/crown.png
        "
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publicShableKey}
		/>
	)
}

export default StripeButton
