import '../asset/css/home.css'
import '../asset/css/detail.css'
import {ProductContext} from "../context/productContext"
import {useContext, useState} from "react";
function DetailProduct(props) {
    // const {id, name, brand, sex, img, star, review, price} = props.data;
    const {getDetail} = useContext(ProductContext);
    const result =getDetail();
    console.log(result.star)
    const styleStar={
        width: `${result.star}%`
    }


    return (
        <>
            <div className="container-fluid">
                <div className="bread-crumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="">Home</a></li>
                            <li className="breadcrumb-item " aria-current="page"><a href="/product">Product</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Detail Product</li>
                        </ol>
                    </nav>
                    <div className="detail d-flex">
                        <div className="watch text-center" style={{width:"30%"}}>
                            <img src={result.img} style={{width:"300px", height:"300px"}}/><br/>
                            <a className="play_review" href="#">
                                <img src={result.img} style={{width:"30px", height:"30px"}}/>
                                <span>Watch Our Review</span>

                            </a>
                        </div>


                        <div className="detail__info" style={{width:"70%"}}>
                            <p className="h5">{result.name}</p>
                            <p>By <a href="/product">{result.brand}</a> for {result.sex}</p>
                            <p> 1 sizes available</p>
                            <div className="product__review  d-flex ">
                                <div className="product__star  ">
                                    <div className="star__total" style= {styleStar}></div>
                                </div>
                                <div className="review__count">Read 73 Reviews</div>
                            </div>
                            <div className="choose">
                                <div className="choose__info row">
                                    <img className="col-sm-2"
                                         src={result.img} style={{width:"100px", height:"100px"}}/>
                                    <div className="pop__content col-sm-5">
                                        <p className="fw-bold m-1">100 ml Eau De Parfum Spray</p>
                                        <small>Item #538279</small>
                                        <p>In Stock</p>

                                    </div>
                                    <div className="cart__add col-sm-5 text-center">
                                        <p>Price with Coupon</p>
                                        <h2>đ {result.price}</h2>
                                        <p>Delivery</p>
                                        <p>April 6 - 14</p>
                                        <button className="btn btn-dark m-1" type="submit " style={{width:"100%"}}>Add to cart</button>
                                        <button className="btn btn-primary m-1" type="submit " style={{width:"100%"}}>Get 15% Off</button>

                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default DetailProduct;