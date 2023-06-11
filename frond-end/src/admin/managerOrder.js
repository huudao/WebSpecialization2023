import {useContext, useEffect, useState} from "react";
import {OrderShow} from "./orderShow";
import {getAllOrder, getOrderByName} from "../feature/admin"
import $ from 'jquery'
import {OrderContext} from "../context/orderContext";
import data from "bootstrap/js/src/dom/data";
import {DetailShow} from "./detailShow";
import Pagination from "../component/pagination";

function ManagerOrder() {
    const [listOrder, setListOrder] = useState([])
    const {listDetail, showDetail, setShowDetail} = useContext(OrderContext)
    const [begin, setBegin] = useState(0);
    const [end, setEnd] = useState(2)
    const [distance] = useState(end - begin);
    const [postList, setPostList] = useState([]);
    function handlePageChange(newPage) {
        if (newPage === "next") {
            if (end <= listOrder.length) {
                if (end + (end - begin) > listOrder.length) {
                    setBegin(begin + (end - begin));
                    setEnd(end + (listOrder.length - end))
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

    useEffect(() => {
        getAllOrder().then(res =>
            setListOrder(res)
        ).then(()=>{
            let listPa = [];
            for (let i = begin; i < end; i++) {
                listPa.push(listOrder[i])
            }
            setPostList([...listPa])
            console.log(postList)
        })

    }, [listOrder])

    function handlerSearch(e) {
        e.preventDefault()
        const name = $("#search").val()
        console.log(name)
        getOrderByName(name).then(res => {
            setListOrder(res)

        }).catch(err => console.log(err.message))

    }

    function handlerClose() {
        setShowDetail(false)
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
                                        {postList.map((data, index) =>data!==undefined && <OrderShow key={data.id} data={data}
                                                                                   count={index}/>)}
                                        </tbody>
                                    </table>
                                    <Pagination begin={begin} end={end} totalRow={listOrder.length}
                                                onPageChange={handlePageChange}
                                    />
                                    {/*detail*/}
                                    {showDetail === true &&
                                    <>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="detail w-75">
                                                <div className="w-100 text-end">
                                                    <button className="btn btn-danger m-2" onClick={handlerClose}>x
                                                    </button>
                                                </div>
                                                <table className="table  table-hover">
                                                    <thead>
                                                    <tr>
                                                        <th>
                                                        </th>
                                                        <th>Id</th>
                                                        <th>Image</th>
                                                        <th>Name</th>
                                                        <th>Size</th>
                                                        <th>Price</th>
                                                        <th>Price discount</th>
                                                        <th>Amount</th>
                                                        <th></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {listDetail.map(data => <DetailShow data={data}/>)}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </>
                                    }


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