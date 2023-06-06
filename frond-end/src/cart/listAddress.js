import {AddAddress} from "./addAddress";
import {useContext, useEffect, useState} from "react";
import {ShowAddress} from "./showAddress";
import {AddressContext} from "../context/addressContext";
import {order} from "../feature/cart";

export function ListAddress(props) {
    const {showList} = useContext(AddressContext)
    const [isShow, setIsShow] = useState(true)
    const arrAddress = props.data
    useEffect(() => {
        setIsShow(showList)
    }, [isShow])

    function handlerAdd() {
        setIsShow(false);
        console.log(arrAddress)
    }
    function handlerCheckout(e){
        console.log("aaaa")
        // e.preventDefault();
        for(var data in arrAddress){
            if (data.isDefault===1){
                order(data.id).then(()=>{
                    console.log("success")
                })
            }
        }

    }
    return (
        <>
            {
                isShow === true
                    ? <>
                        <div className="container-fluid bg-info w-50 h-75  m-auto navbar-nav-scroll">
                            <div className="d-flex w-100  bd-highlight pt-2">
                                <h3 className="w-75">List address</h3>
                                <button className="btn btn-light w-25" onClick={handlerAdd}>ADD ADDRESS</button>
                            </div>
                            <hr/>
                            {arrAddress.map((data)=><ShowAddress data={data}/>) }

                            <button className="btn btn-primary" onClick={handlerCheckout}>Checkout</button>

                        </div>
                    </>
                    :
                    <>
                        <div className="w-100 h-100 ">
                            <AddAddress/>
                        </div>
                    </>
            }
        </>
    )
}