export function Menu() {
    return (
        <>
            <a className="btn btn__menu" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
               aria-controls="offcanvasExample">
                <p></p>
                <p></p>
                <p></p>

            </a>

            <div className="offcanvas offcanvas-start w-25" tabIndex="-1" id="offcanvasExample"
                 aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <hr></hr>
                    <ul className="list-group">
                        <li className="list-group-item "><a href="/">Perfume</a></li>
                        <li className="list-group-item"><a href="/login">Sign in</a></li>
                        <li className="list-group-item"><a href="/order">Order lookup</a></li>
                    </ul>
                </div>
            </div>
        </>

    )
}