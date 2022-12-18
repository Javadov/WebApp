import React from 'react'
import { NavLink } from 'react-router-dom'

const Checkout = ({item}) => {
  return (
    <NavLink to="/mybag" >CHECKOUT {item.product.price + item.product.price}</NavLink>
  )
}

export default Checkout