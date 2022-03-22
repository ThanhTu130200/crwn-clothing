import React from "react"

import MenuItem from "../menu-item/MenuItem"
import "./Directory.scss"
import { DirectoryState } from "../../model"

const Directory: React.FC = () => {
	const state: DirectoryState[] = [
		{
			title: "hats",
			imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
			size: undefined,
			id: 1,
		},
		{
			title: "jackets",
			imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
			size: undefined,
			id: 2,
		},
		{
			title: "sneakers",
			imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
			size: undefined,
			id: 3,
		},
		{
			title: "womens",
			imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
			size: "large",
			id: 4,
		},
		{
			title: "mens",
			imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
			size: "large",
			id: 5,
		},
	]

	return (
		<div className="directory-menu">
			{state.map((section) => (
				<MenuItem
					key={section.id}
					title={section.title}
					imageUrl={section.imageUrl}
					size={section.size}
				/>
			))}
		</div>
	)
}

export default Directory
