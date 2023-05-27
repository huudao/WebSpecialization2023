import '../asset/css/home.css'
import {useState} from "react";
import {Menu} from "./menu";
import {NavLink} from "react-router-dom";

function Header() {
    const [show, setShow] = useState(true);
    const listBrand = ["Calvin", "Givenchy", "Burberry", "Burberry", "Burberry", "Burberry", "Burberry", "Burberry"];
    const swap = () => {
        const a = document.getElementById("menu_show");
        return show ? (a.style.display = "block", setShow(false)) : (a.style.display = "none", setShow(true))

    }
    return (
        <>
            <div className="container-fluid header">
                <div className='row'>
                    <div className="col-sm-2 d-flex">
                        <Menu></Menu>
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
                        <NavLink to="/login" className="btn btn-lg text-light h1">Sign In</NavLink>
                        <NavLink to="/order" className="btn btn-lg text-light h6">Order Lookup</NavLink>
                        {/*<select name="unit" id="current_unit" className="form-select-sm">*/}
                        {/*    <option value="VND" >VND</option>*/}
                        {/*    <option value="USA">USA</option>*/}
                        {/*    <option value="RUB">RUB</option>*/}
                        {/*    <option value="MYR">MYR</option>*/}
                        {/*    <option value="JPY">JPY</option>*/}
                        {/*    <option value="TTD">TTD</option>*/}
                        {/*</select>*/}

                    </div>
                    <div className='cart__shopping col-sm-1'>
                        <div className='pop d-flex '>
                            <a className="cart d-flex" href='/cart'>
                                <div className='count text-light'>1</div>
                                <span className="text-light h4">Cart</span>
                            </a>
                        </div>

                    </div>


                </div>
                <nav className="navbar navbar-expand-sm ">
                    <div className="header__second w-100">
                        <ul className="navbar-nav row">
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/product">Women's Perfume</NavLink>
                            </li>
                            <li className="nav-item col-sm-2">
                                <NavLink className="nav-link text-light" to="/product">Men's Cologne</NavLink>
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