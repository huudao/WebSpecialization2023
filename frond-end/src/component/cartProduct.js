import {ProductContext} from "../context/productContext"
import {useContext, memo} from "react";
// import {useNavigate} from "react-router"
import {NavLink} from "react-router-dom";

function CartProduct(props) {
    // const navigate= useNavigate();
    const {setUrl,setResult,setUrlNew} = useContext(ProductContext);
    const {id, name, brand, sex, img, star, review, price} = props.data;
    const styleStar = {
        width: `${star}%`
    }

     function handler(id) {
        setUrl(id)
        setResult(props.data);
        // setUrlNew(id);
        //  navigate(urls)

    }

    const urls = `/detail/:${id}`;
    return (
        //{urls}
        <NavLink to={urls} className="bestsaler__product-detail text-center col-sm-3 text-decoration-none "
           onClick={() => {handler(id)}}>
            <img src={img}></img>
            <div className="product__name h5">{name}</div>
            <div className="product__brand">By <a href="#">{brand}</a></div>
            <div className="product__sex">{sex}</div>

            <div className="product__review  d-flex justify-content-center">
                <div className="product__star  ">
                    <div className="star__total" style={styleStar}></div>
                </div>
                <div className="review__count">({review})</div>
            </div>

            <div className="product__price">đ {price}</div>

        </NavLink>

    )
}

export default memo(CartProduct);