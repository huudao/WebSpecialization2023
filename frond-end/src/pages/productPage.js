import Header from "../component/header";
import Footer from "../component/footer";
import ShowProduct from "../product/showProduct";
import {memo} from "react";
function ProductPage() {

    return (
        <>
            <Header></Header>
            <ShowProduct></ShowProduct>
            <Footer></Footer>
        </>
    )
};

export default  memo(ProductPage);
