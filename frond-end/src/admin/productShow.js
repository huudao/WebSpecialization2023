import {deleteProduct, getAllProductById} from "../feature/admin";
import {useContext} from "react";
import {ProductContext} from "../context/productContext";

export function ProductShow(props) {
    const {setShowDetail, showDetail, setListDetail} = useContext(ProductContext)
    const {
        id,
        brandName,
        name,
        genderType,
        description,
        shippingPolicy,
        quantitySold,
        averageRating
    } = props.data

    // console.log(count,"count")
    function handlerDelete() {
        deleteProduct(id).then(res => {
        })

    }

    function handlerDetail() {
        getAllProductById(id).then(res => {
            setListDetail(res)
            setShowDetail(true)
        })
        console.log(showDetail, "show")

    }

    return (
        <>
            <tr className="line__tr" style={{height: "100px!important"}}>
                <td>
                    {props.count + 1}
                </td>
                <td className="id">{id}</td>
                <td className="brand">{brandName}</td>
                <td className="name" style={{width: "100px"}}>{name}</td>
                <td className="size">{genderType}</td>
                <td className="desciption navbar-nav-scroll h-25">{description}</td>
                <td className="shipping "> {shippingPolicy}</td>
                <td className="discount">{quantitySold}</td>
                <td className="rating">{averageRating}</td>

                <td>
                    <button className="btn btn-primary" data-toggle="modal"><i className="material-icons"
                                                                               data-toggle="tooltip" title="Edit"
                                                                               onClick={handlerDetail}>Detail</i>
                    </button>
                    <button className="btn btn-danger" data-toggle="modal"><i className="material-icons"
                                                                              data-toggle="tooltip" title="Delete"
                                                                              onClick={handlerDelete}>Delete</i>
                    </button>
                </td>
            </tr>
        </>
    )
}