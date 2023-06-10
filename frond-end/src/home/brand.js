import {getProductByBrandId} from "../feature/product";
import {useNavigate} from 'react-router-dom'
import {useContext} from "react";
import {ProductContext} from "../context/productContext";

export function Brand(props) {
    const {setKey} = useContext(ProductContext);
    const navigate = useNavigate();
    const {name, imageUrl, id} = props.data;

    function handerBrand() {
        console.log(id, "iddddds")
        setKey(id)
        navigate("/product")

    }

    return (
        <>
            <button className="part d-flex rounded mx-3 my-3 border-0" onClick={handerBrand}>
                <img className="img-fluid rounded"
                     src={imageUrl}/>
                <div className="brands__name h4 "><a className="text-decoration-none text-black">{name}</a></div>
            </button>
        </>
    )
}