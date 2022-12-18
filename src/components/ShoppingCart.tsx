import React, { useEffect, useState } from 'react'
import { IShoppingCart, useShoppingCart } from '../contexts/ShoppingCardContext'
import ShoppingCartItem from '../components/ShoppingCartItem'
import { NavLink } from 'react-router-dom'
import { currencyFormater } from '../utilities/currencyFormat'

const ShoppingCart: React.FC = () => {
    const {cartItems , cartQuantity} = useShoppingCart() as IShoppingCart

    const [itemAdded, setItemAdded] = useState(false)

    useEffect(() => {
        if (cartQuantity > 0) {
            setItemAdded(true)
        } else {
            setItemAdded(false)
        }
    }, [cartQuantity]);

    let total = 0;  

    for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].product._price;
      }


    return (
        <div className="__shoppingcart offcanvas offcanvas-end" tabIndex={-1} id="shoppingCart" aria-labelledby="shoppingCartLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="shoppingCartLabel"><i className="fa-regular fa-shopping-bag"></i> Shopping Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                {   
                    itemAdded ?  
                    (
                        <div> 
                            <div>
                            { 
                                cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))                
                            } 
                            </div>
                            <div className="checkout">
                                <NavLink to="/mybag" className="d-flex j-c a-i alert alert-success text-center"><div>CHECKOUT</div> <div>Total: {currencyFormater(total)}</div></NavLink>
                            </div>   
                        </div>

                    )                     
                    : 
                    (
                        <div>
                            <p className="alert alert-warning text-center">Your Cart is Empty.</p>
                        </div>
                    )
                }
            </div>
    
        </div>
    )
}

export default ShoppingCart