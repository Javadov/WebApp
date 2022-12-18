import LeftImage from '../assets/images/3-1.png';
import RightImage from '../assets/images/3-2.png';

const ImageBar = () => {
  return (
    <section className="img-bar">
        <div className="container">
            <div className="top-picks">
                <img src={LeftImage} alt="Up to 70% Off!" />
                <div className="textonimg">
                    <h1>Pamela Reif's Top Picks</h1>
                    <button className="button-blck"><span>SHOP NOW</span></button>
                </div>
            </div>
            <div className="flash-sale">
                <img src={RightImage} alt="New Arrivals" />
                <div className="textonimg">
                    <h1>Let's Be Conscious</h1>
                    <button className="button-white"><span>FLASH SALE</span></button>
                </div>
            </div>
        </div>
    </section>    
  )
}

export default ImageBar