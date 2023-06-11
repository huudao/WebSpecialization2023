import {AddAddress} from "./addAddress";
import {useContext, useEffect, useState} from "react";
import {ShowAddress} from "./showAddress";
import {AddressContext} from "../context/addressContext";
import $ from "jquery";

export function ListAddress(props) {
    // $(document).ready(() => {
    //     $("#add_address").click(() => {
    //         $('#show_add').show();
    //         $('#detail_address').hide()
    //
    //     })
    // })

    const {showList,setShowList} = useContext(AddressContext)
    const [isShow, setIsShow] = useState(true)
    const arrAddress = props.data
    // setShowList(true)
    useEffect(() => {
        // setIsShow(showList)
    }, [isShow])
    function  handlderAdd(){
        setShowList(false)
        console.log(showList)
    }

    return (
        <>{
            showList === true ?
                <>
                    <div className="list__address container-fluid  w-50 h-100  navbar-nav-scroll border-5" id="detail_address">
                        <div className="d-flex w-100   pt-2">
                            <h3 className="w-75">List address</h3>
                            <button className="btn btn-light w-25" id="add_address" onClick={handlderAdd}>ADD ADDRESS</button>
                        </div>
                        {arrAddress.map((data) => <ShowAddress data={data}/>)}

                        {/*<button className="btn btn-primary" onClick={handlerCheckout}>Checkout</button>*/}

                    </div>
                </> :
                <>
                    <div className="w-100 h-100 " id="show_add">
                        <AddAddress/>
                    </div>
                </>
        }
        </>
    )
}