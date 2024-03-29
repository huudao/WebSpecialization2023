import React, {createContext, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './asset/css/root.css';
import HomePage from "./pages/homePage";
import CartPage from "./pages/cartPages";
import ProductPage from "./pages/productPage";
import DetailPage from "./pages/detailPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import OrderLookupPage from "./pages/orderLookupPage";
import {ProductProvider} from "./context/productContext"
import ForgotPassPage from "./pages/forgotPassPage";
import ResetPassPage from "./pages/resetPassPage";
import AdminPageProduct  from "./pages/adminPageProduct"
import AdminPageUser from "./pages/adminPageUser";
import AdminPageOrder from "./pages/adminPageOrder";
import AdminPageBrand from "./pages/adminPageBrand";


function App() {
    return (

        <ProductProvider>
            <>
                <button
                    type="button"
                    class="btn btn-danger btn-floating btn-lg"
                    id="btn-back-to-top"
                >
                    <i class="fas fa-arrow-up"></i>
                </button>
            </>
            <Routes>

                <Route index element={<HomePage/>} exact/>
                <Route path="/cart" element={<CartPage/>} exact/>
                <Route path="/management/product" element={<AdminPageProduct/>} exact/>
                <Route path="/management/user" element={<AdminPageUser/>} exact/>
                <Route path="/management/order" element={<AdminPageOrder/>} exact/>
                <Route path="/management/brand" element={<AdminPageBrand/>} exact/>
                <Route path="/product" element={<ProductPage/>} exact/>
                <Route path="/product/:sex" element={<ProductPage/>} exact/>
                <Route path="/detail/:id/:varianId" element={<DetailPage/>} exact/>
                <Route path="/login" element={<LoginPage/>} exact/>
                <Route path="/register" element={<RegisterPage/>} exact/>
                <Route path="/order" element={<OrderLookupPage/>} exact/>
                <Route path="/forgot_pass" element={<ForgotPassPage/>} exact/>
                <Route path="/api/auth/reset-password" element={<ResetPassPage/>} exact/>

            </Routes>
        </ProductProvider>
    );
}

export default App;
