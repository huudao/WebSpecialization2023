import {useEffect, useState} from "react";
import {OrderShow} from "./orderShow";
import {getAllOrder, getOrderByName} from "../feature/admin"
import $ from 'jquery'

function ManagerOrder() {
    const [listOrder, setListOrder] = useState([])
    useEffect(() => {
        getAllOrder().then(res =>
            setListOrder(res)
        )

    }, [listOrder])

    function handlerSearch(e) {
        e.preventDefault()
        const name = $("#search").val()
        getOrderByName(name).then(res => {
            setListOrder(res)

        })

    }

    return (
        <>
            <section className="contact-form mt-5">
                <div className="container-fluid">
                    <div className="row">

                        <div id="content">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title">
                                        <div className="row">
                                            <div className="">
                                                <h2>Manager Order</h2>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    {/*<button className="btn btn-success"*/}
                                                    {/*        data-toggle="modal"><i className="material-icons"></i>*/}
                                                    {/*    <span>Add order</span></button>*/}
                                                    {/*<button className="btn btn-danger"*/}
                                                    {/*        data-toggle="modal"><i className="material-icons"></i>*/}
                                                    {/*    <span>Delete order</span></button>*/}
                                                </div>
                                                <form className='d-flex form--search col-sm-3' onSubmit={handlerSearch}>
                                                    <input type="text"
                                                           className="form-control " name="" id="search"
                                                           aria-describedby="helpId"
                                                           placeholder="Enter word"/>
                                                    <button className="btn me-4"
                                                            style={{width: "39px", height: "39px"}}>
                                                        <img
                                                            src="https://img.fragrancex.com/images/assets/ui/search-square-icon.svg"
                                                            title="search"/>
                                                    </button>

                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>
                                            </th>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Discount</th>
                                            <th>Total Price</th>
                                            <th>Status</th>
                                            <th>Shipped</th>
                                            <th>Tracking</th>
                                            <th>date</th>

                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {listOrder.map((data,index) => <OrderShow key={data.id} data={data} count={index}/>)}
                                        </tbody>
                                    </table>
                                    {/*//detail*/}




                                    {/* Delete Modal HTML */}
                                    <div id="deleteEmployeeModal" className="modal fade">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <form>
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Xóa chuyến bay</h4>
                                                        <button type="button" className="close" data-dismiss="modal"
                                                                aria-hidden="true">×
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <p>Bạn có muốn xóa chuyến bay này không?</p>
                                                        <p className="text-warning"><small>Hành động này không thể hoàn
                                                            tác</small>
                                                        </p>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <input type="button" className="btn btn-default"
                                                               data-dismiss="modal"
                                                               defaultValue="Hủy"/>
                                                        <input type="submit" className="btn btn-danger"
                                                               defaultValue="Xóa"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ManagerOrder;