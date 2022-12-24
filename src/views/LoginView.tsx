import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'
import Login from '../sections/Login'
import Breadcrumb from '../components/Breadcrumb'


const CompareView = () => {
  return (
    <>
        <Navbar />
        <Breadcrumb currentPage="Userpage" />
        <Login />
        <div style={{width: "100%", position: "relative", bottom: "0"}}>
        <Footer />
        </div>
    </>
  )
}

export default CompareView