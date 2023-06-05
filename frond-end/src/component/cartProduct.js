import {ProductContext} from "../context/productContext"
import {useContext, memo} from "react";
// import {useNavigate} from "react-router"
import {NavLink} from "react-router-dom";

function CartProduct(props) {
    // const navigate= useNavigate();
    const {setProductId, setVariantId, setResult} = useContext(ProductContext);
    const {productId, variantId, name, brandName, imageUrls, averageRating, stock, price} = props.data;
    const styleStar = {
        width: `${averageRating}%`
    }

    function handler(productId, variantId) {
        setProductId(productId)
        setVariantId(variantId)
        setResult(props.data);


    }

    const urls = `/detail/:${productId}/:${variantId}`;
    return (
        //{urls}
        <NavLink to={urls} className="bestsaler__product-detail text-center col-sm-3 text-decoration-none "
                 onClick={() => {
                     handler(productId, variantId)
                 }}>
            <img class="img-thumbnail" src={imageUrls} style={{width: "250px", height: "300px"}}></img>
            <div className="product__name h5">{name}</div>
            <div className="product__brand">By <a href="#">{brandName}</a></div>
            <div className="product__sex">{props.sex}</div>

            <div className="product__review  d-flex justify-content-center">
                <div className="product__star  ">
                    <div className="star__total" style={styleStar}></div>
                </div>
                <div className="review__count">({})</div>
            </div>

            <div className="product__price">đ {price}</div>

        </NavLink>

    )
}

export default memo(CartProduct);