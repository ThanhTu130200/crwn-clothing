import React from "react"
import "./CollectionPreview.scss"
import CollectionItem from "../collection-item/CollectionItem"

type Props = {
	title: string
	items: {
		id: number
		name: string
		imageUrl: string
		price: number
	}[]
}

const CollectionPreview: React.FC<Props> = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toLocaleUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CollectionItem
							key={item.id}
							id={item.id}
							price={item.price}
							name={item.name}
							imageUrl={item.imageUrl}
						/>
					))}
			</div>
		</div>
	)
}

export default CollectionPreview
