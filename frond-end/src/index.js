import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from "./home/home";
import Header from "./component/header";
import Footer from "./component/footer";
import {Carousel} from "./home/carousel";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header></Header>
      <Carousel></Carousel>
      <Home></Home>
      <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
