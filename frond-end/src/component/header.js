import '../asset/css/home.css'
import {useEffect, useState} from "react";
import {Menu} from "./menu";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../feature/user";
import {useContext} from "react";
import {ProductContext} from "../context/productContext";
function Header() {
    const {count} = useContext(ProductContext);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const {user} = useSelector((state) => state);
    const [login, setLogin] = useState("Login")
    const [show, setShow] = useState(true);
    const swap = () => {
        const a = document.getElementById("menu_show");
        return show ? (a.style.display = "block", setShow(false)) : (a.style.display = "none", setShow(true))

    }
    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token, "user");
        if (token !== null) {
            setLogin("Logout")
        } else {
            setLogin("Login")
        }
    }, [login])

    function handleLogout() {
        console.log("test log out")
        console.log(login, "login")
        const log = document.getElementById("log").value
        const token = localStorage.getItem("token");
        if (login === "Logout") {
            localStorage.removeItem("token");
            setLogin("Login")
            window.location.reload()
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
                    <div className="col-sm-2 d-flex">
                        <Menu login={login} handleLogout={handleLogout}></Menu>
                        <NavLink className="logo " to="/">
                            <img src="https://img.fragrancex.com/images/assets/logo/fragrancex_logo.svg?v=3"
                                 title="Perfume"
                                 width="130" height="35"/>

                        </NavLink>
                    </div>
                    <div className="search col-sm-6">
                        <form className='d-flex form--search '>
                            <input type="text"
                                   className="form-control" name="" id="" aria-describedby="helpId"
                                   placeholder="Enter your code"/>
                            <button type="submit" className="btn" style={{width: "39px", height: "39px"}}>
                                <img src="https://img.fragrancex.com/images/assets/ui/search-square-icon.svg"
                                     title="search"/>

                            </button>

                        </form>

                    </div>
                    <div className="express col-sm-3 text-center">
                        <p className="btn btn-lg text-light h1" id="log" onClick={handleLogout}>{login}</p>
                        <NavLink to="/order" className="btn btn-lg text-light h6">Order Lookup</NavLink>


                    </div>
                    <div className='cart__shopping col-sm-1'>
                        <div className='pop d-flex '>
                            <a className="cart d-flex" href='/cart'>
                                <div className='count text-light'>0</div>
                                <span className="text-light h4">Cart</span>
                            </a>
                        </div>

                    </div>


                </div>
                <nav className="navbar navbar-expand-sm ">
                    <div className="header__second w-100">
                        <ul className="navbar-nav row">
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/product/sex?women">Women's
                                    Perfume</NavLink>
                            </li>
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/product/sex?men">Men's Cologne</NavLink>
                            </li>
                            <li className="nav-item ms-xl-2 col-sm-7">
                                <p className="nav-link text-light my-0 btn__brands" onClick={swap}>Brands</p>
                                <div className="menu_show w-75 position-relative " id="menu_show">
                                    <p className="h4 pt-2 ps-3">Most popular perfume brands</p>
                                    <div className="d-flex flex-wrap w-100  row ms-0">
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Dolce
                                            & Gabbana</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Coach</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Coach</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Coach</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Coach</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Dolce
                                            & Gabbana</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Dolce
                                            & Gabbana</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Yves
                                            Saint Laurent</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Yves
                                            Saint Laurent</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Yves
                                            Saint Laurent</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Yves
                                            Saint Laurent</NavLink>
                                        <NavLink to="#"
                                                 className="text-decoration-none text-black  col-sm-6 px-0 py-1 m-0 text-center">Yves
                                            Saint Laurent</NavLink>


                                    </div>
                                </div>

                            </li>

                        </ul>

                    </div>
                </nav>

            </div>

        </>

    )
}

export default Header;