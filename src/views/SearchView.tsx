import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

const SearchView = () => {
  return (
    <>
        <Navbar />

        <div style={{width: "100%", position: "fixed", bottom: "0"}}>
        <Footer />
        </div>
    </>
  )
}

export default SearchView