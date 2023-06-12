import {useContext, useEffect} from "react";
import {ProductContext} from "../context/productContext";
import  $ from "jquery"
import  {useNavigate} from "react-router-dom";

export  function BrandName(props){
    const navigate = useNavigate()
    const {setIdBrand,idBrand} = useContext(ProductContext)
    const {name,id}=props.data;
    function  handlerBrand(e){
        e.preventDefault()

        setIdBrand(id)
        navigate("/product")

        console.log(idBrand)

    }
    return(
        <>
            <div className="form-check ps-0 w-75">
                <button className="btn btn-info w-100" htmlFor="dolce__gabbana" onClick={handlerBrand}> {name}</button>
            </div>
        </>
    )
}