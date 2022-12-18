import React from 'react'
import ProductCard from '../components/ProductCard';
import { Product } from '../models/ProductModel';

interface IFeaturedProducts {
    products: Product[]
}

const FeaturedProducts: React.FC<IFeaturedProducts> = ({products = []}) => {

    return (
        <section className="__featured-products">
            <div className="container">
                <h3>Featured Product</h3>
                <div className="products">                    
                    {
                        products.map( product => <ProductCard key={product._id} product={product} />)                        
                    }                    
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts