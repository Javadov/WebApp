import React, { useEffect, useState }  from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { IShoppingCart, useShoppingCart } from '../contexts/ShoppingCardContext'
import Breadcrumb from '../components/Breadcrumb';
import HalfRating from '../components/Rating';
import SizeSelection from '../components/ProductDetails/SizeSelection';
import ProductColor from '../components/ProductDetails/ProductColor';
import ProductQuantity from '../components/ProductDetails/ProductQuantity';
import ExtraDetails from '../components/ProductDetails/ExtraDetails';
import RelatedProducts from './RelatedProducts';
import { Product } from '../models/ProductModel';
import { IProductContext, useProductContext } from '../contexts/ProductContext';



const ProductDetails: React.FC<Product> = () => {

    const {refetch, products, getProducts} = useProductContext() as IProductContext 

    useEffect(() => {
        getProducts()
    }, [refetch])

    const EMPTY_PRODUCT: Product = { _tag: '', _id: '', _imageName: '', _name: '', _category: '', _description: '', _rating: 0, _price: 0, _quantity: 0}

    const {id} = useParams()
    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT)

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:9000/api/products/product/${id}`)
            setProduct(await result.json())
        }
        fetchData()
    }, [refetch])    

    const { cartItems } = useShoppingCart() as IShoppingCart

    return (
        <div className="__productsignal">
            <div className="container">
                <NavLink to="/">Get 25% OFF at the Fixxo Selection - Shop Now!</NavLink>
                <Breadcrumb currentPage="Product Signal" />

                <div className="__productdetailsbox">
                    <div className="__productimages">
                        <div className="container">
                            <ul className="slides">
                                <li id="slide1"><img src={product._imageName} className="product-image" alt={product._name} /></li>
                                <li id="slide2"><img src={product._imageName} className="product-image" alt={product._name} /></li>
                                <li id="slide3"><img src={product._imageName} className="product-image" alt={product._name} /></li>
                            </ul>
                        
                            <ul className="thumbnails">
                                <li>
                                    <a href="#slide1" ><img src={product._imageName} className="product-image" alt={product._name} /></a>
                                </li>
                                <li>
                                    <a href="#slide2" ><img src={product._imageName} className="product-image" alt={product._name} /></a>
                                </li>
                                <li>
                                    <a href="#slide3" ><img src={product._imageName} className="product-image" alt={product._name} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="__productdetails">
                        <h1>{product._name}</h1>
                        <div className="__productartnr">
                            <p>SKU: 12345670</p> <p>Category: {product._category}</p>
                        </div>

                        <HalfRating />                        

                        <h2>$ {product._price}</h2>
                        <p>Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. <a href="#">(read more)</a></p>
                        <div className="__productsize">
                            <h1>Size:</h1>
                            <SizeSelection />   
                        </div>
                        <div className="__productcolor">
                            <h1>Color:</h1>
                            <ProductColor />
                        </div>
                        <div className="__productquantity">
                            <span>
                                <h1>Qty:</h1>
                                <ProductQuantity /> 
                            </span>
                            <button type='submit' className='button-add-to-cart' ><span>ADD TO CART</span></button>
                        </div>
                        <div className="__productshare">
                            <h1>Share:</h1>
                            <div className="__shareline">
                                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-google"></i></a></li>
                                <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                            </div>
                        </div>
                    </div>
                </div>

                <ExtraDetails />
                <RelatedProducts products={products} /> 
            </div>
        </div>
    )
}

export default ProductDetails