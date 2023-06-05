import {AddAddress} from "./addAddress";
import {useState} from "react";
import {ShowAddress} from "./showAddress";

export function ListAddress(props) {
    const {username, specificAddress, phone, city} = props.data;
    const [isShow, setIsShow] = useState(true)

    function handlerAdd() {
        setIsShow(false);
    }

    return (
        <>
            {
                isShow === true
                    ? <>
                        <div className="container-fluid bg-info w-50 h-75  m-auto navbar-nav-scroll">
                            <div className="d-flex w-100  bd-highlight pt-2">
                                <h3 className="w-75">List address</h3>
                                <button className="btn btn-light w-25" onClick={handlerAdd}>ADD ADDRESS</button>

                            </div>
                            <hr/>
                            {props.data.map((data=>  <ShowAddress data={props.data}/>))}

                        </div>
                    </>
                    :
                    <div className="w-100 h-100 ">
                        <AddAddress/>
                    </div>
            }
        </>
    )
}