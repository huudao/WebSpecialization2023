import {AddAddress} from "./addAddress";
import {useState} from "react";

export function ListAddress() {
    const [isShow, setIsShow] = useState(true)
    return (
        <>
            {isShow === true ?
                <div className="container-fluid bg-info w-50 h-75  m-auto navbar-nav-scroll">
                    <div className="d-flex w-100  bd-highlight pt-2">
                        <h3 className="w-75">List address</h3>
                        <button className="btn btn-light w-25">ADD ADDRESS</button>

                    </div>
                    <hr/>
                    <div className="d-flex">
                        <div className=" w-75">
                            <p>Huynh Quoc Nhan | <small>98098080989</small></p>
                            <p>126/17 đường 17,khu phố 5 126/17 đường 17,khu phố 5126/17 đường 17,khu phố 5126/17 đường
                                17,khu phố 5</p>
                        </div>
                        <div className=" w-25 text-center m-auto">
                            <button className="btn btn-warning">Chọn</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className=" w-75">
                            <p>Huynh Quoc Nhan | <small>98098080989</small></p>
                            <p>126/17 đường 17,khu phố 5 126/17 đường 17,khu phố 5126/17 đường 17,khu phố 5126/17 đường
                                17,khu phố 5</p>
                        </div>
                        <div className=" w-25 text-center m-auto">
                            <button className="btn btn-warning">Chọn</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className=" w-75">
                            <p>Huynh Quoc Nhan | <small>98098080989</small></p>
                            <p>126/17 đường 17,khu phố 5 126/17 đường 17,khu phố 5126/17 đường 17,khu phố 5126/17 đường
                                17,khu phố 5</p>
                        </div>
                        <div className=" w-25 text-center m-auto">
                            <button className="btn btn-warning">Chọn</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className=" w-75">
                            <p>Huynh Quoc Nhan | <small>98098080989</small></p>
                            <p>126/17 đường 17,khu phố 5 126/17 đường 17,khu phố 5126/17 đường 17,khu phố 5126/17 đường
                                17,khu phố 5</p>
                        </div>
                        <div className=" w-25 text-center m-auto">
                            <button className="btn btn-warning">Chọn</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className=" w-75">
                            <p>Huynh Quoc Nhan | <small>98098080989</small></p>
                            <p>126/17 đường 17,khu phố 5 126/17 đường 17,khu phố 5126/17 đường 17,khu phố 5126/17 đường
                                17,khu phố 5</p>
                        </div>
                        <div className=" w-25 text-center m-auto">
                            <button className="btn btn-warning">Chọn</button>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className=" w-75">
                            <p>Huynh Quoc Nhan | <small>98098080989</small></p>
                            <p>126/17 đường 17,khu phố 5 126/17 đường 17,khu phố 5126/17 đường 17,khu phố 5126/17 đường
                                17,khu phố 5</p>
                        </div>
                        <div className=" w-25 text-center m-auto">
                            <button className="btn btn-warning">Chọn</button>
                        </div>
                    </div>
                </div>
                :
                <div className="w-100 h-100 " >
                    <AddAddress/>
                </div>}
        </>
    )
}