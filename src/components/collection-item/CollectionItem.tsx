import React from "react"
import "./CollectionItem.scss"

type Props = {
	id: number
	name: string
	price: number
	imageUrl: string
}

const CollectionItem: React.FC<Props> = ({ id, name, price, imageUrl }) => {
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="name">{price}</span>
			</div>
		</div>
	)
}

export default CollectionItem
