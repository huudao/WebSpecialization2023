import avatar from "../asset/Image/pngtree-avatar-human-man-people-person-profile-user-abstract-circl-png-image_1983926.jpg"
import {deleteUser, modifyActivi} from "../feature/admin";
export function UserShow(props) {
    const {
        id,
        username,
        email,
        firstName,
        lastName,
        telephone,
        active,
        roleList
    } = props.data

    function handlerDelete() {
        console.log(active)
        deleteUser(id)
    }

    function handlerRepair() {
        modifyActivi(id)

    }

    return (
        <>
            <tr>


                <td>
                    {props.count+1}
                </td>

                <td className="id">{id}</td>
                <td className=""><img style={{width:"50px",height:"50px"}} src={avatar}/>
                </td>
                <td className="username">{username}</td>
                {/*<td className="pass " style={{width:"10px"}}>{password}</td>*/}
                <td className="email" style={{width: "10px"}}>{email}</td>
                <td className="price_sum"> {lastName}</td>
                <td className="number_chilren">{firstName}</td>
                <td className="phone">{telephone}</td>
                <td className="day_order">{roleList}</td>
                <td className="day_order" style={{width:"100px"}}>{active===true? "Activity": "Off"}</td>
                <td>
                    <button className="btn btn-primary" data-toggle="modal"><i className="material-icons"
                                                                               data-toggle="tooltip" title="Edit"
                                                                               onClick={handlerRepair}>Modify Activi</i>
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