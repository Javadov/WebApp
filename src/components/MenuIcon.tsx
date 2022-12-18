import React from 'react'
import { NavLink } from 'react-router-dom'



const MenuIcon: React.FC<any> = ({ link, icon, wished, quantity}) => {
  return (
    <NavLink className="circle" to={link}>
        <i className={icon}></i>
        <span className="notification translate-middle badge rounded-pill">{wished}</span>
        <span className="notification translate-middle badge rounded-pill cart-quantity">{quantity}</span>
    </NavLink>
  )
}

export default MenuIcon