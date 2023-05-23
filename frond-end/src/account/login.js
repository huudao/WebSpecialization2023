import '../asset/css/account.css'
import {useState} from "react";

import {use} from "react-router-dom"

const account=[{name: "123",password: "123"},{name:"nhan",password:"nhan"}]


export function Login() {
    const [path,setPath]=useState("/");
    const[errol,setErrol]=useState("");


    function handler(event){
        event.preventDefault();

        const username= document.getElementById("username").value;
        const password= document.getElementById("password").value;
        account.map((acc)=>{
            if(acc.name===username.trim() && acc.password===password.trim()){
                console.log(acc.name +acc.password)
                setPath("/")
            }else{

                setPath("/login")
            }
        })
    }
    function  handlerOnchange(data,id){

        try{
            if(data.trim()==="" ) throw "* Enter data";
            if(data.trim()!=="" ) throw "";


        }
        catch (event){
            document.getElementById(id).innerText=event;

        }
    }
    function handlerOnSubmit(e){
        e.preventDefault();

    }
    return (
        <>
            <div className="form__detail d-flex justify-content-center align-items-center ">
                <div className="content text-center">
                    <p className="h1 m-5 text-uppercase">Login</p>
                    <form onSubmit={handlerOnSubmit}>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="email" id="username" className="form-control" onChange={(e)=>{handlerOnchange(e.target.value,"anounceusername")}}/>
                            <label className="form-label" htmlFor="form2Example1">User name</label>
                            <p className="errol" id="anounceusername"></p>
                        </div>

                        {/*-- Password input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="password" className="form-control" onChange={(e)=>{handlerOnchange(e.target.value,"anouncepassword")}}/>
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
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>

                        {/*-- Submit button --*/}
                        <a href={path} id="signin">
                            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handler}>Sign in</button>
                        </a>

                        {/*-- Register buttons --*/}
                        <div className="text-center">
                            <p>Not a member? <a href="/registry">Register</a></p>

                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}