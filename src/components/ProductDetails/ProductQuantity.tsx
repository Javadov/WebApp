import { useState } from 'react'

const ProductQuantity = () => {

    const [quantity, setQuantity] = useState(1)

    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(prevCount => prevCount - 1)
        }
    }

    const handleIncrement = () => {
        if(quantity < 10){
            setQuantity(prevCount => prevCount + 1)
        }
    }
    

  return (
    <div className="___quantity">
        <button onClick={handleDecrement} className='qtyminus minus'>-</button>
        <div className="__qty">{quantity}</div>
        <button onClick={handleIncrement} className='qtyminus plus'>+</button>
    </div>
  )
}

export default ProductQuantity