import { createContext, useContext, useState } from "react";
import { Product, ProductRequest } from "../models/ProductModel";
import { ProductProviderProps } from '../models/ProductProviderProps'

interface IProductProvider {
    children: any
}

export interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    products: Product[]
    featured: Product[]
    square: Product[]
    tripple: Product[]
    getProduct: (articleNumber: string) => void
    getProducts: () => void
    getFeatured: (take?: number) => void
    getSquare: (take?: number) => void
    getTripple: (take?: number) => void
    create: (e: React.FormEvent) => void
}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () =>{return useContext(ProductContext)}

export const ProductProvider = ({children} : ProductProviderProps) => {
    const baseUrl:string = 'http://localhost:9000/api/products'
    const EMPTY_PRODUCT: Product = { _tag: '', _id: '', _imageName: '', _name: '', _category: '', _description: '', _rating: 0, _price: 0, _quantity: 0}
    const PRODUCTREQUEST_DEFAULT: ProductRequest = { _tag: '', _imageName: '', _name: '', _category: '', _description: '', _rating: 0, _price: 0}

    //const url = 'https://win22-webapi.azurewebsites.net/api/products'

    const [product, setProduct] = useState<Product> (EMPTY_PRODUCT)
    const [productRequest, setProductRequest] = useState<ProductRequest>(PRODUCTREQUEST_DEFAULT)
    const [products, setProducts] = useState<Product[]> ([])
    const [featured, setFeatured] = useState<Product[]> ([])
    const [square, setSquare] = useState<Product[]> ([])
    const [tripple, setTripple] = useState<Product[]> ([])

    const getProduct = async (articleNumber: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(baseUrl + `/product/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }
    
    const getFeatured = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch (url)
        setFeatured(await res.json())
    }

    const getSquare = async (take: number = 0) => {
        let url = `${baseUrl}/square`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch (url)
        setSquare(await res.json())
    }

    const getTripple = async (take: number = 0) => {
        let url = `${baseUrl}/tripple`

        if (take !== 0)
            url += `/${take}`

        const res = await fetch (url)
        setTripple(await res.json())
    }

    const create = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)
            
        })

        if (result.status === 201)
            setProductRequest(PRODUCTREQUEST_DEFAULT)
    }

    return <ProductContext.Provider value={{product, products, featured, square, tripple, productRequest, setProduct, setProductRequest, getProducts, getFeatured, getProduct, getSquare, getTripple, create}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider