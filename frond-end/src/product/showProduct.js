import '../asset/css/product.css'
import '../asset/css/home.css'
import BarFilter from "../component/filter";
import CartProduct from "../component/cartProduct";
import {useContext, memo, useState, useEffect} from "react";
import {ProductContext} from "../context/productContext";
import Pagination from "../component/pagination";

function ShowProduct() {
    const {listData, setUrlNew} = useContext(ProductContext);
    const [postList, setPostList] = useState([]);
    const [begin, setBegin] = useState(0);
    const [end, setEnd] = useState(4)
    const [distance, setDistance] = useState(end - begin);

    useEffect(() => {
        let listPa = [];
        for (let i = begin; i < end; i++) {
            listPa.push(listData[i])

        }
        setPostList(listPa);
        console.log(postList)
    }, [begin, end])

    function handlePageChange(newPage) {
        console.log("new page")
        // if (end - begin < distance) {
        //     console.log("aaadfsjdlfkjsdlfkjsflkjsflksjlksdj" + distance)
        // }
        if (newPage === "next") {
            if (end <= listData.length) {
                if (end + (end - begin) > listData.length) {
                    console.log("dinh")
                    setBegin(begin + (end - begin));
                    setEnd(end + (listData.length - end))
                } else {
                    setBegin(begin + (end - begin));
                    setEnd(end + (end - begin))
                }
            } else {

            }
        } else if (newPage === "pre") {
            console.log(distance+"distance")
            console.log(end-begin+"begin")

            if (begin >= 0) {
                if (end - begin < distance) {

                    setBegin(begin- distance );
                    setEnd(end-(distance-(end-begin)) )
                } else if(end - begin == distance){
                    setBegin(begin - distance);
                    setEnd(end - distance)
                }
            }
        }
        console.log(begin, end)
    }
    console.log("real", listData)
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
                    <p className="product__search">1-60 of {listData.length} Results</p>
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
                            postList.map(data => <CartProduct key={data.id} data={data}/>)

                        }

                        <Pagination begin={begin} end={end} totalRow={listData.length} onPageChange={handlePageChange}
                        />
                    </div>

                </div>


            </div>
        </>

    )
}

export default memo(ShowProduct);