import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductCard from '../components/ProductCard'
import ProductsList from './ProductsList'
import {ProductContext, IProductContext, useProductContext } from '../contexts/ProductContext'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'

interface ICreate {
  _tag: string
  _category: string
  _name: string
  _imageName: string
  _rating: number
  _price: number
  _description: string
}


const AddProduct: React.FC = () => {

    const {products, getProducts} = useProductContext() as IProductContext 

    useEffect(() => {
        getProducts()
    })

    const DEFAULT_VALUE: ICreate = {_tag: '', _category: '',_name: '', _imageName: '', _rating: 0, _price: 0, _description: ''}

    const [CreateForm, setCreateForm] = useState<ICreate>(DEFAULT_VALUE)
    const [created, setCreated] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)

    const handleCreate = async (e: any) => {
      e.preventDefault()
      setCreated(false)
      setFailed(false)
  
      const product = {
          _tag: e.target[1].value,
          _category: e.target[2].value,
          _name: e.target[3].value,
          _imageName: e.target[4].value,
          _rating: e.target[5].value,
          _price: e.target[6].value,
          _description: e.target[7].value
      }

      console.log(product)

      const result = await fetch('http://localhost:9000/api/products', {
          method: 'post',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
      })
  
      const data = await result.json()
      console.log(data.accessToken)      
      localStorage.setItem(`accessToken`, data.accessToken)
      

      if (result.status === 200) {
          console.log(result.status)
          setCreated(true)
          setCreateForm(DEFAULT_VALUE)
      } else {
          setCreated(false)
          setFailed(true)
      }
    }


    return (
        <>
            <Navbar />
            <Breadcrumb currentPage="Manage Products" />

                <div className="__admin"> 
                    <div className="container">
                        <div className="__manageproducts">
                            <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">MANAGE PRODUCTS</a>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Add Product
                            </button>
                        </div>
                        <div className="__productslist collapse" id="collapseExample">
                            {
                                products.map( product => <ProductsList key={product._id} product={product} />)
                            }
                        </div>
                        
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <form className="modal-dialog" onSubmit={handleCreate}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add a new Product</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="d-grid mb-2">
                                            <label htmlFor="signin_mobile_email">Tag <span className="required">*</span></label>
                                            <input id="signin_mobile_email"  type="text" placeholder="" required />
                                        </div>
                                        <div className="d-grid mb-2">
                                            <label htmlFor="signin_mobile_password">Category <span className="required">*</span></label>
                                            <input id="signin_mobile_password"  type="text" placeholder="" required />
                                        </div>
                                        <div className="d-grid mb-2">
                                            <label htmlFor="signin_mobile_email">Product name  <span className="required">*</span></label>
                                            <input id="signin_mobile_email"  type="text" placeholder="" required />
                                        </div>
                                        <div className="d-grid mb-2">
                                            <label htmlFor="signin_mobile_password">Product image link <span className="required">*</span></label>
                                            <input id="signin_mobile_password"  type="text" placeholder="" required />
                                        </div>
                                        <div className="d-grid mb-2">
                                            <label htmlFor="signin_mobile_email">Rating <span className="required">*</span></label>
                                            <input id="signin_mobile_email"  type="text" placeholder="" required />
                                        </div>
                                        <div className="d-grid mb-2">
                                            <label htmlFor="signin_mobile_password">Price <span className="required">*</span></label>
                                            <input id="signin_mobile_password"  type="text" placeholder="" required />
                                        </div>
                                        <div className="d-grid mb-2">
                                            <label htmlFor="signin_mobile_email">Decription <span className="required">*</span></label>
                                            <textarea id="signin_mobile_email"  placeholder=""/>
                                        </div>
                                    </div>
                                      {   
                                          created ?  (<div className="modal-body alert alert-success text-center">Product is added successfully!</div>) : (<></>)
                                      }
                                      {   
                                          failed ?   (<div className="modal-body alert alert-danger text-center">Creating product is failed!</div>) : (<></>)
                                      }
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="submit" className="btn btn-primary">Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>  
                </div>
            <Footer />
        </>
    ) 
}

export default AddProduct