import '../asset/css/account.css'
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {forgotPass, loginUser} from "../feature/user";

import {NavLink, useNavigate} from "react-router-dom"
import {unwrapResult} from "@reduxjs/toolkit";


export function Login() {
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

    useEffect(() => {
        console.log(user.token, user)
        if (user.token) navigate("/")
    }, [user])

    function handlerOnSubmit(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        dispatch(loginUser({username, password}))
        .then(unwrapResult)
        .then(res => {
            if (res.status === 200) {
                 navigate("/");
            }

        });
        function handlerForgotPass(e){
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
                                handlerOnchange(e.target.value, "anounceusername")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">User name</label>
                            <p className="errol" id="anounceusername"></p>
                        </div>

                        {/*-- Password input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="password" className="form-control" onChange={(e) => {
                                handlerOnchange(e.target.value, "anouncepassword")
                            }}/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <p className="errol" id="anouncepassword"></p>

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
        </>
    )
}