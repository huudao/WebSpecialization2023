import {createContext, useEffect, useState} from "react";

export const ProductContext = createContext({});
export const ProductProvider = (props) => {
    const [result, setResult] = useState({})
    const [productId, setProductId] = useState(0);
    const [variantId, setVariantId] = useState(0);

    // const aaa = async (value) => {
    //      setProductId(value);
    // }
    const setProductIdNew =async (value) => {
        setProductId(value)

    }
    const setVariantIdNew =async (value) => {
        setVariantId(value)

    }
    console.log(result)
    console.log(productId)
    console.log(variantId)
    const getDetail=()=>{
        return result;
    }
    const valueContext = {setVariantIdNew,setProductIdNew, setProductId,setVariantId, setResult,getDetail,productId,variantId}
    return <ProductContext.Provider value={valueContext}>{props.children}</ProductContext.Provider>

}