import React from 'react'
import ProductCard from '../components/ProductCard';
import BackgroundImage from '../assets/images/5-1.png';
import { Product } from '../models/ProductModel';

interface ISaleBoxLeft {
  products: Product[]
}

const SaleBoxLeft: React.FC<ISaleBoxLeft> = ({products = []}) => {

  return (
    <section className="sale-box-left">
        <div className="container">
            <div className="big-box-left" >
                <img src={BackgroundImage} alt="Special Sale"/>
                <h1>2 FOR USD $29</h1>
                <button className="button-white"><span>FLASH SALE</span></button>
            </div>
            <div className="products">                    
                    {
                        products.map(product => <ProductCard key={product._id} product={product} />)                        
                    }                    
            </div>
        </div>
    </section>
  )
}

export default SaleBoxLeft