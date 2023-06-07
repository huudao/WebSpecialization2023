import '../asset/css/cart.css'
import {useContext, useEffect, useState} from "react";
import {getCart} from "../feature/cart";
import {InfoProduct} from "./infoProduct";
import {NavLink} from "react-router-dom";
import {ProductContext} from "../context/productContext";
import {ListAddress} from "../cart/listAddress";
import {getAddress} from "../feature/address";
import $ from 'jquery'
import {AddressContext} from "../context/addressContext";

function Cart() {
    const [data, setData] = useState({});
    const [listProduct, setListProduct] = useState([])
    const {setCount} = useContext(ProductContext);
    const {showChekout,setShowCheckout} = useContext(AddressContext);

    const [isShow, setIsShow] = useState()
    const [listAddress, setListAddress] = useState([])
    $(document).ready(()=>{
        $("#checkout").click(()=>{
            $('#address').show()
        })
    })

    useEffect(() => {
        getCart()
            .then(res => {
                setData(res)
                setListProduct(res.cartItems)
            }).catch(err => console.err)
        setCount(listProduct.length);
        localStorage.setItem("count",listProduct.length);
    }, [data, listProduct])

    function handlerCheckout() {
        setShowCheckout(true)
        getAddress()
            .then(res => {
                console.log(res,"rest")
                setListAddress(res)
            })
            .then(()=> setIsShow(true)
            ).catch(err=> console.log(err))
        console.log(listAddress)
    }

    return (
        <>
            <div className="container-fluid cart-item row">
                <div className="cart__detail col-sm-8 ">


                    <div className="cart__info fs-2 font-monospace">
                        Total (
                        {listProduct.length !== 0 ? listProduct.length : "0"} items):
                        đ {data.length !== 0 && data.totalPrice}
                    </div>
                    <div className="continue__shopping ">
                        <NavLink to={"/product/sex?women"} className="d-flex text-decoration-none text-black">
                            <i class="fas fa-arrow-left m-2"></i>
                            <p className="m-1">Continue shopping</p>
                        </NavLink>

                    </div>
                    <small className="cart__product ">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th className="w-50" scope="col">Product Information</th>
                                <th className="text-center" scope="col">Price</th>
                                <th className="text-center" scope="col">Quantity</th>
                                <th className="text-center" scope="col">Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {listProduct.map((data, index) => (data.length !== 0) &&
                                <InfoProduct data={data} count={index}/>)}


                            </tbody>
                        </table>
                    </small>
                </div>
                <div className="cart__payment   col-sm-4">
                    <button className="btn btn-block my-3 " height={"50px"} id="checkout" onClick={handlerCheckout}>Process to Checkout
                    </button>
                    <button className="btn btn-block text-bg-info">Check out with <img
                        src='https://img.fragrancex.com/images/paypal.svg'></img></button>
                    <div className="cart__sum">
                        <div className="d-flex m-2">
                            <p className="justify-content-start">Subtotal</p>
                            <p className="text-end">đ {data.totalCartPrice}</p>
                        </div>
                        <hr/>
                        <div className="d-flex m-2">
                            <p className="justify-content-start">Total</p>
                            <p className="text-end">đ {data.totalPrice}</p>
                        </div>

                    </div>
                </div>
                {showChekout === true &&
                <div className="w-100 h-100  position-absolute" id="address">
                     <ListAddress data={listAddress}/>

                </div>
                }


            </div>
        </>
    )
}

export default Cart;