import {useEffect, useState} from "react";
import {getAllBrand, getAllProduct, getAllUser} from "../feature/admin";
import {UserShow} from "./userShow";
import {NavLink} from "react-router-dom";
import {BrandShow} from "./brandShow";

function ManagerBrand() {
    const [listBrand, setListBrand] = useState([])
    useEffect(() => {
        getAllBrand().then(res => {
                setListBrand(res)

            }
        )

    }, [listBrand])
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
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            {/*<th className="" scope="col" style={{width:"10px"}}>Password</th>*/}
                                            <th scope="col">Description</th>
                                            <th scope="col">Create Date</th>
                                            <th scope="col">Update Date</th>
                                            <th scope="col"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {listBrand.map((data,index) => <BrandShow data={data} count={index}/>)}
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

export default ManagerBrand
;