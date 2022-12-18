import './App.css';
import { ShoppingCartProvider } from './contexts/ShoppingCardContext'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/HomeView';
import Categories from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetails from './views/ProductDetailsView';
import Contacts from './views/ContactsView';
import Search from './views/SearchView';
import Compare from './views/LoginView';
import Wishlist from './views/WishlistView';
import ShoppingBag from './views/ShoppingBagView';
import NotFound from './views/NotFoundView'
import UserProvider from './contexts/UserContext';
import ProductProvider from './contexts/ProductContext';
import Products from './Admin/Products';



const App: React.FC = () => {

  return (
    <BrowserRouter >
      <ShoppingCartProvider>    
        <UserProvider>
          <ProductProvider>    
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/categories' element={<Categories />} />
              <Route path='/products' element={<ProductsView />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/search' element={<Search />} />
              <Route path='/login' element={<Compare />} />
              <Route path='/wishlist' element={<Wishlist />} />
              <Route path='/mybag' element={<ShoppingBag />} />
              <Route path='/*' element={<NotFound />} />
              <Route path='/admin/products' element={<Products />} />
            </Routes>
          </ProductProvider>
        </UserProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App