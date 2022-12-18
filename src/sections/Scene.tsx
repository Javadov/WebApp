import React from 'react'
import LeftImage from '../assets/images/1-1.png';
import RightImage from '../assets/images/1-2.png';


const HeaderBody: React.FC = () => {
  return (
    <div className="__scene">
        <div className="container">
            <div className="h-b-l">
                <img src={LeftImage} alt="" />
            </div>
            <div className="h-b-c">
                    <h1>Sale Up</h1>
                    <h2>To 50% Off</h2>
                    <p>Online shopping free home delivery over $100</p>
                    <button className="button-red"><span>SHOP NOW</span></button>
            </div>
            <div className="h-b-r">
                <img src={RightImage} alt="" />
            </div>
         </div>    
    </div>
  )
}

export default HeaderBody