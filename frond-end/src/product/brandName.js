import {useContext, useEffect} from "react";
import {ProductContext} from "../context/productContext";
import  $ from "jquery"

export  function BrandName(props){
    const {setIdBrand,idBrand} = useContext(ProductContext)
    const {name,id}=props.data;
    function  handlerOnchange(){
        setIdBrand($("#brand").val())

        console.log(idBrand)
    }


    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value={id} id="brand" onChange={handlerOnchange}/>
                <label className="form-check-label" htmlFor="dolce__gabbana"> {name}</label>
            </div>
        </>
    )
}