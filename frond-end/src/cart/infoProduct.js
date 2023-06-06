import {useContext, useState} from "react";
import {decrement, deleteCart, increment} from "../feature/cart";

export function InfoProduct(props) {
    // var i=0;
    // const [count,setCount]=useState(amount)

    const {
        imgUrl,
        brandName,
        name,
        size,
        amount,
        totalPrice,
        stock,
        regularPrice,
        priceAfterDiscount,
        cartItemId
    } = props.data;

    function handlerDelete() {
        deleteCart(cartItemId).then(res => {
            console.log(res.status,"status")
                if (res.status === 404) {
                    window.location.reload()

                }
            }
        )
    }

    function increNumber() {
        increment(cartItemId, amount)


    }

    function decreNumber() {
        decrement(cartItemId, amount)

    }


    return (
        <>
            <tr>
                <th scope="row">{props.count + 1}</th>
                <td>
                    <div className="product__info d-flex    ">

                        <img src={imgUrl}
                             width={"180px"} height={"180px"}></img>
                        <div className="product__detail w-50">
                            <div className="product__tile fs-5"><a className="text-decoration-none"
                                                                   href="#">{name}</a></div>
                            <div className="product__brands">By {brandName}</div>
                            <div className="product__id"><small>Item #{cartItemId}</small></div>
                            <div className="product__ml">{size} oz Eau De Toilette Spray</div>
                            <div className="product__status">In stock</div>
                            <button className="btn btn-warning" onClick={handlerDelete}>Remove</button>
                        </div>
                    </div>

                </td>
                <td className="text-center">
                    đ {regularPrice} Reguler price <br/>
                    đ {priceAfterDiscount} Afer coupon

                </td>
                <td className="text-center">
                    <button className=" btn btn-primary btn-number" style={{width: "40px", height: "40px"}}
                            onClick={increNumber}> +
                    </button>
                    <input type="text" style={{width: "40px"}} className="form-control text-center m-auto"
                           value={amount}
                           min="1" max="10"/>
                    <button className="btn btn-primary btn-number" style={{width: "40px", height: "40px"}}
                            onClick={decreNumber}>-
                    </button>

                </td>
                <td className="text-center">{totalPrice}</td>
            </tr>
        </>
    )
}