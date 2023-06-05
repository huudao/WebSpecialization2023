import Header from "../component/header";
import Footer from "../component/footer";
import DetailProduct from "../detail/detailProduct";
import {memo, useContext, useState} from "react";
import {ProductContext} from "../context/productContext";
function DetailPage() {
    const {result} = useContext(ProductContext);
    // console.log(result+"sdfsdfds")
    return (
        <>
            <Header/>
            <DetailProduct data={result}/>
            <Footer/>
        </>
    )
}
;

export default memo(DetailPage);