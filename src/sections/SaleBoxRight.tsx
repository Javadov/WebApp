import React from 'react'
import ProductCard from '../components/ProductCard';
import BackgroundImage from '../assets/images/6-1.png';
import { Product } from '../models/ProductModel';

interface ISaleBoxRight {
  products: Product[]
}

const SaleBoxRight: React.FC<ISaleBoxRight> = ({products = []}) => {

  return (
    <section className="sale-box-right">
        <div className="container">
        <div className="products">                    
                    {
                        products.map(product => <ProductCard key={product._id} product={product} />)                        
                    }                    
            </div>
            <div className="big-box-right">
                <img src={BackgroundImage} alt="Special Sale"/>
                <h1>2 FOR USD $49</h1>
                <button className="button-white"><span>FLASH SALE</span></button>
            </div>
        </div>
    </section>
  )
}

export default SaleBoxRight