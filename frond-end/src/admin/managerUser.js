import {useEffect, useState} from "react";
import {getAllProduct, getAllUser} from "../feature/admin";
import {UserShow} from "./userShow";
import {NavLink} from "react-router-dom";

function ManagerUser() {
    const [listUser, setListUser] = useState([])
    useEffect(() => {
        getAllUser().then(res => {
                setListUser(res)

            }
        )

    }, [listUser])
    return (
        <>
            <section className="">
                <div className="">
                    <div className="h-75 mb-5">
                        <div id="content">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h2>Manager User</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Id</th>
                                            <th scope="col">Avatar</th>
                                            <th scope="col">Name</th>
                                            {/*<th className="" scope="col" style={{width:"10px"}}>Password</th>*/}
                                            <th scope="col">Email</th>
                                            <th scope="col">Last name</th>
                                            <th scope="col">First name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Active</th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {listUser.map((data,index) => <UserShow data={data} count={index}/>)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManagerUser
;