import React, { useEffect } from 'react'
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer';
import { IProductContext, useProductContext } from '../contexts/ProductContext';
import AllProducts from '../sections/AllProducts';
import Breadcrumb from '../components/Breadcrumb';


const ProductsView: React.FC = () => {

    const {products, getProducts} = useProductContext() as IProductContext 

    useEffect(() => {
        getProducts()
    })

    return (
        <>
            <Navbar />
            <Breadcrumb currentPage="All Products" />
            <AllProducts products={products} />
            <Footer />
        </>
    )
}

export default ProductsView