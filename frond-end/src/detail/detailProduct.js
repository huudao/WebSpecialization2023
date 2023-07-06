import '../asset/css/home.css'
import '../asset/css/detail.css'
import { useEffect, useState} from "react";
import {Detail} from "../component/detail";
import {detailProduct} from "../feature/product";
import {Slide, ToastContainer} from "react-toastify";


function DetailProduct(props) {
    const [variants, setVariants] = useState([]);
    const [product, setProduct] = useState({});
    const [img, setImg] = useState([]);

    const styleStar = {
        width: `${variants.star}%`
    }
    const currentURL = window.location.href;

    const myArray = currentURL.split("/:");
    const proId = myArray[1];
    const varId = myArray[2];
    useEffect(() => {
        // console.log(proId, varId)
        detailProduct(proId, varId)
            .then(items => {
                setProduct(items);
                setImg([...items.imageUrls]);
                // console.log(img, "đfds")
                setVariants([...items.variants]);
            })


    }, [variants, product, img])


    return (
        <>
            <div className="container-fluid">
                <div className="bread-crumb ">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="">Home</a></li>
                            <li className="breadcrumb-item " aria-current="page"><a href="/product">Product</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Detail Product</li>
                        </ol>
                    </nav>

                    <div className="details row ">
                        <div className="watch text-center col-sm-3 ">
                            <img className="img-thumbnail"  src={img[0]} /><br/>
                            <a className="play_review" href="#">
                                <img className="img-thumbnail" src={img[0]} style={{width: "30px", height: "30px"}}/>
                                <span>Watch Our Review</span>

                            </a>
                        </div>


                        <div className="detail__info col-sm-9" >
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
            <ToastContainer position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            draggable
                            pauseOnHover
                            transition={Slide}
                            theme="light"/>
        </>
    )
}

export default DetailProduct;