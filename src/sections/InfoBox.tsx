import CustomerService from '../assets/images/customer-service.svg';
import CreditCard from '../assets/images/credit-card.svg';
import DeliveryTruck from '../assets/images/delivery-truck.svg';

const InfoBox = () => {
  return (
    <section className="info-box">
        <div className="container">
            <div className="box">
                <div className="circle"><img src={CustomerService} alt="" /></div>
                <div>
                    <h1>Customer Support</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className="box">
                <div className="circle"><img src={CreditCard} alt="" /></div>
                <div>
                    <h1>Secured Payment</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className="box">
                <div className="circle"><img src={DeliveryTruck} alt="" /></div>
                <div>
                    <h1>Free Home Delivery</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
            <div className="box">
                <div className="circle"><img src={DeliveryTruck} alt="" /></div>
                <div>
                    <h1>30 Day Reuters</h1>
                    <p>Village did removed enjoyed explain talking.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default InfoBox