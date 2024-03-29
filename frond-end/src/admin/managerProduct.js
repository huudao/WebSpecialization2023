import {useContext, useEffect, useState} from "react";
import {addProduct, getAllProduct} from "../feature/admin";
import {ProductShow} from "./productShow";
import $ from "jquery"
import {brands} from "../feature/product";
import {storage} from "../firebase/firebase";
import Pagination from "../component/pagination";
import {handlerErrol} from "../component/handlerErrol";
import {DetailShowProduct} from "./detailShowProduct";
import {ProductContext} from "../context/productContext";

function ManagerProduct() {
    const {showDetail,showRepair, listDetail, setShowDetail,setShowRepair} = useContext(ProductContext)
    const [arrVariant, setArrVariant] = useState([])
    const [image, setImage] = useState(null)
    const [isShow, setIsShow] = useState(false)
    const [brand, setBrand] = useState([])
    const [file, setFile] = useState();
    const [imageList, setImageList] = useState([])
    const [listProduct, setListProduct] = useState([])
    const [isChecked, setIsChecked] = useState(true)
    const [variantDefault, setVariantDefault] = useState(0);
    const [begin, setBegin] = useState(0);
    const [end, setEnd] = useState(10)
    const [distance] = useState(end - begin);
    const [postList, setPostList] = useState([]);

    function handlePageChange(newPage) {
        if (newPage === "next") {
            if (end <= listProduct.length) {
                if (end + (end - begin) > listProduct.length) {
                    setBegin(begin + (end - begin));
                    setEnd(end + (listProduct.length - end))
                } else {
                    setBegin(begin + (end - begin));
                    setEnd(end + (end - begin))
                }
            } else {
            }
        } else if (newPage === "pre") {
            if (begin >= 0) {
                if (end - begin < distance) {
                    setBegin(begin - distance);
                    setEnd(end - (end - begin))
                } else if (end - begin == distance) {
                    setBegin(begin - distance);
                    setEnd(end - distance)
                }
            }
        }
        // console.log(begin, end)
    }


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
                setImageList(arrImage);
            }
        )

    }

    useEffect(() => {
        console.log(showDetail, "show")
        getAllProduct().then(res => {
                setListProduct(res)
            }
        ).then(() => {
            let listPa = [];
            for (let i = begin; i < end; i++) {
                listPa.push(listProduct[i])
            }
            setPostList([...listPa])
            console.log(postList)
        }).catch(err => console.log(err))
        brands().then(res => {
            setBrand(res)

        }).catch(err => console.log(err))
        console.log(listProduct)


    }, [listProduct, begin, end])


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
        console.log(arrVariant, "arrvariant")

        const name = $('#username').val()
        const brand = $('#brand').val()
        const policy = $('#policy').val()
        const sex = $('#sex').val().toUpperCase()
        const descript = $('#descript').val()
        console.log(name, brand, policy, sex, descript)
        addProduct(name, brand, sex, descript, policy, arrVariant).then(res => {
            setIsShow(false)
        }).catch(err => console.log(err, "err"))
    }

    // let variantDefault ;
    const handlerAddVariant = (e) => {
        e.preventDefault()
        const discount = $("#discount").val()
        const stock = $("#stock").val()
        const price = $("#price").val()
        const size = $("#size").val() + "ml"
        console.log(imageList, discount, stock, price, size, variantDefault)
        setArrVariant(current => [...current, {imageList, size, price, discount, variantDefault}])
        alert("Success")
        $(document).ready(() => {
            $("#discount").text("dfsdf")
            $("#stock").text("sdfsd")
            $("#price").text("sdfsd")
            $("#size").text("dsfsd")

        })
        console.log(variantDefault, "aaaa");
        if (variantDefault === 1) {
            $('#form__checked').hide()

        }

    }

    // console.log(arrVariant)


    function onchangeChecked() {
        setIsChecked(!isChecked)
        if (isChecked === true) {
            setVariantDefault(1)
        }
        console.log(isChecked, variantDefault)

    }

    function handlerCloseTable() {
        setShowDetail(false)
    }

    function handlerCloseRepair() {
        setShowRepair(false)
        setShowDetail(true)
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
                                                <button className="btn btn-success" id="add"
                                                        onClick={handlerAdd}>
                                                    <i className="fas fa-plus-circle"></i>
                                                    <span>Add product</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {isShow === false &&
                                    <>
                                        <table className="table table-striped table-hover  table-"
                                               id="tableShow">
                                            <thead>
                                            <tr>
                                                <th>#
                                                </th>
                                                <th>Id</th>
                                                <th>Brand</th>
                                                <th className="" style={{width: "50px"}}>Name</th>
                                                <th style={{width: "40px"}}>Sex</th>
                                                <th style={{width: "200px"}}>Desciption</th>
                                                <th style={{width: "300px"}}>Shipping policy</th>
                                                <th>Quantity Sold</th>
                                                <th>Average Rating</th>
                                                <th></th>


                                            </tr>
                                            </thead>
                                            <tbody className="">
                                            {postList.map((data, index) => data !== undefined &&
                                                <ProductShow data={data} count={index}/>)}
                                            </tbody>
                                        </table>
                                        <Pagination begin={begin} end={end} totalRow={listProduct.length}
                                                    onPageChange={handlePageChange}
                                        />
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
                                                                           handlerErrol(e.target.value, "errusername")
                                                                       }}/>
                                                                <label className="form-label" htmlFor="form2Example1"
                                                                       id="name">Name
                                                                    product</label>
                                                                <p className="errol" id="errusername">* Enter
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
                                                                    {/*<option selected>Open this select menu</option>*/}
                                                                    {brand.map(data => <option
                                                                        value={data.id}>{data.name}</option>)}

                                                                </select>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Brand</label>
                                                                {/*<p className="errol" id="anounceusername">* Enter*/}
                                                                {/*    data</p>*/}
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <select className="form-select"
                                                                        aria-label="Default select example" id="sex">
                                                                    <option value="men">Men</option>
                                                                    <option value="women">Women</option>
                                                                </select>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Sex</label>
                                                                {/*<p className="errol" id="anounceusername">* Enter*/}
                                                                {/*    data</p>*/}
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="descript"
                                                                       className="form-control"
                                                                       onChange={(e) => {
                                                                           handlerErrol(e.target.value, "errdescript")
                                                                       }}/>
                                                                <label className="form-label"
                                                                       htmlFor="form2Example1">Descript</label>
                                                                <p className="errol" id="errdescript">* Enter
                                                                    data</p>
                                                            </div>
                                                            <div className="form-outline mb-4 position-relative">
                                                                <input type="text" id="policy"
                                                                       className="form-control"
                                                                       onChange={(e) => {
                                                                           handlerErrol(e.target.value, "errpolicy")
                                                                       }}/>
                                                                <label className="form-label" htmlFor="form2Example1">Shippign
                                                                    Policy</label>
                                                                <p className="errol" id="errpolicy">* Enter
                                                                    data</p>
                                                            </div>


                                                            {/*variant*/}
                                                            <div
                                                                className="w-100 d-flex justify-content-center align-content-center">
                                                                <div className="w-75">
                                                                    <p className="fw-bold">Variant List</p>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
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
                                                                        {/*<p className="errol" id="anounceusername">**/}
                                                                        {/*    Enter*/}
                                                                        {/*    data</p>*/}
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="size"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   handlerErrol(e.target.value, "errsize")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Size</label>
                                                                        <p className="errol" id="errsize">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="price"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   handlerErrol(e.target.value, "errprice")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Price</label>
                                                                        <p className="errol" id="errprice">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="stock"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   handlerErrol(e.target.value, "errstock")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Stock</label>
                                                                        <p className="errol" id="errstock">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div
                                                                        className="form-outline mb-4 position-relative">
                                                                        <input type="text" id="discount"
                                                                               className="form-control"
                                                                               onChange={(e) => {
                                                                                   handlerErrol(e.target.value, "errdiscount")
                                                                               }}/>
                                                                        <label className="form-label"
                                                                               htmlFor="form2Example1">Discount</label>
                                                                        <p className="errol" id="errdiscount">*
                                                                            Enter
                                                                            data</p>
                                                                    </div>
                                                                    <div className="form-check" id="form__checked">
                                                                        <input className="form-check-input"
                                                                               type="checkbox" value="default"
                                                                               id="checked" onChange={onchangeChecked}/>
                                                                        <label htmlFor="checked">Check default
                                                                            variant</label>

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
                                    {/*detail*/}
                                    {showDetail === true &&
                                    <>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="detail w-75">
                                                <div className="w-100 text-end">
                                                    <button className="btn btn-danger m-2" onClick={handlerCloseTable}>x
                                                    </button>
                                                </div>
                                                <table className="table  table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th>
                                                        </th>
                                                        <th>Id</th>
                                                        <th>Image</th>
                                                        <th>Size</th>
                                                        <th>Sell count</th>
                                                        <th>Discount</th>
                                                        <th>Price</th>
                                                        <th>Price discount</th>
                                                        <th>Stock</th>
                                                        <th>Rating</th>


                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {listDetail.map(data => <DetailShowProduct data={data}/>)}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </>
                                    }


                                    {/*repair*/}
                                    {showRepair === true &&
                                    <>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <div className="repair w-75">
                                                <form>
                                                    <div className="modal-header mb-4">
                                                        <h4 className="modal-title">Repair product</h4>
                                                        <button type="button" className="close btn btn-danger m-3"
                                                                id="closeButton"
                                                                data-dismiss="modal"
                                                                aria-hidden="true" onClick={handlerCloseRepair}>×
                                                        </button>
                                                    </div>
                                                    <div
                                                        className="modal-body ">{/*lúc test nhớ để hết sang cmt, chức năng thêm vẫn chưa ổn*/}
                                                        {/*variant*/}
                                                        <div
                                                            className="w-100 d-flex justify-content-center align-content-center">
                                                            <div className="w-75">
                                                                <div
                                                                    className="form-outline mb-4 position-relative">
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
                                                                    {/*<p className="errol" id="anounceusername">**/}
                                                                    {/*    Enter*/}
                                                                    {/*    data</p>*/}
                                                                </div>
                                                                <div
                                                                    className="form-outline mb-4 position-relative">
                                                                    <input type="text" id="size"
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               handlerErrol(e.target.value, "errsize")
                                                                           }}/>
                                                                    <label className="form-label"
                                                                           htmlFor="form2Example1">Size</label>
                                                                    <p className="errol" id="errsize">*
                                                                        Enter
                                                                        data</p>
                                                                </div>
                                                                <div
                                                                    className="form-outline mb-4 position-relative">
                                                                    <input type="text" id="price"
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               handlerErrol(e.target.value, "errprice")
                                                                           }}/>
                                                                    <label className="form-label"
                                                                           htmlFor="form2Example1">Price</label>
                                                                    <p className="errol" id="errprice">*
                                                                        Enter
                                                                        data</p>
                                                                </div>
                                                                <div
                                                                    className="form-outline mb-4 position-relative">
                                                                    <input type="text" id="stock"
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               handlerErrol(e.target.value, "errstock")
                                                                           }}/>
                                                                    <label className="form-label"
                                                                           htmlFor="form2Example1">Stock</label>
                                                                    <p className="errol" id="errstock">*
                                                                        Enter
                                                                        data</p>
                                                                </div>
                                                                <div
                                                                    className="form-outline mb-4 position-relative">
                                                                    <input type="text" id="discount"
                                                                           className="form-control"
                                                                           onChange={(e) => {
                                                                               handlerErrol(e.target.value, "errdiscount")
                                                                           }}/>
                                                                    <label className="form-label"
                                                                           htmlFor="form2Example1">Discount</label>
                                                                    <p className="errol" id="errdiscount">*
                                                                        Enter
                                                                        data</p>
                                                                </div>
                                                                {/*<div className="form-check" id="form__checked">*/}
                                                                {/*    <input className="form-check-input"*/}
                                                                {/*           type="checkbox" value="default"*/}
                                                                {/*           id="checked" onChange={onchangeChecked}/>*/}
                                                                {/*    <label htmlFor="checked">Check default*/}
                                                                {/*        variant</label>*/}

                                                                {/*</div>*/}
                                                            </div>

                                                        </div>


                                                    </div>
                                                    <div
                                                        className="modal-footer justify-content-center align-content-center">
                                                        <button id="addTicket"
                                                                className="btn btn-success"
                                                                onClick={handlerAddProduct}>Repair Product
                                                        </button>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>
                                    </>
                                    }


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