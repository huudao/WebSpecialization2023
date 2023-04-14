import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './asset/css/root.css'
import HomePage from "./pages/homePage";
import CartPage from "./pages/cartPages";
import ProductPage from "./pages/productPage";
import DetailPage from "./pages/detailPage";
import LoginPage from "./pages/loginPage";
import RegistryPage from "./pages/registryPage";
import OrderLookupPage from "./pages/orderLookupPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
            <Routes>
                <Route  index  element={<HomePage/>}  />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/product" element={<ProductPage/>} />
                <Route path="/detail" element={<DetailPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/registry" element={<RegistryPage/>} />
                <Route path="/order" element={<OrderLookupPage/>}/>

            </Routes>
        </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
