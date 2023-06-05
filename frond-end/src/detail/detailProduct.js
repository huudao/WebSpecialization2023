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
    // const result = getDetail();
    const [variants, setVariants] = useState([]);
    const [product, setProduct] = useState({});
    const [img, setImg] = useState([]);

    const styleStar = {
        width: `${variants.star}%`
    }
    const currentURL = window.location.href;

    const proId=currentURL.charAt(30);
    const varId=currentURL.charAt(33);
    useEffect(() => {
        console.log(proId,varId)
        detailProduct(proId, varId)
            .then(items => {
                setProduct(items);
                setImg([...items.imageUrls]);
                console.log(img,"đfds")
                setVariants([...items.variants]);
            })


    }, [variants,product,img])


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
                            <img src={img[0]} style={{width: "300px", height: "300px"}}/><br/>
                            <a className="play_review" href="#">
                                <img src={img[0]} style={{width: "30px", height: "30px"}}/>
                                <span>Watch Our Review</span>

                            </a>
                        </div>


                        <div className="detail__info" style={{width: "70%"}}>
                            <p className="h5">{product.name}</p>
                            <p>By <a href="/product">{product.brandName}</a> for {variants.sex}</p>
                            <p> 1 sizes available</p>
                            <div className="product__review  d-flex ">
                                <div className="product__star  ">
                                    <div className="star__total" style={styleStar}></div>
                                </div>
                                <div className="review__count">Read 73 Reviews</div>
                            </div>
                            {
                                variants.map((data) => <Detail result={data} size={variants.length}/>)
                            }

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default DetailProduct;