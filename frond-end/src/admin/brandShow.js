import avatar from "../asset/Image/pngtree-avatar-human-man-people-person-profile-user-abstract-circl-png-image_1983926.jpg"
import {deleteBrand, deleteUser, modifyActivi} from "../feature/admin";
export function BrandShow(props) {
    const {
        id,
        name,
        imageUrl,
        description,
        createdDate,
        updatedDate,
    } = props.data

    function handlerDelete() {
        deleteBrand(id).then(r =>{} )
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
                <td className=""><img style={{width:"50px",height:"50px"}} src={imageUrl}/>
                </td>
                <td className="username">{name}</td>
                {/*<td className="pass " style={{width:"10px"}}>{password}</td>*/}
                <td className="email" style={{width: "400px"}}>{description}</td>
                <td className="price_sum"> {createdDate}</td>
                <td className="number_chilren">{updatedDate}</td>
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