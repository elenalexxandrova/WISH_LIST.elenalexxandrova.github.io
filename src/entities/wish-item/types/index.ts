export interface WishItem {
    id: number
    name?: string
    img_src: string
    creator?: WishItemCreator 
    is_favorite: boolean
    is_saved: boolean
    price?: number
    // или сделать тоже тпи доски с id name
    boards?: string[]
}

export interface WishItemCreator {
    id: number
    name: string
    avatar_src?: string
}