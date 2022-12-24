import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductsList from './ProductsList'
import { IProductContext, useProductContext } from '../contexts/ProductContext'
import Footer from '../sections/Footer'
import Navbar from '../sections/Navbar'
import NoWay from '../sections/NoWay'

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
    }, [])

    const DEFAULT_VALUE: ICreate = {_tag: '', _category: '',_name: '', _imageName: '', _rating: 0, _price: 0, _description: ''}

    const [CreateForm, setCreateForm] = useState<ICreate>(DEFAULT_VALUE)
    const [created, setCreated] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)
    const [token, setToken] = useState(null)

    useEffect(() => {
        setToken(localStorage.accessToken);
    }, []);

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
              'Content-Type': 'application/json',
              'authorization': `Bearer ${localStorage.getItem(`accessToken`)}`
          },
          body: JSON.stringify(product)
      })  
      
      const data = await result.json()
      localStorage.setItem(`accessToken`, data.accessToken)

      if (result.status === 201) {
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

            {
                token ?
                (
                    <>
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
                            <div className="__rubrik" >
                                <span className="__smallbox">ID</span>
                                <span className="__mediumbox">Tag</span>
                                <span className="__mediumbox">Category</span>
                                <span className="__largebox">Product Name</span>
                                <span className="__largebox">Product Image</span>
                                <span className="__smallbox">Rating</span>
                                <span className="__smallbox">Price</span>
                                <span className="__mediumbox">Description</span>
                            </div>

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
                                                <label htmlFor="product_tag">Tag <span className="required">*</span></label>
                                                <select id="product_tag" className="form-select" aria-label="Default select example">
                                                <option value="" >Select Tag</option>
                                                <option value="featured">featured</option>
                                                <option value="square">square</option>
                                                <option value="tripple">tripple</option>
                                                </select>
                                            </div>
                                            <div className="d-grid mb-2">
                                                <label htmlFor="product_category">Category <span className="required">*</span></label>
                                                <input id="product_category"  type="text" placeholder="" required />
                                            </div>
                                            <div className="d-grid mb-2">
                                                <label htmlFor="product_name">Product name  <span className="required">*</span></label>
                                                <input id="product_name"  type="text" placeholder="" required />
                                            </div>
                                            <div className="d-grid mb-2">
                                                <label htmlFor="product_image">Product image link <span className="required">*</span></label>
                                                <input id="product_image"  type="text" placeholder="" required />
                                            </div>
                                            <div className="d-grid mb-2">
                                                <label htmlFor="product_rating">Rating <span className="required">*</span></label>
                                                <input id="product_rating"  type="text" placeholder="" required />
                                            </div>
                                            <div className="d-grid mb-2">
                                                <label htmlFor="product_price">Price <span className="required">*</span></label>
                                                <input id="product_price"  type="text" placeholder="" required />
                                            </div>
                                            <div className="d-grid mb-2">
                                                <label htmlFor="product_decription">Decription</label>
                                                <textarea id="product_decription"  placeholder=""/>
                                            </div>
                                        </div>
                                        {   
                                            created ?  (<div className="modal-body alert alert-success text-center">Product is added successfully!</div>) : (<></>)
                                        }
                                        {   
                                            failed ?   (<div className="modal-body alert alert-danger text-center">Creating product is failed!</div>) : (<></>)
                                        }
                                        <div className="modal-footer">
                                            <button type="submit" className="btn btn-primary">Create</button>
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>  
                    </div>
                </>
                )                     
                : 
                (
                    <NoWay />
                )
            }
            <Footer />
        </>
    ) 
}

export default AddProduct