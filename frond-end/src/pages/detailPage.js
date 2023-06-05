import Header from "../component/header";
import Footer from "../component/footer";
import DetailProduct from "../detail/detailProduct";
import {memo, useContext, useState} from "react";
import {ProductContext} from "../context/productContext";
function DetailPage() {
    return (
        <>
            <Header/>
            <DetailProduct />
            <Footer/>
        </>
    )
}
;

export default memo(DetailPage);