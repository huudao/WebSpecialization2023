import {useContext} from "react";
import {OrderContext} from "../context/orderContext";
import {getDetailOrder} from "../feature/admin";

export function OrderShow(props) {
    const{setListDetail,setShowDetail}=useContext(OrderContext);

    const {
        id,
        userAddress,
        discountPercentage,
        totalPrice,
        status,
        shipped,
        trackingNumber,
        orderDetailList,
        date,

    } = props.data
    const address = `ward ${userAddress.ward},district ${userAddress.district}, city ${userAddress.city}`

    function handlerDetail() {
        getDetailOrder(id).then(item=>{
            setListDetail(item);
            setShowDetail(true)
        })

    }

    return (
        <>
            <tr>
                <td>{props.count+1}
                </td>

                <td className="id">{id}</td>
                <td className="account">{userAddress.username}</td>
                <td className="discount w-25">{address}</td>
                <td className="price">{discountPercentage} %</td>
                <td className="status">{totalPrice}</td>
                <td className="shipped">{status}</td>
                <td className="phone">{trackingNumber}</td>
                <td className=""></td>
                <td className="day_order">{date}</td>

                <td>
                    <button className="edit btn btn-info" data-toggle="modal"><i className="material-icons"
                                                                                         data-toggle="tooltip"
                                                                                            title="Edit" onClick={handlerDetail}>Detail</i></button>
                    {/*<button  className="delete btn btn-danger" data-toggle="modal"><i className="material-icons"*/}
                    {/*                                                                         data-toggle="tooltip"*/}
                    {/*                                                                         title="Delete">Delete</i></button>*/}
                </td>


            </tr>




        </>
    )
}