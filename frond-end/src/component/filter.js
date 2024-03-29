import {brands} from "../feature/product";
import {useContext, useEffect, useState} from "react";
import {BrandName} from "../product/brandName";
import {ProductContext} from "../context/productContext";
import {NavLink} from "react-router-dom";

function BarFilter() {
    // const {listBrand} =useContext(ProductContext)
    const [listBrand, setListBrand] = useState([]);
    useEffect(()=>{
        brands().then(res => {
            setListBrand(res)
        })
    },[])




    return (
        <>
            <div className="filter ">
                <p>Filter By</p>
                <form>
                    <div className="gender form-check w-75">
                        <p>Gender</p>
                        <NavLink to="/product/sex?women" className="nav-link form-check">
                            {/*<input className="form-check-input" type="checkbox" value="" id="women"/>*/}
                            <button className="form-check-label btn btn-info w-100" htmlFor="women">Women</button>
                        </NavLink>
                        <NavLink to="/product/sex?men" className="nav-link form-check">
                            {/*<input className="form-check-input" type="checkbox" value="" id="man"/>*/}
                            <button className="form-check-label btn btn-info w-100" htmlFor="man">Man</button>
                        </NavLink>



                    </div>
                    <hr/>
                    <div className="brand form-check">
                        <p>Brand</p>
                        {listBrand.map(data=> <BrandName data={data} />)}

                    </div>
                    <hr/>
                    {/*<div className="price form-check">*/}
                    {/*    <p>Price</p>*/}
                    {/*    <div className="form-check">*/}
                    {/*        <input className="form-check-input" type="checkbox" value="" id="cheap"/>*/}
                    {/*        <label className="form-check-label" htmlFor="cheap"> Under đ 230,000</label>*/}
                    {/*    </div>*/}
                    {/*    <div className="form-check">*/}
                    {/*        <input className="form-check-input" type="checkbox" value="" id="normal"/>*/}
                    {/*        <label className="form-check-label" htmlFor="normal">đ 230,000 - 580,000</label>*/}
                    {/*    </div>*/}

                    {/*    <div className="form-check">*/}
                    {/*        <input className="form-check-input" type="checkbox" value="" id="high"/>*/}
                    {/*        <label className="form-check-label" htmlFor="high">đ 580,000 - 1,200,000</label>*/}
                    {/*    </div>*/}
                    {/*    <div className="form-check">*/}
                    {/*        <input className="form-check-input" type="checkbox" value="" id="very_high"/>*/}
                    {/*        <label className="form-check-label" htmlFor="very_high">đ 1,200,000+</label>*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                    {/*<hr/>*/}
                    {/*<div className="stock form-check">*/}
                    {/*    <p>In Stock</p>*/}
                    {/*    <div className="form-check">*/}
                    {/*        <input className="form-check-input" type="checkbox" value="" id="in_stock"/>*/}
                    {/*        <label className="form-check-label" htmlFor="in_stock"> In stock only</label>*/}
                    {/*    </div>*/}


                    {/*</div>*/}
                </form>

            </div>
        </>
    )
}

export default BarFilter;