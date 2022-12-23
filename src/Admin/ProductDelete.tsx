import React, { useState } from 'react'
import { Product } from '../models/ProductModel'

interface IProductDelete {
    product: Product
}

const ProductDelete:  React.FC<IProductDelete> = ({product}) => {
    const [deleted, setDeleted] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)

    const handleDelete = async (_id: string) => {
        setDeleted(false)
        setFailed(false)
    
        const result = await fetch(`http://localhost:9000/api/products/product/${_id}`, {
            method: 'delete'
        })      
    
        if (result.status === 200) {
            setDeleted(true)
        } else {
            setDeleted(false)
            setFailed(true)
        }
    }

    return (                                

        <form className="modal-content" >   
            {   
                deleted ?
                (
                    <div>                                            
                        <div className="modal-body alert alert-success text-center">
                            <p>Product is deleted successfully!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                )
                :
                failed ?
                (
                    <div>                                            
                        <div className="modal-body alert alert-danger text-center">
                            <p>Deleting product is failed!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                )
                :                                        
                (   <div>
                        <div className="modal-body">
                            Are you sure delete this product?
                        </div>   
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary __delete" onClick={() => handleDelete(product._id)} data-bs-dismiss="modal">YES, Delete!</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                )
            }
        </form>
      
    )
}

export default ProductDelete