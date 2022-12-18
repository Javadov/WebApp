import Scarecrow from '../assets/images/Scarecrow.png'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className='__notfound container'>
        <section className="section--image">
            <img src={Scarecrow} alt="" />
        </section>
        <section className="section--content">
            <h1>404 not found</h1>
            <h5>I have bad news for you</h5>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
            <Button buttoncolor="button-blck" link="/" text="Back to Homepage" />
        </section>
    </div>
    
  )
}

export default NotFound