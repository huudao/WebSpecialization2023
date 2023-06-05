import {ProductContext} from "../context/productContext"
import {useContext, memo} from "react";
// import {useNavigate} from "react-router"
import {NavLink} from "react-router-dom";

function CartProduct(props) {
    // const navigate= useNavigate();
    const {setUrl,setResult,setUrlNew} = useContext(ProductContext);
    const {productId, name, brandName, imageUrls, averageRating,stock, price} = props.data;
    const styleStar = {
        width: `${averageRating}%`
    }

     function handler(id) {
        setUrl(id)
        setResult(props.data);
        // setUrlNew(id);
        //  navigate(urls)

    }

    const urls = `/detail/:${productId}`;
    return (
        //{urls}
        <NavLink to={urls} className="bestsaler__product-detail text-center col-sm-3 text-decoration-none "
           onClick={() => {handler(productId)}}>
            <img class="img-thumbnail"  src={imageUrls} style={{width:"250px",height:"300px"}}></img>
            <div className="product__name h5">{name}</div>
            <div className="product__brand">By <a href="#">{brandName}</a></div>
            <div className="product__sex">MEN</div>

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