import '../asset/css/home.css'
import {useEffect, useState} from "react";
import {Menu} from "./menu";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../feature/user";
import {useContext} from "react";
import {ProductContext} from "../context/productContext";
import {search} from "../feature/product";
import {getCookie} from "../API/getToken";

function Header() {
    const {setKey} = useContext(ProductContext);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const {user} = useSelector((state) => state);
    const [login, setLogin] = useState("Login")
    const [show, setShow] = useState(true);
    const swap = () => {
        const a = document.getElementById("menu_show");
        return show ? (a.style.display = "block", setShow(false)) : (a.style.display = "none", setShow(true))

    }
    const token = getCookie("token");
    const counts = localStorage.getItem("count");
    useEffect(() => {

        // console.log(token, "user");
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
        const token = localStorage.getItem("token");
        if (login === "Logout") {
            document.cookie = `token="aaaaa"; expires= Thu, 01 Jan 1970 00:00:00 UTC`
            setLogin("Login")
            window.location.reload()
        }
        if (login === "Login") {
            setLogin("Logout")
            navigate("/login")

        }
    }

    function handlerSearch(e) {
        e.preventDefault()
        const key = document.getElementById("search").value;
        setKey(key);
        navigate("/product")


        // search(key).then(res => console.log(res))

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
                        <form className='d-flex form--search ' onSubmit={handlerSearch}>
                            <input type="text"
                                   className="form-control" name="" id="search" aria-describedby="helpId"
                                   placeholder="Enter word"/>
                            <button  className="btn" style={{width: "39px", height: "39px"}}>
                                <img src="https://img.fragrancex.com/images/assets/ui/search-square-icon.svg"
                                     title="search"/>
                            </button>

                        </form>

                    </div>
                    <div className="express col-sm-3 text-end">
                        <p className="btn btn-lg text-light h1" id="log" onClick={handleLogout}>{login}</p>
                        {/*<NavLink to="/management/product" className="btn btn-lg text-light h6">Management</NavLink>*/}


                    </div>
                    <div className='cart__shopping col-sm-1'>
                        <div className='pop d-flex '>
                            <a className="cart d-flex" href='/cart'>
                                <div className='count text-light'>{counts}</div>
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


                        </ul>

                    </div>
                </nav>

            </div>

        </>

    )
}

export default Header;