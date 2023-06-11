import {NavLink} from "react-router-dom";

export function Menu(props) {
    return (
        <>
            <a className="btn btn__menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
               aria-controls="offcanvasExample">
                <p></p>
                <p></p>
                <p></p>

            </a>

            <div className="offcanvas offcanvas-start "  style={{width:"250px"}} tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body ">
                    <hr></hr>
                    <ul className="ms-0 ps-1 text-light">
                        <li className="text-light"><NavLink className="nav-link text-decoration-none text-light fw-bold" to="/">Perfume</NavLink></li>
                        <li className="text-light pe-auto" style={{cursor:"pointer"}}><h5 className="text-decoration-none text-light fw-bold pe-auto" onClick={props.handleLogout}>{props.login}</h5></li>
                        <li className="text-light"><NavLink className="nav-link text-decoration-none text-light fw-bold"  to="/order">Order lookup</NavLink></li>
                    </ul>
                </div>
            </div>
        </>

    )
}