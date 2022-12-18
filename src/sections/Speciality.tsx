import LeftImage from '../assets/images/4-1.png';
import CenterImage from '../assets/images/4-2.png';
import RightImage from '../assets/images/4-3.png';

const Speciality = () => {
  return (
    <section className="speciality">
        <div className="container">
            <h3>Our Speciality</h3>
            <div className="order-settings">
                <div className="track speciality-card">
                    <div className="text">
                        <h1>Track Your Order</h1>
                        <a href="">Get Started &#62;</a>
                    </div>
                    <img src={LeftImage} alt="" />
                </div>
                <div className="return speciality-card">
                    <div className="text">
                        <h1>Make a Return</h1>
                        <a href="">Get Started &#62;</a>
                    </div>
                    <img src={CenterImage} alt="" />
                </div>
                <div className="request speciality-card">
                    <div className="text">
                        <h1>Request a Price Adjustment</h1>
                        <a href="">Get Started &#62;</a>
                    </div>
                    <img src={RightImage} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Speciality