import React from 'react'
import { IShoppingCart, useShoppingCart } from '../contexts/ShoppingCardContext'
import { CartItem } from '../models/ShoppingCartModel';

interface IQuantity {
    item: CartItem
}

const Quantity: React.FC<IQuantity> = ({item}) => {
    const {incrementQuantity, decrementQuantity} = useShoppingCart() as IShoppingCart

    return (        
        <div className="__quantity">
            <button onClick={() => decrementQuantity(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item)}>+</button>
        </div>
    )
}

export default Quantity