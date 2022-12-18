import React from 'react'
import { NavLink } from 'react-router-dom';

const Button: React.FC<any> = ({buttoncolor, link, text}) => {
  return (
    <NavLink className={buttoncolor} to={link} type="button"><span>{text}</span> </NavLink>
  )
}

export default Button