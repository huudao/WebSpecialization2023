import '../asset/css/product.css'
import '../asset/css/home.css'
import BarFilter from "../component/filter";
import CartProduct from "../component/cartProduct";
import {useContext, memo, useState, useEffect} from "react";
import {ProductContext} from "../context/productContext";
import Pagination from "../component/pagination";
import axios from "axios";
import {getListProduct} from "../asset/service/productService";
import httpRequest from "../API/axios";
import {useDispatch} from "react-redux";
import product, {for_men} from "../feature/product";
import {unwrapResult} from "@reduxjs/toolkit";
import {getForMen} from "../service/productService";

function ShowProduct(props) {
    const dispatch = useDispatch();
    const { setUrlNew} = useContext(ProductContext);
    const [listProduct, setListProduct] = useState([]);
    const [postList, setPostList] = useState([]);
    const [begin, setBegin] = useState(0);
    const [end, setEnd] = useState(2)
    const [distance, setDistance] = useState(end - begin);

    useEffect(() => {
        getForMen()
            .then(items => {
                // console.log(items, "bbbb");
                setListProduct([...items])
            })
    }, [listProduct])
    useEffect(() => {

        let listPa = [];
        for (let i = begin; i < end; i++) {
            listPa.push(listProduct[i])
        }
        // console.log(listPa,"qqqq")
        setPostList([...listPa])
        console.log(postList,"yyyy");


    }, [begin,end,listProduct,postList])

    function handlePageChange(newPage) {
        console.log("new page")

        if (newPage === "next") {
            if (end <= listProduct.length) {
                if (end + (end - begin) > listProduct.length) {
                    console.log("dinh")
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
        console.log(begin, end)
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
                <h1>Discount Perfume for Women</h1>
                <div className="d-flex">
                    <p className="product__search">1-60 of {listProduct.length} Results</p>
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
                            postList.map(data => <CartProduct data={data}/>)

                        }

                        <Pagination begin={begin} end={end} totalRow={listProduct.length} onPageChange={handlePageChange}
                        />
                    </div>

                </div>


            </div>
        </>

    )
}

export default memo(ShowProduct);