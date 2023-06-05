import '../asset/css/account.css'
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {forgotPass, loginUser} from "../feature/user";

import {NavLink, useNavigate} from "react-router-dom"
import {unwrapResult} from "@reduxjs/toolkit";


export function ForgotPass() {
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [path, setPath] = useState("");
    const [errol, setErrol] = useState("");


    function handler(event) {

    }

    function handlerOnchange(data, id) {

        try {
            if (data.trim() === "") throw "* Enter data";
            if (data.trim() !== "") throw "";


        } catch (event) {
            document.getElementById(id).innerText = event;

        }
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
                    <p className="h1 m-5 text-uppercase">Login</p>
                    <form onSubmit={handlerOnSubmit}>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="email" className="form-control" onChange={(e) => {
                                handlerOnchange(e.target.value, "erremail")
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