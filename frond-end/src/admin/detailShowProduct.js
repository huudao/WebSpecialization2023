export function DetailShowProduct(props) {
    const {id, imageUrl, productName, size, price, priceAfterDiscount, amount} = props.data
    return (
        <>
            <tr>
                <td>
                <span className="custom-checkbox">
                </span>
                </td>
                <td className="id">{id}</td>
                <td className="account"><img style={{width: "30px", height: "40px"}} src={imageUrl}/></td>
                <td className="discount">{productName}</td>
                <td className="price">{size} </td>
                <td className="status">{price}</td>
                <td className="shipped">{priceAfterDiscount}</td>
                <td className="phone">{amount}</td>

            </tr>
        </>
    )
}