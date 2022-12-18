import Navbar from '../sections/Navbar'
import NotFound from '../sections/NotFound'
import Footer from '../sections/Footer'

const NotFoundView = () => {
  return (
    <>
    <Navbar />
    <NotFound />
    <div style={{width: "100%", position: "fixed", bottom: "0"}}>
      <Footer />
    </div>
    </>
  )
}

export default NotFoundView