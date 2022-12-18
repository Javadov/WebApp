import React from 'react'

const ProductColor = () => {
  return (
    <select name="color" id="color">
        <option value="Select" id="selected" disabled selected>Choose an Option</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Gray">Gray</option>
        <option value="Orange">Orange</option>
    </select>
  )
}

export default ProductColor