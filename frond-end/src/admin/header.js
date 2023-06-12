import {Menu} from "../component/menu";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCookie} from "../API/getToken";

export  function Header(){
    let navigate = useNavigate();
    const {user} = useSelector((state) => state);
    const [login, setLogin] = useState("Login")
    const [show, setShow] = useState(true);
    const swap = () => {
        const a = document.getElementById("menu_show");
        return show ? (a.style.display = "block", setShow(false)) : (a.style.display = "none", setShow(true))

    }
    const token = getCookie("token");
    console.log(token)
    useEffect(() => {

        if (token !== "") {
            setLogin("Logout")
        } else {
            setLogin("Login")
        }
    }, [login])
    function handleLogout() {
        console.log("test log out")
        console.log(login, "login")
        const log = document.getElementById("log").value
        const token = getCookie("token");
        if (login === "Logout") {
            document.cookie = `token=""; expires= Thu, 01 Jan 1970 00:00:00 UTC`
            console.log("logout success")
            setLogin("Login")
            // window.location.reload()
        } 
        if (login === "Login") {
            setLogin("Logout")
            navigate("/login")

        }
    }
    return (
        <>
            <div className="container-fluid header">
                <div className='row'>
                    <div className="col-sm-10 d-flex">
                        <Menu login={login} handleLogout={handleLogout}></Menu>
                        <NavLink className="logo " to="/">
                            <img src="https://img.fragrancex.com/images/assets/logo/fragrancex_logo.svg?v=3"
                                 title="Perfume"
                                 width="130" height="35"/>

                        </NavLink>
                    </div>

                    <div className="express col-sm-2 text-end">
                        <p className="btn btn-lg text-light h1" id="log" onClick={handleLogout}>{login}</p>
                    </div>



                </div>
                <nav className="navbar navbar-expand-sm ">
                    <div className="header__second w-100">
                        <ul className="navbar-nav row">
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/management/product">Manager Product</NavLink>
                            </li>
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/management/user">Manager User</NavLink>
                            </li>
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/management/order">Manager Order</NavLink>
                            </li>
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/management/brand">Manager Brand</NavLink>
                            </li>


                        </ul>

                    </div>
                </nav>

            </div>

        </>

    )
}