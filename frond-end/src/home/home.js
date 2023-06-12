import {NavLink} from "react-router-dom";
import {Brand} from "./brand";
import {useContext, useEffect, useState} from "react";
import {brands, latests} from "../feature/product";
import CartProduct from "../component/cartProduct";
import {ProductContext} from "../context/productContext";

function Home() {
    const {setListBrand}= useContext(ProductContext);
    const [brand, setBrand] = useState([]);
    const [latest, setLatest] = useState([]);

    const arrBrand= []
    useEffect(() => {
        brands().then(res => {
            // setListBrand(res)
            for( var i=0;i<6;i++){
                arrBrand.push(res[i])

            }
            setBrand(arrBrand)
            console.log(brand)
        })
        latests().then(res=>{
            setLatest(res)

        })

    },[brand,latest])
    return (
        <>
            <div className="container-fluid brands py-4">
                <div className="brands__title text-center">
                    <div className="h2 text-center">Top Fragrance Brands</div>
                    <NavLink to="/product" className=" ">View All Brands</NavLink>
                </div>
                <div className="brands__detail d-flex flex-wrap justify-content-center mx-5 my-5">
                    {
                        brand.map(data=><Brand data={data}/>)
                    }
                </div>
            </div>
            <div className="bestsaler container p-5">
                <div className="brands__title text-center">
                    <div className="h2 text-center">Best Saller</div>
                    <NavLink to="/product" className=" ">See All</NavLink>
                </div>

                <div className="bestsaler__product  row  overflow-hidden position-relative flex-nowrap ">


                    {latest.map(data=><CartProduct data={data}/>)}


                    <div className="button">
                        <button className="button__left   "><i className="fas fa-chevron-left "></i></button>
                        <button className="button__right  "><i className="fas fa-chevron-right"></i></button>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;