import '../asset/css/account.css'
export function Registry(){
    return(
        <>
            <div className="form__detail  d-flex justify-content-center">
                <div className="content text-center">
                    <p className="h1 m-5 text-uppercase">Register</p>
                    <form>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="email" id="form2Example1" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example1">User name</label>
                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="form2Example2" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example2">Address Email</label>
                        </div>

                        {/*-- Password input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="form2Example2" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="form2Example2" className="form-control"/>
                            <label className="form-label" htmlFor="form2Example2">Repeat password</label>
                        </div>


                        {/*-- 2 column grid layout for inline styling --*/}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/*-- Checkbox --*/}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="form2Example31"
                                           checked/>
                                    <label className="form-check-label" htmlFor="form2Example31"> I have read and agree to the term</label>
                                </div>
                            </div>


                        </div>

                        {/*-- Submit button --*/}
                        <button type="button" className="btn btn-primary btn-block mb-4">Registry</button>

                        {/*-- Register buttons --*/}
                        <div className="text-center">
                            <p>You are a member? <a href="/login">Login</a></p>
                            {/*<p>or sign up with:</p>*/}
                            {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                            {/*    <i className="fab fa-facebook-f"></i>*/}
                            {/*</button>*/}

                            {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                            {/*    <i className="fab fa-google"></i>*/}
                            {/*</button>*/}

                            {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                            {/*    <i className="fab fa-twitter"></i>*/}
                            {/*</button>*/}

                            {/*<button type="button" className="btn btn-link btn-floating mx-1">*/}
                            {/*    <i className="fab fa-github"></i>*/}
                            {/*</button>*/}
                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}