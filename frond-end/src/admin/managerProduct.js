import {useEffect, useState} from "react";
import {getAllProduct} from "../feature/admin";
import {ProductShow} from "./productShow";
import {NavLink} from "react-router-dom";
import $ from "jquery"

function ManagerProduct() {
    const arrVariant = []
    const [isShow, setIsShow] = useState(false)
    // $("#addProduct").hide();
    // $("#tableShow").show();

    $(document).ready(() => {
        // $("#add").click(() => {
        //     $("#addProduct").show();
        //     $("#tableShow").hide();
        // })
        // $("#closeButton").click(() => {
        //     $("#addProduct").hide();
        //     $("#tableShow").show();
        //
        // })
    })


    const [showAdd, setShowAdd] = useState(false)
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        getAllProduct().then(res => {
                setListProduct(res)

            }
        )

    }, [listProduct])

    function handlerAdd() {
        console.log(isShow)
        setIsShow(true)
        console.log(isShow, "sfsdflkjsdflksjdflksdjlkf")

    }

    function handlerClose() {
        console.log(isShow)
        setIsShow(false)
        console.log(isShow, "sfsdflkjsdflksjdflksdjlkf")

    }

    function handlerAddVariant(e) {
        e.preventDefault()
        const img = $("#image").val()
        const discount = $("#discount").val()
        const stock = $("#stock").val()
        const price = $("#price").val()
        const size = $("#size").val()
        console.log(img,discount,stock,price,size)
        arrVariant.push({img,discount,stock,price,size})
        console.log(arrVariant);

    }

    return (
        <>
            <section className="contact-form ">
                <div className="container-fluid">
                    <div className="row">
                        <div id="content" className="mt-5">
                            <div className="table-responsive">
                                <div className="table-wrapper">
                                    <div className="table-title ">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <h2>Manager Product</h2>
                                            </div>
                                            <div className="col-xs-6">
                                                <button className="btn btn-success" id="add" data-toggle="modal"
                                                        onClick={handlerAdd}>
                                                    <i className="fas fa-plus-circle"></i>
                                                    <span>Add product</span>
                                                </button>
                                                <button className="btn btn-danger" data-toggle="modal">
                                                    <i className="fas fa-minus-circle"></i>
                                                    <span>Delete product</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {isShow === false &&
                                    <>
                                        <table className="table table-striped table-hover w-100 position-relative"
                                               id="tableShow">
                                            <thead>
                                            <tr>
                                                <th>
                                                </th>
                                                <th>Id</th>
                                                <th>Id variant</th>
                                                <th className="w-25">Name</th>
                                                <th>Brand</th>
                                                <th>Size</th>
                                                <th>Sell</th>
                                                <th>Price</th>
                                                <th>Discount</th>
                                                <th>Stock</th>
                                                <th>Image</th>
                                                <th>Rating</th>
                                                <th></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {listProduct.map((data) => <ProductShow data={data}/>)}
                                            </tbody>
                                        </table>
                                    </>
                                    }

                                    {/* Add Modal HTML, Nút add ở phía trên */}
                                    {isShow === true &&
                                    <>
                                        <div id="addProduct " className="d-flex justify-content-center font-monospace">
                                            <div className="modal-dialog w-50">
                                                <div className="modal-content">
                                                    <form>
                                                        <div className="modal-header mb-4">
                                                            <h4 className="modal-title">Add product</h4>
                                                            <button type="button" className="close btn btn-danger"
                                                                    id="closeButton"
                                                                    data-dismiss="modal"
                                                                    aria-hidden="true" onClick={handlerClose}>×
                                                            </button>
                                                        </div>
                                                        <div
                                                            className="modal-body ">{/*lúc test nhớ để hết sang cmt, chức năng thêm vẫn chưa ổn*/}
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="username"
                                                                       className="form-control"
                                                                       onChange={(e) => {
                                                                           // handlerOnchange(e.target.value, "anounceusername")
                                                                       }}/>
                                                                <label className="form-label" htmlFor="form2Example1">Name
                                                                    product</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="username"
                                                                       className="form-control"
                                                                       onChange={(e) => {
                                                                           // handlerOnchange(e.target.value, "anounceusername")
                                                                       }}/>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Brand</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="username"
                                                                       className="form-control"
                                                                       onChange={(e) => {
                                                                           // handlerOnchange(e.target.value, "anounceusername")
                                                                       }}/>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Sex</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="username"
                                                                       className="form-control"
                                                                       onChange={(e) => {
                                                                           // handlerOnchange(e.target.value, "anounceusername")
                                                                       }}/>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Descript</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="username"
                                                                       className="form-control"
                                                                       onChange={(e) => {
                                                                           // handlerOnchange(e.target.value, "anounceusername")
                                                                       }}/>
                                                                <label className="form-label" htmlFor="form2Example1">Shippign
                                                                    Policy</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <hr/>
                                                            <div
                                                                className="w-100 d-flex justify-content-center align-content-center">
                                                                <div className="w-75">
                                                                    <p className="fw-bold">Variant List</p>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="image"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   // handlerOnchange(e.target.value, "anounceusername")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Image</label>
                                                                        <p className="errol" id="anounceusername">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="size"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   // handlerOnchange(e.target.value, "anounceusername")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Size</label>
                                                                        <p className="errol" id="anounceusername">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="price"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   // handlerOnchange(e.target.value, "anounceusername")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Price</label>
                                                                        <p className="errol" id="anounceusername">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="stock"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   // handlerOnchange(e.target.value, "anounceusername")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Stock</label>
                                                                        <p className="errol" id="anounceusername">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="discount"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   // handlerOnchange(e.target.value, "anounceusername")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Discount</label>
                                                                        <p className="errol" id="anounceusername">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative text-end">
                                                                        <button className="btn btn-info"
                                                                                onClick={handlerAddVariant}>Add
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>
                                                        <div className="modal-footer">
                                                            <input type="button" className="btn btn-default"
                                                                   data-dismiss="modal"
                                                                   defaultValue="Hủy"/>
                                                            <input type="submit" id="addTicket"
                                                                   className="btn btn-success"
                                                                   defaultValue="Thêm"/>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    }


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
                                                            <input type="text" id="FlightName"
                                                                   className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ THUẾ</label>
                                                            <input type="text" id="TaxID" className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ MB</label>
                                                            <input type="text" id="FlightID"
                                                                   className="form-control"
                                                                   required/>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>MÃ HÃNG VÉ</label>
                                                            <input type="text" id="FlightID"
                                                                   className="form-control"
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
                                                        <p className="text-warning"><small>Hành động này không thể
                                                            hoàn
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