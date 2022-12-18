import React, { useEffect } from 'react'
import Navbar from '../sections/Navbar'
import Scene from '../sections/Scene';
import Showcase from '../sections/Showcase';
import FeaturedProducts from '../sections/FeaturedProducts';
import Footer from '../sections/Footer';
import ImageBar from '../sections/ImageBar';
import Speciality from '../sections/Speciality';
import SaleBoxLeft from '../sections/SaleBoxLeft';
import SaleBoxRight from '../sections/SaleBoxRight';
import SaleBoxCenter from '../sections/SaleBoxCenter';
import SelectedProducts from '../sections/SelectedProducts';
import InfoBox from '../sections/InfoBox';
import { IProductContext, useProductContext } from '../contexts/ProductContext';



const HomeView: React.FC = () => {

  const {featured, square, tripple, getFeatured, getSquare, getTripple} = useProductContext() as IProductContext 

  useEffect(() => {
    getFeatured(8)
  })

  useEffect(() => {
    getSquare(4)
  })

  useEffect(() => {
    getTripple(3)
  })

  return (
    <>
        <div style={{backgroundColor: "#E6E6E6"}}>
        <Navbar />
        </div>
        <Scene />
        <Showcase />
        <FeaturedProducts products={featured} />
        <ImageBar />
        <Speciality />
        <SaleBoxLeft products={square}/>
        <SaleBoxRight products={square}/>
        <SaleBoxCenter />
        <SelectedProducts products={tripple}/>
        <InfoBox />
        <Footer />
    </>
  )
}

export default HomeView