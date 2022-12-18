import React from 'react'
import ProductCard from '../components/ProductCard';
import { Product } from '../models/ProductModel';

interface IRelatedProducts {
    products: Product[]
}

const RelatedProducts: React.FC<IRelatedProducts> = ({products = []}) => {
    
    return (
        <section className="__related-products">
            <div className="container">
                <h3>Related Products</h3>
                <div className="products">                    
                    {
                        products.map(product => <ProductCard key={product._id} product={product} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts