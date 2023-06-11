import ManagerProduct from "../admin/managerProduct"
import {Header} from "../admin/header";
import Footer from "../component/footer";
import {ProductProvider} from "../context/productContext";
function AdminPageProduct() {

    return (
            <>
                <Header/>
                <ManagerProduct/>
                <Footer/>
            </>
    )
};

export default AdminPageProduct;