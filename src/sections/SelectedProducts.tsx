import React from 'react'
import ProductCardx from '../components/ProductCardx';
import { Product } from '../models/ProductModel';

interface ISelectedProducts {
    products: Product[]
}

const SelectedProducts: React.FC<ISelectedProducts> = ({products = []}) => {

    return (
        <section className="__selectedproducts">
            <div className="container">
                <div className="latest-product">
                    <h3>Latest Product</h3>
                    {
                        products.map(product => <ProductCardx key={product._id} product={product} />)                        
                    }  
                </div>

                <div className="best-selling-product">
                    <h3>Best Selling Product</h3>
                    {
                        products.map(product => <ProductCardx key={product._id} product={product} />)                        
                    }  
                </div>

                <div className="top-reacted-product">
                    <h3>Top Reacted Product</h3>
                    {
                        products.map(product => <ProductCardx key={product._id} product={product} />)                        
                    }  
                </div>
            </div>
        </section>
    )
}

export default SelectedProducts