export function ProductShow(props) {
    const {
        id,
        username,
        password,
        email,
        avatar,
        firstName,
        lastName,
        telephone,
        active,
        resetPasswordToken,
        roleList
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
                <td className="account">{username}</td>
                <td className="go_air">{password}</td>
                <td className="go_back">{email}</td>
                <td className="number_person">{avatar}</td>
                <td className="number_chilren">{firstName}</td>
                <td className="price_sum"> {lastName}</td>
                <td className="phone">{telephone}</td>
                <td className="day_order">{active}</td>
                <td className="day_order">resetPasswordToken</td>
                <td className="day_order">{roleList}</td>

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