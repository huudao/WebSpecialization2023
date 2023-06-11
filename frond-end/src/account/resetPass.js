import '../asset/css/account.css'
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {forgotPass, loginUser, resetPass} from "../feature/user";

import {NavLink, useNavigate} from "react-router-dom"
import {unwrapResult} from "@reduxjs/toolkit";
import {handlerErrol} from "../component/handlerErrol";


export function ResetPass() {
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [path, setPath] = useState("");
    const [errol, setErrol] = useState("");


    function handler(event) {

    }

    function handlerOnSubmit(e) {
        e.preventDefault();
        let param= window.location.href;
        const token = param.slice(52,)
        console.log(token,"param");
        const repass = document.getElementById("repass").value;
        console.log(repass);
        dispatch(resetPass({token,password:repass}))
            .then(unwrapResult)
            .then(() => navigate("/login"))
    }

    return (
        <>
            <div className="form__detail d-flex justify-content-center align-items-center ">
                <div className="content text-center">
                    <p className="h1 my-5 mx-0 text-uppercase">Reset password</p>
                    <form onSubmit={handlerOnSubmit}>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="repass" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "errrepass")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">Repassword</label>
                            <p className="errol" id="errrepass"></p>
                        </div>


                        {/*-- forgot button --*/}
                        <button type="submit" className="btn btn-primary btn-block mb-4">Reset password</button>


                    </form>

                </div>

            </div>
        </>
    )
}