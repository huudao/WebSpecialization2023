import Header from "../component/header";
import Footer from "../component/footer";
import {Carousel} from "../home/carousel";
import Home from "../home/home";
function HomePage() {
    return (
        <>
            <Header></Header>
            <Carousel></Carousel>
            <Home></Home>
            <Footer></Footer>
        </>
    )
};

export default HomePage;
