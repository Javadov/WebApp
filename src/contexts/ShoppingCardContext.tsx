import React, { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import { CartItem } from "../models/ShoppingCartModel";


export interface IShoppingCartProvider {
    children: any
}

export interface IShoppingCart {
    cartItems: CartItem[]
    cartQuantity: number
    incrementQuantity: (cartItem: CartItem) => void
    decrementQuantity: (cartItem: CartItem) => void
    removeItem: (artickeNumber: string) => void
}

export const ShoppingCartContext = createContext<IShoppingCart | null>(null)
export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider: React.FC<IShoppingCartProvider> = ({children}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const getItemQuantity = (articleNumber: string) => {
    return cartItems.find(item => item.articleNumber === articleNumber)?.quantity || 0
    }

    const incrementQuantity = (cartItem: CartItem) => {
        const {articleNumber, product} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1}]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity +1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decrementQuantity = (cartItem: CartItem) => {
        const {articleNumber} = cartItem

        setCartItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity -1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (articleNumber: string) => {
        setCartItems(items => {
            return items.filter(item => item.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartItems, cartQuantity, incrementQuantity, decrementQuantity, removeItem}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}