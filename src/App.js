import React from 'react';
// import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path={`/product/:id`} element={<ProductDetails />} />
          <Route path={`/cart`} element={<Cart />} />
        </Routes>
        <Sidebar />
      </Router>
    </>
  );
};

export default App;
