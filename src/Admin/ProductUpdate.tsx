import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import { Product } from '../models/ProductModel'


interface IProductUpdate {
    product: Product
}

const ProductUpdate:  React.FC<IProductUpdate>  = ({product}) => {
    const [updated, setUpdated] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)


    const handleUpdate = async (e: any) => {
        e.preventDefault()    
        setUpdated(false)
        setFailed(false)

        const updatedProduct = {
            _tag: e.target[2].value,
            _category: e.target[4].value,
            _name: e.target[6].value,
            _imageName: e.target[8].value,
            _rating: e.target[10].value,
            _price: e.target[12].value,
            _description: e.target[14].value
        }
        
        if (updatedProduct._tag === '') {updatedProduct._tag = product._tag; }
        if (updatedProduct._category === '') {updatedProduct._category = product._category; }
        if (updatedProduct._name === '') {updatedProduct._name = product._name; }
        if (updatedProduct._imageName === '') {updatedProduct._imageName = product._imageName; }
        if (updatedProduct._rating === '') {updatedProduct._rating = product._rating; }
        if (updatedProduct._price === '') {updatedProduct._price = product._price; }
        if (updatedProduct._description === '') {updatedProduct._description = product._description; }
        
        const result = await fetch(`http://localhost:9000/api/products/product/${product._id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem(`accessToken`)}`
            },
            body: JSON.stringify(updatedProduct)
        })  

        const data = await result.json()
        console.log(data.accessToken)
        localStorage.setItem(`accessToken`, data.accessToken)
  
        if (result.status === 201) {
            setUpdated(true)
        } else {
            setUpdated(false)
            setFailed(true)
        }

        
        console.log(updatedProduct)
        console.log(result)


    }   



    return (                                

        <form className="modal-content" onSubmit={handleUpdate}>   
            {   
                updated ?
                (
                    <div>                                            
                        <div className="modal-body alert alert-success text-center">
                            <p>Product is updated successfully!</p>
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
                            <p>Updating product is failed!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                )
                :                                        
                (   <div>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateProductLabel">Update selected Product<p>ID: {product._id}</p></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body __update" >

                            <div className="d-grid mb-2">
                                <label htmlFor="product_tag"><a className="btn btn-warning" data-bs-toggle="collapse" href="#updateTag" role="button" aria-expanded="false" aria-controls="updateTag">Update Tag</a><div className="btn-group dropend"><button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Actual Tag</button><ul className="dropdown-menu actual">{product._tag}</ul></div></label>
                                <div className="collapse" id="updateTag">
                                    <select id="product_tag" className="form-select" aria-label="Default select example" >
                                        <option value="" >Select Tag</option>
                                        <option value="featured">featured</option>
                                        <option value="square">square</option>
                                        <option value="tripple">tripple</option>
                                    </select>
                                </div>
                            </div>

                            <div className="d-grid mb-2">
                                <label htmlFor="product_category"><a className="btn btn-warning" data-bs-toggle="collapse" href="#updateCategory" role="button" aria-expanded="false" aria-controls="updateCategory">Update Category</a><div className="btn-group dropend"><button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Actual Category</button><ul className="dropdown-menu actual">{product._category}</ul></div></label>
                                <div className="collapse" id="updateCategory"><input id="product_category"  type="text" placeholder=""/></div>
                            </div>

                            <div className="d-grid mb-2">
                                <label htmlFor="product_name"><a className="btn btn-warning" data-bs-toggle="collapse" href="#updateName" role="button" aria-expanded="false" aria-controls="updateName">Update Name</a><div className="btn-group dropend"><button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Actual Name</button><ul className="dropdown-menu actual">{product._name}</ul></div></label>
                                <div className="collapse" id="updateName"><input id="product_name"  type="text" placeholder=""/></div>
                            </div>

                            <div className="d-grid mb-2">
                                <label htmlFor="product_image"><a className="btn btn-warning" data-bs-toggle="collapse" href="#updateImage" role="button" aria-expanded="false" aria-controls="updateImage">Update Image</a><div className="btn-group dropend"><button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Actual Image</button><ul className="dropdown-menu actual"><img src={product._imageName} className="product-image" alt={product._name} /></ul></div></label>
                                <div className="collapse" id="updateImage"><input id="product_image"  type="text" placeholder="" /></div>
                            </div>

                            <div className="d-grid mb-2">
                                <label htmlFor="product_rating"><a className="btn btn-warning" data-bs-toggle="collapse" href="#updateRating" role="button" aria-expanded="false" aria-controls="updateRating">Update Rating</a><div className="btn-group dropend"><button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Actual Rating</button><ul className="dropdown-menu actual">{product._rating}</ul></div></label>
                                <div className="collapse" id="updateRating"><input id="product_rating"  type="text" placeholder=""/></div>
                            </div>

                            <div className="d-grid mb-2">
                                <label htmlFor="product_price"><a className="btn btn-warning" data-bs-toggle="collapse" href="#updatePrice" role="button" aria-expanded="false" aria-controls="updatePrice">Update Price</a><div className="btn-group dropend"><button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Actual Price</button><ul className="dropdown-menu actual">{product._price}</ul></div></label>
                                <div className="collapse" id="updatePrice"><input id="product_price"  type="text" placeholder=""/></div>
                            </div>

                            <div className="d-grid mb-2">
                                <label htmlFor="product_decription"><a className="btn btn-warning" data-bs-toggle="collapse" href="#updateDescription" role="button" aria-expanded="false" aria-controls="updateDescription">Update Description</a><div className="btn-group dropend"><button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Actual Description</button><ul className="dropdown-menu actual">{product._description}</ul></div></label>
                                <div className="collapse" id="updateDescription"><textarea id="product_decription"  placeholder=""/></div>
                            </div>

                        </div>

                        <div className="modal-footer">
                            <button type="submit" className="btn btn-success">Update</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                )
            }
        </form>
      
    )
}

export default ProductUpdate