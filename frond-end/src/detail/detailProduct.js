import '../asset/css/home.css'
import '../asset/css/detail.css'
import {ProductContext} from "../context/productContext"
import {useContext, useEffect, useState} from "react";
import {Detail} from "../component/detail";
import {useDispatch} from "react-redux";
import {detailProduct} from "../feature/product";

function DetailProduct(props) {
    const dispatch = useDispatch();
    const {productId, variantId, getDetail} = useContext(ProductContext);
    const result = getDetail();
    const [varients, setVarients] = useState([]);
    // console.log(result.star)
    const styleStar = {
        width: `${result.star}%`
    }
    useEffect(() => {
        console.log(productId, variantId, "in detail")
        detailProduct(productId, variantId)
            .then(items => {
                console.log(items, "ccc")
                setVarients([...items]);
            })
        console.log(varients, "uuuu")

    }, [varients])


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
                    <div className="detail d-flex w-100">
                        <div className="watch text-center" style={{width: "30%"}}>
                            <img src={result.imageUrls} style={{width: "300px", height: "300px"}}/><br/>
                            <a className="play_review" href="#">
                                <img src={result.imageUrls} style={{width: "30px", height: "30px"}}/>
                                <span>Watch Our Review</span>

                            </a>
                        </div>


                        <div className="detail__info" style={{width: "70%"}}>
                            <p className="h5">{result.name}</p>
                            <p>By <a href="/product">{result.brand}</a> for {result.sex}</p>
                            <p> 1 sizes available</p>
                            <div className="product__review  d-flex ">
                                <div className="product__star  ">
                                    <div className="star__total" style={styleStar}></div>
                                </div>
                                <div className="review__count">Read 73 Reviews</div>
                            </div>
                            <Detail result={result}/>

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default DetailProduct;