import '../asset/css/account.css'
import {NavLink, useNavigate} from "react-router-dom";
import {loginUser, registerUser} from "../feature/user";
import {useDispatch} from "react-redux";
import {unwrapResult} from "@reduxjs/toolkit";
import {ToastContainer, toast, Slide} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {handlerErrol} from "../component/handlerErrol";



export function Register() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const notify = (result) => toast(`${result}!`);

    async function handlerSubmit(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const email = document.getElementById("email").value;
        const lastName = document.getElementById("lastname").value;
        const firstName = document.getElementById("firstname").value;
        const phone = document.getElementById("phone").value;
        dispatch(registerUser({username, password, email, firstName, lastName, telephone: phone}))
            .then(unwrapResult)
            .then(res => {
                if (res.status === 200) {
                    toast.success('🦄 Success!', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .then(() => {
                setTimeout( ()=>{navigate("/login")},2000)
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


    }


    return (


        <>
            <div className="form__detail  d-flex justify-content-center">
                <div className="content text-center">
                    <p className="h1 m-5 text-uppercase">Register</p>
                    <form onSubmit={handlerSubmit}>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="username" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "erruser")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">User name</label>
                            <p className="errol" id="erruser">* Enter data</p>
                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="lastname" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "errlname")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">Last name</label>
                            <p className="errol" id="errlname">* Enter data</p>
                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="firstname" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "errfName")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">First name</label>
                            <p className="errol" id="errfName">* Enter data</p>
                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="phone" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "errphone")
                            }}/>
                            <label className="form-label" htmlFor="form2Example1">Phone</label>
                            <p className="errol" id="errphone">* Enter data</p>
                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="email" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "erremail")
                            }}/>
                            <label className="form-label" htmlFor="form2Example2">Address Email</label>
                            <p className="errol" id="erremail">* Enter data</p>

                        </div>

                        {/*-- Password input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="password" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "errpass");
                            }}/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <p className="errol" id="errpass">* Enter data</p>

                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="repassword" className="form-control" onChange={(e) => {
                                handlerErrol(e.target.value, "errrepass");
                            }}/>
                            <label className="form-label" htmlFor="form2Example2">Repeat password</label>
                            <p className="errol" id="errrepass">* Enter data</p>

                        </div>


                        {/*-- 2 column grid layout for inline styling --*/}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/*-- Checkbox --*/}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31"
                                           checked/>
                                    <label className="form-check-label" htmlFor="form2Example31"> I have read and agree
                                        to the term</label>
                                </div>
                            </div>

                            <ToastContainer/>

                        </div>

                        {/*-- Submit button --*/}
                        <div>
                            <button type="submit" className="btn btn-primary btn-block mb-4" onSubmit={notify}>Registry
                            </button>
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
                        </div>

                        {/*-- Register buttons --*/}
                        <div className="text-center">
                            <p>You are a member? <NavLink to="/login">Login</NavLink></p>

                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}