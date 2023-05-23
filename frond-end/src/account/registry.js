import '../asset/css/account.css'

const account=[{name: "123",password: "123",email:"dfd@gmail.com"},
   ]

export function Registry(){
    function  handlerErrol(data,id){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        try{
            if(data.trim()==="" ) throw "* Enter data";
            else{
                if(id==="erremail"){
                    if(!data.match(mailformat)) throw "* Not invalid"
                    else throw "";
                }
                else if(id==="errrepass"){
                    if(data !==document.getElementById("repassword"))throw "* Not equal password"
                    else throw ""

                }


            } throw "";



        }
        catch (event){
            document.getElementById(id).innerText=event;

        }
    }
    function handlerClick(e){
        // e.preventDefault();
        // account.push("fdsds","sfdf","sdfd");
        // account.map((e)=> console.log(e));


        //test
        let myFirstPromise = new Promise((resolve, reject) => {
            // lấy dữ liệu trên mạng từ url
            const URL = 'https://ninja-it.com/data/sample.json';
            fetch(URL).then(response => {
                // thành công
                resolve(response); // hàm then sẽ nhận tham số response
            }).catch(error => {
                // thất bại
                reject(error); // hàm catch sẽ nhận tham số error
            });
        });

        myFirstPromise.then((response) => {
            console.log(response.statusText); // OK
            return response.text().then(function(text) {
                // hiển thị nội dung
                console.log(text);
            });
        }).catch(error => {
            // in ra lỗi
            console.error(error.toString());
        });
    }


    return(


        <>
            <div className="form__detail  d-flex justify-content-center">
                <div className="content text-center">
                    <p className="h1 m-5 text-uppercase">Register</p>
                    <form>
                        {/*-- Email input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="username" className="form-control" onChange={(e)=>{handlerErrol(e.target.value,"erruser")}}/>
                            <label className="form-label" htmlFor="form2Example1">User name</label>
                            <p className="errol" id="erruser"></p>
                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="text" id="email" className="form-control" onChange={(e)=>{handlerErrol(e.target.value,"erremail")}}/>
                            <label className="form-label" htmlFor="form2Example2">Address Email</label>
                            <p className="errol" id="erremail"></p>

                        </div>

                        {/*-- Password input --*/}
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="password" className="form-control" onChange={(e)=>{handlerErrol(e.target.value,"errpass");}}/>
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <p className="errol" id="errpass"></p>

                        </div>
                        <div className="form-outline mb-4 position-relative">
                            <input type="password" id="repassword" className="form-control" onChange={(e)=>{handlerErrol(e.target.value,"errrepass");}}/>
                            <label className="form-label" htmlFor="form2Example2">Repeat password</label>
                            <p className="errol" id="errrepass"></p>

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
                        <button type="button" className="btn btn-primary btn-block mb-4" onClick={handlerClick}>Registry</button>

                        {/*-- Register buttons --*/}
                        <div className="text-center">
                            <p>You are a member? <a href="/login">Login</a></p>

                        </div>
                    </form>

                </div>

            </div>
        </>
    )
}