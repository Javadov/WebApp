import { createContext, useContext, useState } from "react";
import { Product, ProductRequest } from "../models/ProductModel";
import { ProductProviderProps } from '../models/ProductProviderProps'

interface IProductProvider {
    children: any
}

export interface IProductContext {
    product: Product
    products: Product[]
    featured: Product[]
    square: Product[]
    tripple: Product[]
    refetch: boolean
    getProduct: (articleNumber: string) => void
    getProducts: () => void
    getFeatured: (take?: number) => void
    getSquare: (take?: number) => void
    getTripple: (take?: number) => void
}

export const ProductContext = createContext<IProductContext | null>(null)
export const useProductContext = () =>{return useContext(ProductContext)}

export const ProductProvider = ({children} : ProductProviderProps) => {
    const baseUrl:string = 'http://localhost:9000/api/products'
    const EMPTY_PRODUCT: Product = { _tag: '', _id: '', _imageName: '', _name: '', _category: '', _description: '', _rating: 0, _price: 0, _quantity: 0}

    //const url = 'https://win22-webapi.azurewebsites.net/api/products'

    const [refetch, setRefFetch] = useState(true)
    const [product, setProduct] = useState<Product> (EMPTY_PRODUCT)
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
        setRefFetch(!refetch)
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

    return <ProductContext.Provider value={{product, products, featured, square, tripple, refetch, getProducts, getFeatured, getProduct, getSquare, getTripple}}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider