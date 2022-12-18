import { Product } from "./ProductModel"


export interface CartItem {
    articleNumber: string
    product: Product
    quantity: number
}