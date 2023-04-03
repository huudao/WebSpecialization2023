import '../asset/css/cart.css'
function Cart() {
    return (
        <>
            <div className="container-fluid cart row">
                <div className="cart__detail col-sm-8 ">


                    <div className="cart__info fs-2 font-monospace">
                        Total(2 items): đ 1,906,805,58
                    </div>
                    <div className="continue__shopping ">
                        <a href="#" className="d-flex text-decoration-none text-black">
                            <i class="fas fa-arrow-left m-2"></i>
                            <p className="m-1">Continue shopping</p>
                        </a>

                    </div>
                    <div className="cart__product">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product Information</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <div className="product__info d-flex">
                                        <img src="https://img.fragrancex.com/images/products/sku/small/69036.webp" width={"200px"} height={"200px"}></img>
                                        <div className="product__detail">
                                            <div className="product__tile fs-5"><a className="text-decoration-none" href="#">Light Blue Perfume</a></div>
                                            <div className="product__brands">By Dolce & Gabbana</div>
                                            <div className="product__id"><small>Item #43534</small></div>
                                            <div className="product__ml">0.7 oz Eau De Toilette Spray</div>
                                            <div className="product__status">In stock</div>
                                        </div>
                                    </div>

                                </td>
                                <td>
                                    đ 565,465,464,56
                                </td>
                                <td>
                                    <select name="unit" id="number" className="form-select-sm">
                                        <option value="1" >1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                </td>
                                <td>453,454,345,33</td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="cart__payment   col-sm-4">
                    <button className="btn btn-block my-3 " height={"50px"}>Process to Checkout</button>
                    <button className="btn btn-block text-bg-info">Check out with <img src='https://img.fragrancex.com/images/paypal.svg'></img></button>
                    <div className="cart__sum">
                        <div className="d-flex m-2">
                            <p className="justify-content-start">Subtotal</p>
                            <p className="text-end">đ 2,345,3544</p>
                        </div>
                        <hr/>
                        <div className="d-flex m-2">
                            <p className="justify-content-start">Total</p>
                            <p className="text-end">đ 2,345,3544</p>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
export default Cart;