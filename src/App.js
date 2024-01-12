import React from 'react';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Home from './pages/home/Home';
import NewProduct from './pages/newProduct/NewProduct';
import {
  BrowserRouter as Router, // Changed to BrowserRouter as Router
  Routes,
  Route,
} from "react-router-dom";
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/home/productList/ProductList';
import Product from './pages/product/Product';


function App() {
  return (
    <Router>
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Replaced Route syntax */}
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
