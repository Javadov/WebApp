export interface Product {
    //oldprice(oldprice: any): unknown
    _tag: string
    _id: any
    _imageName: any
    _name: string
    _category: string
    _description?: string
    _rating: number
    _price: number
    _quantity: number
}

export interface Products {
    //oldprice(oldprice: any): unknown
    _tag: string
    _id: any
    _imageName: any
    _name: string
    _category: string
    _description?: string
    _rating: number
    _price: number
    _quantity: number
}

export interface ProductRequest {
    _tag: string
    _imageName: string
    _name: string
    _category: string
    _description: string
    _rating: number
    _price: number
}