import './App.css';
import Header from './component/layout/Header/Header.js';
import Footer from './component/layout/Footer/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WebFont from 'webfontloader';
import Home from './component/Home/Home.js';
import ProductDetails from './component/Product/ProductDetails.js';
import Products from './component/Product/Products.js';
import Search from './component/Product/Search.js';
import LoginSignUp from './component/User/LoginSignUp';
import Profile from './component/User/Profile.js';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './component/layout/Header/UserOptions.js';
import { useSelector } from 'react-redux';
import ProtectedRoute from './component/Route/ProtectedRoute';
import UpdateProfile from './component/User/UpdateProfile.js';
import UpdatePassword from './component/User/UpdatePassword.js';
import ForgotPassword from './component/User/ForgotPassword.js';
import ResetPassword from './component/User/ResetPassword.js';
import Cart from './component/Cart/Cart.js';
import Shipping from './component/Cart/Shipping.js';
import ConfirmOrder from './component/Cart/ConfirmOrder.js';
import Payment from './component/Cart/Payment.js';
import MyOrder from './component/Order/MyOrder.js';
import OrderDetails from './component/Order/OrderDetails.js';
import OrderSuccess from './component/Cart/OrderSuccess.js';
import Dashboard from './component/Admin/Dashboard.js';
import ProductList from './component/Admin/ProductList.js';
import NewProduct from './component/Admin/NewProduct.js';
import UpdateProduct from './component/Admin/UpdateProduct.js';
import OrderList from './component/Admin/OrderList.js';
import UsersList from './component/Admin/UsersList.js';
import UpdateUser from './component/Admin/UpdateUser.js';
import ProcessOrder from './component/Admin/ProcessOrder.js';
import ProductReviews from './component/Admin/ProductReviews.js';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Contact from './component/layout/Contact/Contact.js';
import About from './component/layout/About/About';
import NotFound from './component/layout/Not Found/NotFound';

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState('');

  async function getStripeApiKey() {
    const { data } = await axios.get('/api/v1/stripeapikey');

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Droid Sans', 'Chilanka'],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener('contextmenu', (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route exact path='/process/payment' element={<Payment />} />
          </Routes>
        </Elements>
      )}

      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/product/:id' element={<ProductDetails />} exact />
        <Route path='/products' element={<Products />} exact />
        <Route path='/products/:keyword' element={<Products />} />
        <Route path='/search' element={<Search />} exact />
        <Route path='/login' element={<LoginSignUp />} exact />
        <Route path='/cart' element={<Cart />} exact />
        <Route path='/password/forgot' element={<ForgotPassword />} exact />
        <Route path='/contact' element={<Contact />} exact />
        <Route path='/about' element={<About />} exact />
        <Route
          element={
            window.location.pathname === '/process/payment' ? null : NotFound
          }
        />
        <Route
          path='/password/reset/:token'
          element={<ResetPassword />}
          exact
        />
        <Route exact path='/' element={<ProtectedRoute />}>
          <Route exact path='/account' element={<Profile />} />
          <Route exact path='/me/update' element={<UpdateProfile />} />
          <Route exact path='/password/update' element={<UpdatePassword />} />
          <Route exact path='/shipping' element={<Shipping />} />

          <Route exact path='/success' element={<OrderSuccess />} />
          <Route exact path='/orders' element={<MyOrder />} />
          <Route exact path='/order/:id' element={<OrderDetails />} />
          <Route exact path='/order/confirm' element={<ConfirmOrder />} />
          <Route
            isAdmin={true}
            exact
            path='/admin/dashboard'
            element={<Dashboard />}
          />

          <Route
            isAdmin={true}
            exact
            path='/admin/products'
            element={<ProductList />}
          />

          <Route
            isAdmin={true}
            exact
            path='/admin/product'
            element={<NewProduct />}
          />
          <Route
            isAdmin={true}
            exact
            path='/admin/product/:id'
            element={<UpdateProduct />}
          />
          <Route
            isAdmin={true}
            exact
            path='/admin/orders'
            element={<OrderList />}
          />

          <Route
            isAdmin={true}
            exact
            path='/admin/order/:id'
            element={<ProcessOrder />}
          />

          <Route
            isAdmin={true}
            exact
            path='/admin/users'
            element={<UsersList />}
          />
          <Route
            isAdmin={true}
            exact
            path='/admin/user/:id'
            element={<UpdateUser />}
          />

          <Route
            isAdmin={true}
            exact
            path='/admin/reviews'
            element={<ProductReviews />}
          />
        </Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
