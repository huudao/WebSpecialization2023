export function ProductShow(props) {
    const {
        productId,
        variantId,
        brandId,
        brandName,
        size,
        sellCount,
        price,
        discount,
        stock,
        imageUrls,
        averageRating
    } = props.data

    return (
        <>
            <tr>


                <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" className="checkbox" name="options[]" defaultValue={1}/>
                            <label htmlFor="checkbox"/>
                          </span>
                </td>

                <td className="id">{productId}</td>
                <td className="account">{variantId}</td>
                <td className="go_air">{brandId}</td>
                <td className="go_back">{brandName}</td>
                <td className="number_person">{size}</td>
                <td className="number_chilren">{sellCount}</td>
                <td className="price_sum"> {price}</td>
                <td className="phone">{discount}</td>
                <td className="day_order">{stock}</td>
                <td className="day_order"><img url={imageUrls[0]}/></td>
                <td className="day_order">{averageRating}</td>

                <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons"
                                                                                         data-toggle="tooltip"
                                                                                         title="Edit">Sửa</i></a>
                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons"
                                                                                             data-toggle="tooltip"
                                                                                             title="Delete">Xóa</i></a>
                </td>
            </tr>
        </>
    )
}