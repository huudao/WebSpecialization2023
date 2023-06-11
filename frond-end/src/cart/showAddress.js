import {useContext, useEffect, useState} from "react";
import {order} from "../feature/cart";
import $ from 'jquery'
import {AddressContext} from "../context/addressContext";

export function ShowAddress(props) {
    const {setShowCheckout} = useContext(AddressContext);
    const{id,username,specificAddress,phone,city,ward,district,isDefault} =props.data;
    const [isDisable,setIsDisable]= useState(true)
    useEffect(()=>{
        if(isDefault===1) setIsDisable(true)
        else setIsDisable(false)
    })
    function  handlerChoose(){
        console.log(id)
        order(id).then(res=>{
            window.show.reload()
        })
            setShowCheckout(false)
    }

    return (
        <>
            <hr/>
            <div className="d-flex" id="show__list">
                <div className=" w-75">
                    <p>{username} | <small>{phone}</small></p>
                    <p>{specificAddress} phường {ward}, quận {district}, thành phố {city}</p>
                </div>
                <div className=" w-25 text-center m-auto">
                    <button className="btn btn-warning choose__address" disabled={isDisable} onClick={handlerChoose}>Choose</button>
                </div>
            </div>


        </>
    )
}