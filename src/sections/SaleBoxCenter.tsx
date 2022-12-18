import BackgroundImage from '../assets/images/7-1.png';

const SaleBoxCenter = () => {
  return (
    <section className="sale-box-center">
        <div className="container">
            <img src={BackgroundImage} alt="Special Sale"/>
            <h1>Up to 70% off*</h1>
            <p>Women's, Men's & Kids' Winter Fashion</p>
            <button className="button-white"><span>FLASH SALE</span></button>
        </div>
    </section>
  )
}

export default SaleBoxCenter