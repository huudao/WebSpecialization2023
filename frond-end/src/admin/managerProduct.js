import {useEffect, useState} from "react";
import {addProduct, getAllProduct} from "../feature/admin";
import {ProductShow} from "./productShow";
import {NavLink} from "react-router-dom";
import $ from "jquery"
import {brands} from "../feature/product";
import {storage} from "../firebase/firebase";

function ManagerProduct() {
    const arrVariant = []
    const [image, setImage] = useState(null)
    const [isShow, setIsShow] = useState(false)
    const [brand, setBrand] = useState([])
    const [file, setFile] = useState();
    const [listImage, setListImage] = useState([])

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]))
        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }


    function handlerUpload(e) {
        e.preventDefault()
        const arrImage = []
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
            },
            error => {
                console.log(error)
            },
            () => {
                storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        arrImage.push(url)
                        console.log(arrImage)
                    })
                setListImage(arrImage);
            }
        )

    }

    // console.log(listImage)

    // console.log(image, "image")

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
        brands().then(res => {
            setBrand(res)

        })
    }, [listProduct, brand])

    function handlerAdd(e) {
        e.preventDefault()
        console.log(isShow)
        setIsShow(true)
        console.log(isShow, "sfsdflkjsdflksjdflksdjlkf")

    }

    function handlerClose(e) {
        console.log(isShow)
        setIsShow(false)
        console.log(isShow, "sfsdflkjsdflksjdflksdjlkf")

    }


    function handlerAddProduct(e) {
        e.preventDefault()
        const name = $('#username').val()
        const brand = $('#brand').val()
        const policy = $('#policy').val()
        const sex = $('#sex').val().toUpperCase()
        const descript = $('#descript').val()
        console.log(name, brand, policy, sex, descript)
        addProduct(name, sex, descript, policy, arrVariant).then(res => {

        })
        // const name=$('#name')
        // const name=$('#name')
        // const name=$('#name'
    }

    function handlerAddVariant(e) {
        e.preventDefault()
        // const img = $("#image").val()
        const discount = $("#discount").val()
        const stock = $("#stock").val()
        const price = $("#price").val()
        const size = $("#size").val()
        console.log(listImage, discount, stock, price, size)
        arrVariant.push({listImage, size, price, discount})
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
                                                                <label className="form-label" htmlFor="form2Example1"
                                                                       id="name">Name
                                                                    product</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                {/*<input type="" id="brand"*/}
                                                                {/*       className="form-control"*/}
                                                                {/*       onChange={(e) => {*/}
                                                                {/*           // handlerOnchange(e.target.value, "anounceusername")*/}
                                                                {/*       }}/>*/}
                                                                <select className="form-select"
                                                                        aria-label="Default select example" id="brand">
                                                                    <option selected>Open this select menu</option>
                                                                    {brand.map(data => <option
                                                                        value={data.id}>{data.name}</option>)}

                                                                </select>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Brand</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <select className="form-select"
                                                                        aria-label="Default select example" id="sex">
                                                                    <option value="men">Men</option>
                                                                    <option value="women">Women</option>
                                                                    <option value="other">Other</option>
                                                                </select>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Sex</label>
                                                                <p className="errol" id="anounceusername">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="descript"
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
                                                                <input type="text" id="policy"
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

                                                                        {/*<div>*/}
                                                                        {/*    <h2>Add Image:</h2>*/}
                                                                        {/*    <input type="file" onChange={handleChange} />*/}
                                                                        {/*    <img src={file} />*/}
                                                                        {/*</div>*/}
                                                                        <input type="file" id="image"
                                                                               className="form-control"
                                                                               onChange={handleChange}
                                                                        />
                                                                        <img src={file} className=""
                                                                             style={{width: "100px", height: "100px"}}/>
                                                                        <button className="btn btn-info ms-3"
                                                                                onClick={handlerUpload}>Choose
                                                                        </button>
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
                                                                                onClick={handlerAddVariant}>Add variant
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>
                                                        <div
                                                            className="modal-footer justify-content-center align-content-center">
                                                            <button id="addTicket"
                                                                    className="btn btn-success"
                                                                    onClick={handlerAddProduct}>Add Product
                                                            </button>
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