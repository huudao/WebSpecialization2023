import Header from "../component/header";
import Footer from "../component/footer";
import DetailProduct from "../detail/detailProduct";
import {memo} from "react";
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