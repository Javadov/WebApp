import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Login from '../sections/Login'


const CompareView = () => {
  return (
    <>
        <Navbar />
        <Login />
        <div style={{width: "100%", position: "relative", bottom: "0"}}>
        <Footer />
        </div>
    </>
  )
}

export default CompareView