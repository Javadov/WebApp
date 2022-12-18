import Navbar from '../sections/Navbar'
import ProductDetails from '../sections/ProductDetails'
import Footer from '../sections/Footer'

const ProductDetailsView: React.FC = () => {    
  return (
    <>
        <Navbar />
        <ProductDetails  _tag={''} _id={''} _imageName={undefined} _name={''} _category={''} _rating={0} _price={0} _quantity={0} />
        <Footer />
    </>
  )
}

export default ProductDetailsView