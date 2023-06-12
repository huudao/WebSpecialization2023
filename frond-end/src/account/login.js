import '../asset/css/account.css'
import $ from "jquery"
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {forgotPass, loginUser} from "../feature/user";

import {NavLink, useNavigate} from "react-router-dom"
import {unwrapResult} from "@reduxjs/toolkit";
import {Slide, toast, ToastContainer} from "react-toastify";
import jwt_decode from "jwt-decode"
import {getCookie} from "../API/getToken";
import {handlerErrol} from "../component/handlerErrol";


export function Login() {
    const {user} = useSelector((state) => state);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [path, setPath] = useState("");
    const [errol, setErrol] = useState("");

    const decodeJWT = (token) => {
        const decodedToken = jwt_decode(token)
        const {roles} = decodedToken;
        return {roles}
    }

    useEffect(() => {
        try {
            const token = getCookie("token");
            console.log(token,"cookie")

            var decodedHeader = jwt_decode(token, {header: true});
            console.log(decodedHeader);
            console.log(token, "token")
            const {roles} = decodeJWT(token);
            console.log({roles}, "sdfsdfsd")
            if (roles[0]==="ROLE_USER")
                navigate("/")
            else navigate("/management/product");
        } catch (e) {
            console.log(e)
        }
        {

        }
    }, [user])

    function handlerOnSubmit(e) {
        e.preventDefault();
        // const username = document.getElementById("username").value;
        const username=$("#username").val()
        // const password = document.getElementById("password").value;
        const password=$("#password").val()

        dispatch(loginUser({username, password}))
            .then(unwrapResult)
            .then(res => {

                // console.lg(res.data.role_id, "user")
                // if (res.data.role_id === 1) {
                //     // navigate("/");
                // } else {
                //     navigate("/managerment");
                //
                // }

            }).then(() => {
            // const token = localStorage.getItem("token");
            // const {roles} = decodeJWT(token);
            // console.log(roles.json, "role")
        })
            .catch(err => {
                toast.error(`🦄 ${err.message}!`, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            });

        function handlerForgotPass(e) {
            dispatch(forgotPass())
        }


    }

    return (
        <>
            <div className="form__detail d-flex justify-content-center align-items-center ">
                <div className="content text-center">
                    <p className="h1 m-5 text-uppercase">Login</p>
                    <form onSubmit={handlerOnSubmit}>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="username" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "anounceusername")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">User name</label>
                            <p className="errol" id="anounceusername">* Enter data</p>
                        </div>

                        {/*-- Password input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="password" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "anouncepassword")
                            }}/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <p className="errol" id="anouncepassword">* Enter data</p>

                        </div>

                        {/*-- 2 column grid layout for inline styling --*/}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/*-- Checkbox --*/}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31"
                                           checked/>
                                    <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                </div>
                            </div>

                            <div className="col">
                                {/*-- Simple link --*/}
                                <a href="/forgot_pass">Forgot password?</a>
                            </div>
                        </div>

                        {/*-- Submit button --*/}
                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        {/*<button type="submit" className="btn btn-primary btn-block mb-4"><NavLink to={path}>Sign in</NavLink></button>*/}

                        {/*-- Register buttons --*/}
                        <div className="text-center">
                            <p>Not a member? <NavLink to="/register">Register</NavLink></p>

                        </div>
                    </form>

                </div>

            </div>
            <ToastContainer position="top-right"
                            autoClose={2000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            draggable
                            pauseOnHover
                            transition={Slide}
                            theme="light"/>
        </>
    )
}