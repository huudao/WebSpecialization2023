import {createContext, useEffect, useState} from "react";

export const ProductContext = createContext({});
export const ProductProvider = (props) => {
    const [count, setCount] = useState("")
    const [result, setResult] = useState({})
    const [productId, setProductId] = useState(0);
    const [variantId, setVariantId] = useState(0);
    const [listBrand,setListBrand] =useState([])
    const [key, setKey] = useState("")
    const [idBrand,setIdBrand] = useState("")
    const [listDetail,setListDetail]= useState([]);
    const [showDetail,setShowDetail]= useState();

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
    const valueContext = {setVariantIdNew,setProductIdNew, setProductId,setVariantId, setResult,getDetail,productId,variantId,setCount,count,key,setKey,listBrand,setListBrand,idBrand,setIdBrand,listDetail,setListDetail,showDetail,setShowDetail}
    return <ProductContext.Provider value={valueContext}>{props.children}</ProductContext.Provider>

}