export function OrderShow(props) {
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

    return (
        <>
            <tr>


                <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" className="checkbox" name="options[]" defaultValue={1}/>
                            <label htmlFor="checkbox"/>
                          </span>
                </td>

                <td className="id">{id}</td>
                <td className="account">{userAddress}</td>
                <td className="go_air">{discountPercentage}</td>
                <td className="go_back">{totalPrice}</td>
                <td className="number_person">{status}</td>
                <td className="number_chilren">{shipped}</td>
                <td className="phone">{trackingNumber}</td>
                <td className="day_order">{orderDetailList}</td>
                <td className="day_order">resetPasswordToken</td>
                <td className="day_order">{date}</td>

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