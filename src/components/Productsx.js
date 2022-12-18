import { useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([
        {id: 1, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145400_csalutenavy_v468_10.jpg", category: "Women", brandname: "MOS MOSH",  name: "Tan Alia Shirt", rating: "3", oldprice: "", price: "1499", },
        {id: 2, img: "https://ean-images.booztcdn.com/guess/400x523/guehwta7679210_cblack_vbla_10.jpg", category: "Women", brandname: "GUESS", name: "CESSILY CONVERTIBLE XBODY", rating: "1", oldprice: "1299 kr", price: "875", },
        {id: 3, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145220_cchipmunk_v709_10.jpg", category: "Women", brandname: "MOS MOSH", name: "Alyn Highneck Knit", rating: "4", oldprice: "", price: "1449", },
        {id: 4, img: "https://ean-images.booztcdn.com/guess/400x523/guehwvb8558210_clightrum_vlgr_10.jpg", category: "Women", brandname: "Guess", name: "ABEY CROSSBODY FLAP", rating: "5", oldprice: "", price: "1400", },
        {id: 5, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145370_cecru_v180_10.jpg", category: "Women", brandname: "MOS MOSH", name: "ABEY CROSSBODY FLAP", rating: "2", oldprice: "1299 kr", price: "875", },
        {id: 6, img: "https://ean-images.booztcdn.com/stylein/400x523/styyacht_ccognac_10.jpg", category: "Women", brandname: "Stylein", name: "YACHT BAG", rating: "5", oldprice: "", price: "1799", },
        {id: 7, img: "https://ean-images.booztcdn.com/mos-mosh/400x523/mmh145370_cfadedrose_v298_10.jpg", category: "Women", brandname: "MOS MOSH", name: "Talli LS Knit", rating: "4", oldprice: "1299 kr", price: "1169", },
        {id: 8, img: "https://ean-images.booztcdn.com/ted-baker-access/400x523/ake254143_c00black_v00_10.jpg", category: "Women", brandname: "Ted Baker", name: "NIKKEY", rating: "3", oldprice: "", price: "619", }
    ])
}

export default Products