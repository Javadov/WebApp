import React, { useEffect } from 'react'
import { IProductContext, ProductContext } from '../contexts/ProductContext'
import { Product } from '../models/ProductModel'

const Products = () => {
    const { products, getProducts} = React.useContext(ProductContext) as IProductContext

    useEffect(() => {
        getProducts()
    
    }, [getProducts])


    return (
    <>
        <h3 className="display-6 mb-4">List of Users</h3>
        {
            products.map((product: Product) => (<div key={product._id} className="mb-3">{product._name} {product._price} </div>))
        }
    </>
    )
}

export default Products