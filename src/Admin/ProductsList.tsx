import HalfRating from '../components/Rating';
import React, { FormEvent, useEffect, useState } from 'react'
import { Product } from '../models/ProductModel'
import { useParams } from 'react-router-dom';
import ProductDelete from './ProductDelete';
import ProductUpdate from './ProductUpdate';
import { findByDisplayValue } from '@testing-library/react';
import { IProductContext, useProductContext } from '../contexts/ProductContext';

interface IProductsList {
    product: Product
}

const ProductsList: React.FC<IProductsList> = ({product}) => {

    const {products, getProducts} = useProductContext() as IProductContext 

    useEffect(() => {
        getProducts()
    }, [])

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
   
    //const handleButtonClick = () => {
    //    return console.log(product._id);
    //};

    //const ModalID = handleButtonClick();

    //console.log(ModalID)

 
    const handleChange = async (e: any) => {
        e.preventDefault()    
        setDeleted(false)
        setFailed(false)

        const updatedProduct = {
            _id: product._id,
            _tag: e.target[2].value,
            _category: e.target[4].value,
            _name: e.target[6].value,
            _imageName: e.target[8].value,
            _rating: e.target[10].value,
            _price: e.target[12].value,
            _description: e.target[14].value
        }

        console.log(updatedProduct)
    }

    //const handleButtonClick = (_id: string) => {
    //    const {articleNumber, product} = cartItem
    //
    //    setCartItems(items => {
    //        if (items.find(item => item.articleNumber === articleNumber) == null) {
    //            return [...items, { articleNumber, product, quantity: 1}]
    //        } else {
    //            return items.map(item => {
    //                if (item.articleNumber === articleNumber) {
    //                    return { ...item, quantity: item.quantity +1}
    //                } else {
    //                    return item
    //                }
    //             })
    //        }
    //    })
    //}


    return (
        <div className="__productslist">
            <div className="container">
                <div className="__products" role="group" aria-label="Button group with nested dropdown">
                    <span className="__smallbox"><p>{product._id}</p>ID</span>
                    <span className="__mediumbox">{product._tag}</span>
                    <span className="__mediumbox">{product._category}</span>
                    <span className="__largebox">{product._name}</span>
                    <span className="__largebox"><img src={product._imageName} className="product-image" alt={product._name} />Show Product Image</span>
                    <span className="__smallbox">{product._rating}</span>
                    <span className="__smallbox">{product._price}</span>
                    <span className="__mediumbox">{product._description}</span>

                    <div className="btn-group dropend" role="group">
                        <button type="button" className="btn btn-primary dropdown-toggle _extrabutton" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-gear"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target={"#updateProduct" + product._id}>EDIT PRODUCT</a></li>
                            <li><a className="dropdown-item" data-bs-toggle="modal" data-bs-target={"#deleteProduct" + product._id}>DELETE PRODUCT</a></li>
                        </ul>

                        <div className="modal fade" id={"updateProduct" + product._id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="updateProducttLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <ProductUpdate key={product._id} product={product}/>
                            </div>
                        </div>

                        <div className="modal fade" id={"deleteProduct" + product._id} tabIndex={-1} aria-labelledby="deleteProductLabel" aria-hidden="true">
                            <div className="modal-dialog"> 
                                <ProductDelete key={product._id} product={product}/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsList