import '../asset/css/product.css'
import '../asset/css/home.css'
import BarFilter from "../component/filter";
import CartProduct from "../component/cartProduct";
import {useContext,memo} from "react";
import {ProductContext} from "../context/productContext";
function ShowProduct() {

    const {listData,setUrlNew}=useContext(ProductContext);
    console.log("real",listData)
    // function  handler(id){
    //     setUrlNew(id);
    //     console.log( + "url is cart test")
    //
    // }
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
                    <div className="filter col-sm-2" >
                        <BarFilter></BarFilter>
                    </div >
                    <div className="show col-sm-10 row  overflow-hidden position-relative flex-wrap">
                        {
                            listData.map(data=> <CartProduct key={data.id} data={data}  />)

                        }

                        <nav aria-label="Page navigation example ">
                            <ul className="pagination justify-content-center" >
                                <li className="page-item"><a className="page-link" href="#" >Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>


            </div>
        </>

    )
}

export default memo(ShowProduct);