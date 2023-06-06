import {useEffect, useState} from "react";
import {getAllOrder, getAllProduct, getAllUser} from "../feature/admin";
import {OrderShow} from "./orderShow";
import {NavLink} from "react-router-dom";

function ManagerProduct() {
    const [listOrder, setListOrder] = useState([])
    useEffect(() => {
        getAllOrder().then(res => {
                setListOrder(res)

            }
        )

    }, [listOrder])
    return (
        <>
            <section className="contact-form">
                <div className="container">
                    <div className="row">
                        <div id="manager " className="h-100">
                            <NavLink to="/management/user" className="btn btn-primary h-100"
                                    >Quản lý người dùng</NavLink>
                            <NavLink to="/management/product" className="btn btn-primary">Quản lý sản phẩm</NavLink>
                            <NavLink to="/management/order" className="btn btn-primary">Quản lý đơn hàng</NavLink>

                        </div>
                        <div id="content">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h2>Quán lý người dùng</h2>
                                            </div>
                                            <div className="col-xs-6">
                                                <a href="#addEmployeeModal" className="btn btn-success"
                                                   data-toggle="modal"><i className="material-icons"></i> <span>Thêm người dùng</span></a>
                                                <a href="#deleteEmployeeModal" className="btn btn-danger"
                                                   data-toggle="modal"><i className="material-icons"></i> <span>Xóa người dùng</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                        <tr>
                                            <th>
                                            </th>
                                            <th>Id</th>
                                            <th>userAddress</th>
                                            <th>discountPercentage</th>
                                            <th>totalPrice</th>
                                            <th>status</th>
                                            <th>shipped</th>
                                            <th>trackingNumber</th>
                                            <th>orderDetailList</th>
                                            <th>date</th>

                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {listOrder.map((data) => <OrderShow data={data}/>)}
                                        </tbody>
                                    </table>

                                    {/* Add Modal HTML, Nút add ở phía trên */}
                                    <div id="addEmployeeModal" className="modal fade">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <form>
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Thêm Vé</h4>
                                                        <button type="button" className="close" data-dismiss="modal"
                                                                aria-hidden="true">×
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="modal-body">{/*lúc test nhớ để hết sang cmt, chức năng thêm vẫn chưa ổn*/}
                                                        <div className="form-group">
                                                            <label>MÃ CHUYẾN BAY</label>
                                                            <input type="text" id="FlightName" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ THUẾ</label>
                                                            <input type="text" id="TaxID" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ MB</label>
                                                            <input type="text" id="FlightID" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ HÃNG VÉ</label>
                                                            <input type="text" id="FlightID" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>ĐIỂM ĐI</label>
                                                            <input type="text" id="DeparturePlace"
                                                                   className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>SÂN BAY ĐI</label>
                                                            <input type="text" id="ArrivalPlace"
                                                                   className="form-control" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>ĐIỂM ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>SÂN BAY ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>NGÀY ĐI</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>NGÀY ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>GIỜ ĐI</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>GIỜ ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>NGÀY NHẬP</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <input type="button" className="btn btn-default"
                                                               data-dismiss="modal"
                                                               defaultValue="Hủy"/>
                                                        <input type="submit" id="addTicket" className="btn btn-success"
                                                               defaultValue="Thêm"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Edit Modal HTML, Nút edit ở phía bên phải, cùng hàng với sản phẩn */}
                                    <div id="editEmployeeModal" className="modal fade">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <form>
                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Chỉnh sửa chuyến bay</h4>
                                                        <button type="button" className="close" data-dismiss="modal"
                                                                aria-hidden="true">×
                                                        </button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label>MÃ CHUYẾN BAY</label>
                                                            <input type="text" id="FlightName" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ THUẾ</label>
                                                            <input type="text" id="TaxID" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ MB</label>
                                                            <input type="text" id="FlightID" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ HÃNG VÉ</label>
                                                            <input type="text" id="FlightID" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>ĐIỂM ĐI</label>
                                                            <input type="text" id="DeparturePlace"
                                                                   className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>SÂN BAY ĐI</label>
                                                            <input type="text" id="ArrivalPlace"
                                                                   className="form-control" required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>ĐIỂM ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>SÂN BAY ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>NGÀY ĐI</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>NGÀY ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>GIỜ ĐI</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>GIỜ ĐẾN</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>NGÀY NHẬP</label>
                                                            <input type="text" id="Price" className="form-control"
                                                                   required/>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <input type="button" className="btn btn-default"
                                                               data-dismiss="modal"
                                                               defaultValue="Hủy"/>
                                                        <input type="submit" className="btn btn-info"
                                                               defaultValue="Lưu"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
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

export default ManagerProduct;