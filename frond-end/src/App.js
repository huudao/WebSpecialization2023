import React, {createContext, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './asset/css/root.css';
// import './asset/js/scroll';
import HomePage from "./pages/homePage";
import CartPage from "./pages/cartPages";
import ProductPage from "./pages/productPage";
import DetailPage from "./pages/detailPage";
import LoginPage from "./pages/loginPage";
import RegistryPage from "./pages/registryPage";
import OrderLookupPage from "./pages/orderLookupPage";
import {listData} from "./API/apiProduct";
import {ProductProvider} from "./context/productContext"

function App() {
    const getDataDetail = () => {
    }
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
                <Route path="/product" element={<ProductPage/>} exact/>
                <Route path="/detail/:id" element={<DetailPage/>} exact/>
                {/*<Route path="/detail" element={<DetailPage/>} exact/>*/}
                <Route path="/login" element={<LoginPage/>} exact/>
                <Route path="/registry" element={<RegistryPage/>} exact/>
                <Route path="/order" element={<OrderLookupPage/>} exact/>
            </Routes>
        </ProductProvider>
    );
}

export default App;
