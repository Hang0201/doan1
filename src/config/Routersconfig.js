import React from 'react';
import Home from '../pages/Home'
import {Route, Routes} from "react-router-dom";
import LoginForm from '../components/login/LoginForm'
import Register from '../components/register/RegisterForm';
import User from '../components/user/User';
import Admin from '../components/admin/Admin';
import PayForm from '../components/pay/PayForm';
import ProductsPhone from '../pages/Products/ProductsPhone';
import ProductsLaptop from '../pages/Products/ProductsLaptop';
import ProductsOld from '../pages/Products/ProductsOld';
import ProductsAccessories from '../pages/Products/ProductsAccessories'
import Cart from '../components/cart/Cart';
import Products from '../components/products/Products';
import Account from '../components/user/userPage/Account';
import CustomerSupport from '../components/user/userPage/CustomerSupport';
import PurchaseHistory from '../components/user/userPage/PurchaseHistory';
import Offer from '../components/user/userPage/Offer';

function Routersconfig() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path='phone' element={<ProductsPhone/>}/>
            <Route path='laptop' element={<ProductsLaptop/>}/>
            <Route path='accessories' element={<ProductsAccessories/>}/>
            <Route path='old' element={<ProductsOld/>}/>
            <Route path='products' element={<Products/>}/>
            <Route path='login' element={<LoginForm/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='admin' element={<Admin/>}/>
            <Route path='user' element={<User/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='payment' element={<PayForm/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/support' element={<CustomerSupport/>}/>
            <Route path='/history' element={<PurchaseHistory/>}/>
            <Route path='/offer' element={<Offer/>}/>
        </Routes>
    );
}

export default Routersconfig;