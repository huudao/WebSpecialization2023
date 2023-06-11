import '../asset/css/account.css'
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {forgotPass, loginUser} from "../feature/user";

import {NavLink, useNavigate} from "react-router-dom"
import {unwrapResult} from "@reduxjs/toolkit";
import {handlerErrol} from "../component/handlerErrol";


export function ForgotPass() {
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [path, setPath] = useState("");
    const [errol, setErrol] = useState("");


    function handler(event) {

    }



    function handlerOnSubmit(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        dispatch(forgotPass({email}))
            .then(unwrapResult)
            .then(() => navigate("/login"))
    }

    return (
        <>
            <div className="form__detail d-flex justify-content-center align-items-center ">
                <div className="content text-center">
                    <p className="h1 mx-0 my-5 text-uppercase">Forgot password</p>
                    <form onSubmit={handlerOnSubmit}>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="email" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "erremail")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">Email</label>
                            <p className="errol" id="erremail"></p>
                        </div>


                        {/*-- forgot button --*/}
                        <button type="submit" className="btn btn-primary btn-block mb-4">Forgot password</button>


                    </form>

                </div>

            </div>
        </>
    )
}