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
    const address = `ward ${userAddress.ward},district ${userAddress.district}, city ${userAddress.city}`

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
                <td className="account">{userAddress.username}</td>
                <td className="discount">{address}</td>
                <td className="price">{discountPercentage} %</td>
                <td className="status">{totalPrice}</td>
                <td className="shipped">{status}</td>
                <td className="phone">{trackingNumber}</td>
                <td className=""></td>
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
            <div className="detail position-fixed w-75 h-100 bg-info">
                <table className="table  table-hover">
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
                    <tr>
                        <td>
                          <span className="custom-checkbox">
                            <input type="checkbox" className="checkbox" name="options[]" defaultValue={1}/>
                            <label htmlFor="checkbox"/>
                          </span>
                        </td>

                        <td className="id">{id}</td>
                        <td className="account">{userAddress.username}</td>
                        <td className="discount">{address}</td>
                        <td className="price">{discountPercentage} %</td>
                        <td className="status">{totalPrice}</td>
                        <td className="shipped">{status}</td>
                        <td className="phone">{trackingNumber}</td>
                        <td className=""></td>
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
                    {/*{listOrder.map((data) => <OrderShow key={data.id} data={data}/>)}*/}
                    </tbody>
                </table>
            </div>


        </>
    )
}