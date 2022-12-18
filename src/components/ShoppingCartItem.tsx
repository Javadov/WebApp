import React from 'react'
import { IShoppingCart, useShoppingCart } from '../contexts/ShoppingCardContext'
import { CartItem } from '../models/ShoppingCartModel'
import { currencyFormater } from '../utilities/currencyFormat'

interface IShoppingCartItem {
    item: CartItem
}

const ShoppingCartItem: React.FC<IShoppingCartItem> = ({item}) => {
  const {incrementQuantity, decrementQuantity, removeItem} = useShoppingCart() as IShoppingCart

  return (
    <div className="__shoppingcartitem">
        <div className="__image">
            <img src={item.product._imageName} />
        </div>
        <div className="__info">
            <div className="__name">{item.product._name}</div>
            <div className="__quantity">
                <button onClick={() => decrementQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item)}>+</button>
            </div>
        </div>
        <div className="__price">
            <div>{currencyFormater(item.product._price * item.quantity)}</div>            
        </div>
        <button onClick={() => removeItem(item.articleNumber)}><i className="fa-regular fa-xmark"></i></button>  
    </div>    
  )
}

export default ShoppingCartItem