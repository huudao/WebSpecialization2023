import {createContext, useEffect, useState} from "react";
import {listData} from "../API/apiProduct";

export const ProductContext = createContext({});
// const getDefault
export const ProductProvider = (props) => {
    const [result, setResult] = useState({})
    const [url, setUrl] = useState(0);

    // useEffect(() => {
    //     // setUrl(value);
    //     console.log("url", url)
    //
    //     console.log("result",result)
    //     setResults(result);
    //
    //
    // }, [url,result,results]);
    // console.log(results.id+"sdfsdfsd")

    const aaa = async (value) => {
         setUrl(value);
    }
    const setUrlNew =async (value) => {
        setUrl(value)


    }
    console.log(result)
    console.log(url)
    const getDetail=()=>{
        // console.log(result.id+"test")
        // setUrl(url);
        // listData.map((data) => data.id === url && setResult(data))
        return result;
    }
    // console.log(getDetail())


    const valueContext = {listData, setUrlNew, setUrl, setResult,getDetail}
    return <ProductContext.Provider value={valueContext}>{props.children}</ProductContext.Provider>

}