import ManagerOrder from "../admin/managerOrder"
import {Header} from "../admin/header";
import Footer from "../component/footer";
import {OrderProvider} from "../context/orderContext";

function AdminPageOrder() {
    return (
        <>
            <OrderProvider>
                <Header/>
                <ManagerOrder/>
                <Footer/>
            </OrderProvider>
        </>
    )
};

export default AdminPageOrder;