import '../asset/css/home.css'
function Header() {
    const listBrand = ["Calvin", "Givenchy", "Burberry", "Burberry", "Burberry", "Burberry", "Burberry", "Burberry"];
    return (
        <>
            <div className="container-fluid header">
                <div className='row'>
                    <a className="logo col-sm-2" href="">
                        <img src="https://img.fragrancex.com/images/assets/logo/fragrancex_logo.svg?v=3" title="Perfume" width="130" height="35" />

                    </a>
                    <div className="search col-sm-6">
                        <form className='d-flex form--search '>
                            <input type="text"
                                   className="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter your code" />
                            <button type="submit" className="btn">
                                <img src="https://img.fragrancex.com/images/assets/ui/search-square-icon.svg" title="search" />

                            </button>

                        </form>

                    </div>
                    <div className="express col-sm-3 text-center">
                        <a href="#" className="btn btn-lg text-light h1">Sign In</a>
                        <a href="#" className="btn btn-lg text-light h6">Help</a>
                        <select name="unit" id="current_unit" className="form-select-sm">
                            <option value="VND" >VND</option>
                            <option value="USA">USA</option>
                            <option value="RUB">RUB</option>
                            <option value="MYR">MYR</option>
                            <option value="JPY">JPY</option>
                            <option value="TTD">TTD</option>
                        </select>

                    </div>
                    <div className='cart__shopping col-sm-1'>
                        <div className='pop d-flex '>
                            <a className="cart d-flex" href='/cart' >
                                <div className='count text-light'>1</div>
                                <span className="text-light h4">Cart</span>
                            </a>
                        </div>

                    </div>



                </div>
                <nav className="navbar navbar-expand-sm ">
                    <div className="header__second">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/product">Women's Perfume</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="/product">Men's Cologne</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Brands</a>
                                <div className="menu_show">
                                    {/* {listBrand.length > 4 ? listBrand.map((product,index) =><div className="d-flex"><li className="text-black"><a href="#">{product}</a></li></div>):"aaa"} */}


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