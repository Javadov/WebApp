import React from 'react'
import ProductCard from '../components/ProductCard';
import { Product } from '../models/ProductModel';

interface IAllProducts {
    products: Product[]
}

const AllProducts: React.FC<IAllProducts> = ({products = []}) => {

    return (
        <section className="__featured-products">
            <div className="container">
                <div className="products">                    
                    {
                        products.map( product => <ProductCard key={product._id} product={product} />)                        
                    }                    
                </div>
            </div>
        </section>
    )
}

export default AllProducts