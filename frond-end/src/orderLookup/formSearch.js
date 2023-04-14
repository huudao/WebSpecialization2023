export function FormSearch() {
    return (
        <>
            <div className="container">
                <form className="mx-auto my-4" style={{width: "500px"}}>
                    <p className="h3 text-center">Check user</p>
                    <label className="form-label" htmlFor="phone">Số điện thoại</label><br></br>
                    <input className="w-100 form-control" type="phone" placeholder="Enter number phone" id="phone"/>
                    <div className="w-100 text-center">
                        <button className="btn btn-primary m-2 w-25" type="submit"><a>Check</a></button>
                    </div>
                </form>
            </div>

        </>
    )
}