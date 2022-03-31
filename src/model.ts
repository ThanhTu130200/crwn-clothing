export interface DirectoryState {
	title: string
	imageUrl: string
	size: string | undefined
	id: number
}

export interface Item {
	id: number
	name: string
	imageUrl: string
	price: number
}

export type CartItem = Item & { quantity: number }
