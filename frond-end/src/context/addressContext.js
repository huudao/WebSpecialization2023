import {createContext, useEffect, useState} from "react";

export const AddressContext = createContext({});
export const AddressProvider = (props) => {
    const [count, setCount] = useState("0")
    const [result, setResult] = useState({})
    const [productId, setProductId] = useState(0);
    const [variantId, setVariantId] = useState(0);
    const [key, setKey] = useState("")


    const valueContext = {}
    return <AddressContext.Provider value={valueContext}>{props.children}</AddressContext.Provider>

}