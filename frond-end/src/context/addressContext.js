import {createContext, useEffect, useState} from "react";

export const AddressContext = createContext({});
export const AddressProvider = (props) => {
    const [showList, setShowList] = useState(true);
    const [result, setResult] = useState({})
    const [productId, setProductId] = useState(0);
    const [variantId, setVariantId] = useState(0);
    const [key, setKey] = useState("")


    const valueContext = {showList, setShowList}
    return <AddressContext.Provider value={valueContext}>{props.children}</AddressContext.Provider>

}