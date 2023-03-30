
function Footer() {
    return (
        <>
            <div className="container-fluid footer text-light">
                <div className="row infomation">
                    <div className="col-sm-2 shop ">
                        <p className="h3">Shop</p>
                        <div><a className="" href="#">Best Salers</a></div>
                        <div><a href="#">New Arrivals</a></div>
                        <div><a href="#">Celebrity Scent</a></div>
                        <div><a href="#">Hard To Find</a></div>
                        <div><a href="#">Testera</a></div>
                    </div>
                    <div className="col-sm-3 move__shop">
                        <p className="h3">Move Way To Shop</p>
                        <div><a href="#">Deodorant</a></div>
                        <div><a href="#">After Shave</a></div>
                        <div><a href="#">Shower Gel</a></div>
                        <div><a href="#">Body Cream</a></div>

                    </div>
                    <div className="col-sm-2 help">
                        <p className="h3">Help</p>
                        <div><a href="#">Order Status</a></div>
                        <div><a href="#">Shipping Info</a></div>
                        <div><a href="#">Return Info</a></div>
                        <div><a href="#">Contact Info</a></div>
                        <div><a href="#">About Us</a></div>

                    </div>
                    <div className="col-sm-2 move__help">
                        <p className="h3">Move Help</p>
                        <div><a href="#">Affiliates</a></div>
                        <div><a href="#">Wholesale Information</a></div>
                        <div><a href="#">Customer Testimonials</a></div>
                        <div><a href="#">Safe Shopping Guarantee</a></div>
                        <div><a href="#">Site Map</a></div>

                    </div>

                </div>
                <div className="coupon row">
                    <div className="col-md-4 offset-md-7  ">
                        <p className="h1">Join Our Coupon List</p>
                        <p>Get the best dcount on name brand fragrances and more</p>
                        <form className=" d-flex" >
                            <input type={"email"} placeholder="Enter your email" className="form-control "></input>
                            <button type="summit" className="btn bg-light">Sign Up</button>
                        </form>
                        <div className=""></div>
                        <div className="icon__contact mt-3 mb-3">
                            <a><i className="fab fa-facebook fa-sm"></i></a>
                            <a><i class="fab fa-instagram fa-sm"></i></a>
                            <a><i class="fab fa-youtube fa-sm"></i></a>
                            <a><i class="fab fa-twitter fa-sm"></i></a>
                            <a><i class="fab fa-pinterest-p fa-sm"></i></a>
                        </div>
                    </div>
                </div>
                <div className="copyright row ">
                    <p className="col-sm-6 my-2 ps-5">Copyright @ 2023 .All Right Reserved</p>
                    <p className="col-sm-6 text-end my-2 pe-5">Last Update March 26,2023</p>

                </div>

            </div>
        </>
    )
}
export default Footer;