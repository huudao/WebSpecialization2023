import {createContext, useState} from "react";
import {listData} from "../API/apiProduct";

export const ProductContext = createContext({});

export const ProductProvider=(props)=>{
    const [url,setUrl]=useState("");
    const getId=(item)=>{
        setUrl("sdfd")
    }
    const valueContext={listData,getId}
    return <ProductContext.Provider value={valueContext}>{props.children}</ProductContext.Provider>

}