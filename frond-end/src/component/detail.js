export function Detail(props){
    const result =props.result;
    function handlerAddCart(){

    }
    return(
        <>
            <div className="choose">
                <div className="choose__info row">
                    <img className="col-sm-2"
                         src={result.imageUrls} style={{width:"100px", height:"100px"}}/>
                    <div className="pop__content col-sm-5">
                        <p className="fw-bold m-1">100 ml Eau De Parfum Spray</p>
                        <small>Item #538279</small>
                        <p>In Stock</p>

                    </div>
                    <div className="cart__add col-sm-5 text-center">
                        <p>Price with Coupon</p>
                        <h2>đ {result.price}</h2>
                        <p>Delivery</p>
                        <p>April 6 - 14</p>
                        <button className="btn btn-dark m-1" type="submit " style={{width:"100%"} } onClick={handlerAddCart}>Add to cart</button>
                        <button className="btn btn-primary m-1" type="submit " style={{width:"100%"}}>Get 15% Off</button>

                    </div>
                </div>
            </div>
        </>
    )
}