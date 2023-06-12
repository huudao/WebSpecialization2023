import {deleteProductByVariant} from "../feature/admin";
import {useContext} from "react";
import {ProductContext} from "../context/productContext";

export function DetailShowProduct(props) {
    const {productId,variantId, imageUrls, sellCount, size, price, priceAfterDiscount,discount ,stock,averageRating} = props.data
    const {setShowRepair,setShowDetail}= useContext(ProductContext)
    function handlerDelete(e) {
        e.preventDefault()
        deleteProductByVariant(productId,variantId)

    }

    function handlerRepair() {
        setShowRepair(true)
        setShowDetail(false)

    }

    return (
        <>
            <tr>
                <td>
                <span className="custom-checkbox">
                </span>
                </td>
                <td className="id">{variantId}</td>
                <td className="account"><img style={{width: "30px", height: "40px"}} src={imageUrls[0]}/></td>
                <td className="price">{size} </td>
                <td className="price">{sellCount} </td>
                <td className="price">{discount} </td>
                <td className="status">{price}</td>
                <td className="shipped">{priceAfterDiscount}</td>
                <td className="phone">{stock}</td>
                <td className="phone">{averageRating}</td>
                <td>
                    <button className="btn btn-info" onClick={handlerRepair}>Repair</button>
                    <button className="btn btn-danger" onClick={handlerDelete}>Delete</button>
                </td>

            </tr>
        </>
    )
}