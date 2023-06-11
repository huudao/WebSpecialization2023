import {createContext, useState} from "react";

export const OrderContext = createContext({});
export const OrderProvider = (props) => {
    const [listDetail,setListDetail]= useState([]);
    const [showDetail,setShowDetail]= useState();




    const valueContext = {listDetail,setListDetail,showDetail,setShowDetail}
    return <OrderContext.Provider value={valueContext}>{props.children}</OrderContext.Provider>

}