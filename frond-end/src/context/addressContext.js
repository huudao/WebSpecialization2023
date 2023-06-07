import {createContext, useEffect, useState} from "react";

export const AddressContext = createContext({});
export const AddressProvider = (props) => {
    const [showList, setShowList] = useState(true);
    const [showChekout, setShowCheckout] = useState(false);


    console.log(showList,"showlist")


    const valueContext = {showList, setShowList,showChekout,setShowCheckout}
    return <AddressContext.Provider value={valueContext}>{props.children}</AddressContext.Provider>

}