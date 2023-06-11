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
                <td>{props.count+1}
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
                    <button className="edit btn btn-info" data-toggle="modal"><i className="material-icons"
                                                                                         data-toggle="tooltip"
                                                                                            title="Edit">Detail</i></button>
                    {/*<button  className="delete btn btn-danger" data-toggle="modal"><i className="material-icons"*/}
                    {/*                                                                         data-toggle="tooltip"*/}
                    {/*                                                                         title="Delete">Delete</i></button>*/}
                </td>


            </tr>
            <div className="detail  w-75 h-100 bg-info">
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
                    <tr>
                        <td>
                                                  <span className="custom-checkbox">
                                                    <input type="checkbox" className="checkbox" name="options[]" defaultValue={1}/>
                                                    <label htmlFor="checkbox"/>
                                                  </span>
                        </td>

                        <td className="id">{}</td>
                        <td className="account">{}</td>
                        <td className="discount">{}</td>
                        <td className="price">{} %</td>
                        <td className="status">{}</td>
                        <td className="shipped">{}</td>
                        <td className="phone">{}</td>
                        <td className=""></td>
                        <td className="day_order">{}</td>

                        <td>
                            <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i
                                className="material-icons"
                                data-toggle="tooltip"
                                title="Edit">Sửa</i></a>
                            <a href="#deleteEmployeeModal" className="delete"
                               data-toggle="modal"><i className="material-icons"
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