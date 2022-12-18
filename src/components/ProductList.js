import React, { useEffect } from 'react'
import { IUserContext, UserContext } from '../contexts/UserContext'
import { Product } from '../models/UserModel'

const ProductList = () => {
    const { products, getAll, remove } = React.useContext(UserContext) as IUserContext

    useEffect(() => {
        getAll()
    
    }, [getAll])

    const removeProduct = (id:number) => {
        remove(id)
    }

    return (
    <>
        <h3>Featured Product</h3>
        <div className="products">                    
            {
                products.map((product: Product) => <ProductCard key={product.articleNumber} product={product} />)                        
            }                    
        </div>
    </>
    )
}

export default ProductList