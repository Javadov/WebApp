import React from 'react'
import HalfRating from './Rating';
import { NavLink } from 'react-router-dom';
import { IShoppingCart, useShoppingCart } from '../contexts/ShoppingCardContext';
import { currencyFormater } from '../utilities/currencyFormat';
import { Product } from '../models/ProductModel';

interface IProductCard {
    product: Product
}

const ProductCard: React.FC<IProductCard> = ({product}) => {
    const { incrementQuantity } = useShoppingCart() as IShoppingCart


    const addToWishList = (e:any) => {
        console.log(`${product._id} added`)
    }

    const addToCompare = (e:any) => {
        console.log(`${product._id} added`)
    }

  return (
    <div className="__card">
        <div className="card-img">
            <img src={product._imageName} className="product-image" alt={product._name} />
            <ul className="card-menu" >
                <button onClick={addToWishList} className="__menulink" ><i className="fa-regular fa-heart"></i></button>
                <button onClick={addToCompare} className="__menulink" ><i className="fa-regular fa-code-compare"></i></button>
                <button onClick={() => incrementQuantity({articleNumber: product._id, product: product, quantity: 0})} className="__menulink" ><i className="fa-regular fa-bag-shopping add-to-cart"></i></button>
            </ul>
            <NavLink to={`../product/${product._id}`} className="button-quick-view"><span>QUICK VIEW</span></NavLink>
        </div>
        <div className="__card-body">
            <NavLink to={`${product._category.toLowerCase().replace(/ /gi, "-")}`} className="brandname">{product._category}</NavLink>
            <h4>{product._name}</h4>
            <HalfRating value={product._rating}/>
            <h5 className="product-price"><span> </span> {currencyFormater(product._price)}</h5>
        </div>
    </div>
  )
}


//{currencyFormater(product.oldprice) !== 0}


export default ProductCard