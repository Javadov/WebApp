import React, { useEffect } from 'react'
import { Product } from '../models/ProductModel'

interface IProductsList {
    product: Product
}

const ProductsList: React.FC<IProductsList> = ({product}) => {

    return (
        <div className="__productslist">
            <div className="container">
                <div className="__products" role="group" aria-label="Button group with nested dropdown">
                    <span className="__smallbox"><p>{product._id}</p>ID</span>
                    <span className="__mediumbox">{product._tag}</span>
                    <span className="__mediumbox">{product._category}</span>
                    <span className="__largebox">{product._name}</span>
                    <span className="__largebox"><img src={product._imageName} className="product-image" alt={product._name} />Product Image</span>
                    <span className="__smallbox">{product._rating}</span>
                    <span className="__smallbox">{product._price}</span>
                    <span className="__mediumbox">{product._description}</span>

                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary dropdown-toggle _extrabutton" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-gear"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">EDIT PRODUCT</a></li>
                            <li><a className="dropdown-item" href="#">DELETE PRODUCT</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList