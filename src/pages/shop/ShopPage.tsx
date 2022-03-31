import React from "react"
import SHOP_DATA from "./ShopData"
import CollectionPreview from "../../components/preview-collection/CollectionPreview"

const ShopPage: React.FC = () => {
	const state: any = SHOP_DATA
	return (
		<div className="shop-page">
			{state.map(({ id, ...otherCollectionProps }: any) => (
				<CollectionPreview key={id} {...otherCollectionProps} />
			))}
		</div>
	)
}

export default ShopPage
