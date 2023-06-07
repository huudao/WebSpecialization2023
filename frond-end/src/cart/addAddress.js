import {NavLink} from "react-router-dom";
import {useContext, useEffect} from "react";
import {addAddress} from "../feature/address";
import {AddressContext} from "../context/addressContext"
import $ from 'jquery'

export function AddAddress() {
    const {setShowList} = useContext(AddressContext);

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
    function handlerClose(){
        setShowList(true)

    }
    function handlerCreate(e) {
        e.preventDefault()
        const name = $("#username").val();
        const phone = $("#phone").val();
        const city = $("#city").val();
        const district = $("#district").val();
        const guild = $("#ward").val();
        const special = $("#special").val();
        console.log(name, phone, city, district, guild, special)
        addAddress(name, phone, city, district, guild, special)
            .then((res) => {
                setShowList(true)
                console.log("success");
            }).catch(err => console.log(err))
    }

    return (
        <>

            <div className="add_address container bg-light w-75  navbar-nav-scroll font-monospace">
                <div className="w-100 text-end">
                    <button className="btn  btn-danger m-3" onClick={handlerClose}>x</button>
                </div>
                <div className="form__detail d-flex justify-content-center align-items-center ">
                    <div className="content text-center">
                        <p className="h1 mt-2 mb-4 text-uppercase">Add address</p>
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