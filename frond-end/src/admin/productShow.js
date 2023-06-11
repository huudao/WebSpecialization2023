import {deleteProduct} from "../feature/admin";
import {useContext} from "react";

export function ProductShow(props) {
    const {
        productId,
        variantId,
        brandName,
        name,
        size,
        sellCount,
        price,
        discount,
        stock,
        imageUrls,
        averageRating
    } = props.data
    // console.log(count,"count")
    function handlerDelete(){
        deleteProduct(variantId).then(res=>{

        })

    }
    function handlerRepair(){

    }
    return (
        <>
            <tr>
                <td>
                    {props.count+1}
                </td>
                <td className="id">{productId}</td>
                <td className="variant text-center" style={{width:"90px"}}>{variantId}</td>
                <td className="name">{name}</td>
                <td className="brand">{brandName}</td>
                <td className="size">{size}</td>
                <td className="sell_count">{sellCount}</td>
                <td className="price"> {price}</td>
                <td className="discount">{discount}</td>
                <td className="stock">{stock}</td>
                <td className="img"><img className="" src={imageUrls[0]} style={{width:"50px",height:"60px"}}/></td>
                <td className="rating">{averageRating}</td>

                <td>
                    <button  className="btn btn-primary" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit" onClick={handlerRepair}>Repair</i></button>
                    <button  className="btn btn-danger" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete" onClick={handlerDelete}>Delete</i></button>
                </td>
            </tr>
        </>
    )
}