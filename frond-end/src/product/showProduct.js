import '../asset/css/product.css'
import '../asset/css/home.css'
import BarFilter from "../component/filter";
import CartProduct from "../component/cartProduct";
import {useContext, memo, useState, useEffect} from "react";
import {ProductContext, ProductProvider} from "../context/productContext";
import Pagination from "../component/pagination";

import {useDispatch} from "react-redux";
import product, {for_men, search} from "../feature/product";
import {unwrapResult} from "@reduxjs/toolkit";
import {getForMen,getForWomen} from "../service/productService";

function ShowProduct(props) {
    const {key,setCount}=useContext(ProductContext)
    const [listProduct, setListProduct] = useState([]);
    const [postList, setPostList] = useState([]);
    const [begin, setBegin] = useState(0);
    const [end, setEnd] = useState(3)
    const [distance, setDistance] = useState(end - begin);
    const url = window.location.href;
    const [sex,setSex]=useState("")
    const sexUrl = url.slice(34,)
    useEffect(() => {

        // console.log(sexUrl, "sex")
        if (sexUrl === "men") {
            getForMen()
                .then(items => {
                    // console.log(items, "bbbb");
                    setListProduct([...items])
                    setSex("Men");

                })
        }
       else  if(sexUrl==="women"){
            getForWomen()
                .then(items => {
                    setListProduct([...items])
                    setSex("Women")

                })
        }else{
           search(key).then(items => {
               console.log(items,"item")
               setListProduct([...items])
               setSex("")


           })

        }

    }, [listProduct])
    useEffect(() => {

        let listPa = [];
        for (let i = begin; i < end; i++) {
            listPa.push(listProduct[i])
        }
        setPostList([...listPa])


    }, [begin, end, listProduct])

    function handlePageChange(newPage) {
        if (newPage === "next") {
            if (end <= listProduct.length) {
                if (end + (end - begin) > listProduct.length) {
                    setBegin(begin + (end - begin));
                    setEnd(end + (listProduct.length - end))
                } else {
                    setBegin(begin + (end - begin));
                    setEnd(end + (end - begin))
                }
            } else {
            }
        } else if (newPage === "pre") {
            if (begin >= 0) {
                if (end - begin < distance) {
                    setBegin(begin - distance);
                    setEnd(end - (end - begin))
                } else if (end - begin == distance) {
                    setBegin(begin - distance);
                    setEnd(end - distance)
                }
            }
        }
        // console.log(begin, end)
    }


    return (
        <>
            <div className="container-fluid">
                <div className="bread-crumb">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Product</li>
                        </ol>
                    </nav>
                </div>
                <h1>Discount Perfume for {sex}</h1>
                <div className="d-flex">
                    <p className="product__search">{begin}- {end} of {listProduct.length} Results</p>
                    <div className="product__search d-flex  justify-content-end">
                        <label htmlFor="inputState">Order by:</label>
                        <form>
                            <select id="inputState" className="form-control">
                                <option selected>Relevance</option>
                                <option>Most popular</option>
                                <option>A -Z</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="filter col-sm-2">
                        <BarFilter></BarFilter>
                    </div>
                    <div className="show col-sm-10 row  overflow-hidden position-relative flex-wrap">
                        {
                            postList.map(data => data !== undefined && <CartProduct data={data} sex={sex}/>)

                        }

                        <Pagination begin={begin} end={end} totalRow={listProduct.length}
                                    onPageChange={handlePageChange}
                        />
                    </div>

                </div>


            </div>
        </>

    )
}

export default memo(ShowProduct);