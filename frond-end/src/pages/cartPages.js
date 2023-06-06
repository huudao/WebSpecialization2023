import Header from "../component/header";
import Footer from "../component/footer";
import Cart from "../cart/cart";
import {AddressProvider} from "../context/addressContext";

function CartPage() {
    return (
        <AddressProvider>
            <>
                <Header></Header>
                <Cart></Cart>
                <Footer></Footer>
            </>
        </AddressProvider>
    )
};

export default CartPage;
