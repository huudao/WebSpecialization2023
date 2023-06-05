import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {addAddress} from "../feature/address";

export function AddAddress() {

    function handlerOnSubmit() {

    }

    function handlerErrol(data, id) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var phoneformat = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

        try {
            if (data.trim() === "") throw "* Enter data";
            else {
                if (id === "erremail") {
                    if (!data.match(mailformat)) throw "* Not invalid"
                    else throw "";
                } else if (id === "errrepass") {
                    console.log(data)
                    if (data !== document.getElementById("password").value) throw "* Not equal password"

                } else if (id === "errphone") {
                    if (!data.match(phoneformat)) throw "* Not invalid"
                    else throw "";
                }
            }
            throw "";

        } catch (event) {
            document.getElementById(id).innerText = event;

        }
    }

    function handlerCreate(e) {
        e.preventDefault()
        const name = document.getElementById("username").value;
        const phone = document.getElementById("phone").value;
        const city = document.getElementById("city").value;
        const district = document.getElementById("district").value;
        const guild = document.getElementById("ward").value;
        const special = document.getElementById("special").value;
        console.log(name, phone, city, district, guild, special)
        addAddress(name, phone, city, district,guild, special)
            .then((res) => {
                console.log("success");
                console.log(res)
            })


    }

    return (
        <>
            <div className="container bg-light w-100 h-100 navbar-nav-scroll ">
                <div className="form__detail d-flex justify-content-center align-items-center ">
                    <div className="content text-center">
                        <p className="h1 m-5 text-uppercase">Add address</p>
                        <form onSubmit={handlerOnSubmit}>
                            {/*-- name input --*/}
                            <div className="form-outline mb-4 position-relative">
                                <input type="text" id="username" className="form-control" onChange={(e) => {
                                    handlerErrol(e.target.value, "anounceusername")
                                }}/>
                                <label className="form-label" htmlFor="form2Example1">User name</label>
                                <p className="errol" id="anounceusername"></p>
                            </div>

                            {/*-- Phone input --*/}
                            <div className="form-outline mb-4 position-relative">
                                <input type="text" id="phone" className="form-control" onChange={(e) => {
                                    handlerErrol(e.target.value, "errphone")
                                }}/>
                                <label className="form-label" htmlFor="form2Example2">Phone</label>
                                <p className="errol" id="errphone"></p>

                            </div>
                            {/*-- City input --*/}
                            <div className="form-outline mb-4 position-relative">
                                <input type="text" id="city" className="form-control" onChange={(e) => {
                                    handlerErrol(e.target.value, "errcity")
                                }}/>
                                <label className="form-label" htmlFor="form2Example2">City</label>
                                <p className="errol" id="errcity"></p>

                            </div>
                            {/*-- district input --*/}
                            <div className="form-outline mb-4 position-relative">
                                <input type="text" id="district" className="form-control" onChange={(e) => {
                                    handlerErrol(e.target.value, "errdistrict")
                                }}/>
                                <label className="form-label" htmlFor="form2Example2">District</label>
                                <p className="errol" id="errdistrict"></p>

                            </div>
                            {/*-- ward input --*/}
                            <div className="form-outline mb-4 position-relative">
                                <input type="text" id="ward" className="form-control" onChange={(e) => {
                                    handlerErrol(e.target.value, "errward")
                                }}/>
                                <label className="form-label" htmlFor="form2Example2">Ward</label>
                                <p className="errol" id="errward"></p>

                            </div>

                            {/*-- specifi input --*/}
                            <div className="form-outline mb-4 position-relative">
                                <input type="text" id="special" className="form-control" onChange={(e) => {
                                    handlerErrol(e.target.value, "errspecial")
                                }}/>
                                <label className="form-label" htmlFor="form2Example2">Street</label>
                                <p className="errol" id="errspecial"></p>

                            </div>


                            {/*-- Submit button --*/}
                            <button type="submit" className="btn btn-primary btn-block mb-4"
                                    onClick={handlerCreate}>Create
                            </button>


                        </form>

                    </div>

                </div>
            </div>
        </>
    )
}