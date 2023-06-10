import {useEffect} from "react";
import {brands} from "../feature/product";

export  function BrandName(props){
    const {name,id}=props.data;
    // useEffect(()=>{
    //     brands(id)
    // })
    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="dolce__gabbana"/>
                <label className="form-check-label" htmlFor="dolce__gabbana"> {name}</label>
            </div>
        </>
    )
}