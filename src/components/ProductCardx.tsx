import React from 'react'
import HalfRating from './Rating';
import { NavLink } from 'react-router-dom';
import { IShoppingCart, useShoppingCart } from '../contexts/ShoppingCardContext';
import { currencyFormater } from '../utilities/currencyFormat';
import { Product } from '../models/ProductModel';

interface IProductCardx {
    product: Product
}

const ProductCardx: React.FC<IProductCardx> = ({product}) => {
    const { incrementQuantity } = useShoppingCart() as IShoppingCart


    const addToWishList = (e:any) => {
        console.log(`${product._id} added`)
    }

    const addToCompare = (e:any) => {
        console.log(`${product._id} added`)
    }

  return (
    <div className="__cardx">
        <div className="cardx-img">
            <NavLink to={`../product/${product._id}`}><img src={product._imageName} className="product-image" alt={product._name} /></NavLink>
        </div>
        <div className="__cardx-body">
        <NavLink to={`${product._category.toLowerCase().replace(/ /gi, "-")}`} className="brandname">{product._category}</NavLink>
            <h4>{product._name}</h4>
            <HalfRating value={product._rating}/>
            <h5 className="product-price">{currencyFormater(product._price)} <span> </span></h5>
        </div>
    </div>
  )
}

//{currencyFormater(product.oldprice) !== 0}

export default ProductCardx