import {useEffect, useState} from "react";
import {addCart} from "../feature/cart";
import {unwrapResult} from "@reduxjs/toolkit";
import {ProductContext} from "../context/productContext";
import {useContext} from "react";
import {toast} from "react-toastify";

export function Detail(props) {
    const {setCount} = useContext(ProductContext);
    const result = props.result;
    const variantId = result.variantId;
    const [counts, setCounts] = useState([])
    useEffect(() => {
        // setCount(props.size);
        // console.log(count)

    }, [counts])

    // var = localStorage.getItem("count")+1
    function handlerAddCart() {
        console.log(counts)
        localStorage.setItem("count", counts)
        const amount = document.getElementById("amount").value;
        console.log(amount, variantId);
        addCart(variantId, amount).then(r => {
            localStorage.setItem("count", r.data.cartItems.length)
            console.log(r.data.length)
            setTimeout(()=>toast.success('🦄 Success!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            }),4000)

            window.location.reload()


        }).catch(err => {
            toast.error('🦄 Conflict product!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })


    }

    return (
        <>
            <hr/>
            <div className="choose">
                <div className="choose__info row">
                    <img className="col-sm-2"
                         src={result.imageList[0]} style={{width: "100px", height: "100px"}}/>
                    <div className="pop__content col-sm-5">
                        <p className="fw-bold m-1">{result.size} ml Eau De Parfum Spray</p>
                        <small>Item #538279</small>
                        <p>In Stock</p>
                        <select id="amount" className="form-select w-25" aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>

                    </div>
                    <div className="cart__add col-sm-5 text-center">
                        <p>Price with Coupon</p>
                        <h2>đ {result.price}</h2>
                        <p>Delivery</p>
                        <p>April 6 - 14</p>
                        <button className="btn btn-dark m-1" type="submit " style={{width: "100%"}}
                                onClick={handlerAddCart}>Add to cart
                        </button>
                        <button className="btn btn-primary m-1" type="submit " style={{width: "100%"}}>Get 15% Off
                        </button>

                    </div>
                </div>
            </div>
        </>
    )
}