import {isDisabled} from "@testing-library/user-event/dist/utils";
import {useEffect, useState} from "react";

export function ShowAddress(props) {
    const{username,specificAddress,phone,city,ward,district,isDefault} =props.data;
    const [isDisable,setIsDisable]= useState(true)
    useEffect(()=>{
        if(isDefault===1) setIsDisable(true)
        else setIsDisable(false)
    })

    return (
        <>
            <div className="d-flex">
                <div className=" w-75">
                    <p>{username} | <small>{phone}</small></p>
                    <p>{specificAddress} phường {ward}, quận {district}, thành phố {city}</p>
                </div>
                <div className=" w-25 text-center m-auto">
                    <button className="btn btn-warning" disabled={isDisable}>Mặc định</button>
                </div>
            </div>
            <hr/>

        </>
    )
}