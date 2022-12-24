import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { IShoppingCart, useShoppingCart } from '../contexts/ShoppingCardContext'

const Navbar: React.FC = () => {
const { cartQuantity } = useShoppingCart() as IShoppingCart

  return (
    <div className="__navbar">
        <div className="container">
            <div className="brand">
                <NavLink to="/">Fixxo.</NavLink> 
            </div>
            <div className="pages"> 
                <NavLink className="__pagelink" to="/" end>Home</NavLink>
                <NavLink className="__pagelink" to="/categories" end>Categories</NavLink>
                <NavLink className="__pagelink" to="/products" end>Products</NavLink>
                <NavLink className="__pagelink" to="/contacts" end>Contacts</NavLink>
            </div>
            <div className="iconbar">
                <MenuIcon link="/login" icon="fa-regular fa-user-bounty-hunter" end/>
                <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" end/>
                <MenuIcon link="/wishlist" icon="fa-regular fa-heart" wished="3" end/>
                <button className="circle" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                    <i className="fa-regular fa-shopping-bag"></i>
                    <span className="notification translate-middle badge rounded-pill">{cartQuantity}</span>
                </button>
            </div>
        </div>    
    </div>
  )
}

export default Navbar