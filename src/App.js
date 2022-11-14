import React from 'react';
// import router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path={`/product/:id`} element={<ProductDetails />} />
        </Routes>
      </Router>
      ;
    </div>
  );
};

export default App;
