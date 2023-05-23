export function CartProduct(props){
    const {id,name,brand,sex,img,star,review,price}=props.data;
    const styleStar={
        width: `${star}%`
    }
    const url=`/detail/:${id}`;
    return (
        <a href={url} className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
            <img src={img}></img>
            <div className="product__name h5">{name}</div>
            <div className="product__brand">By <a href="#">{brand}</a></div>
            <div className="product__sex">{sex}</div>

            <div className="product__review  d-flex justify-content-center" >
                <div className="product__star  ">
                    <div className="star__total" style={styleStar}></div>
                </div>
                <div className="review__count">({review})</div>
            </div>

            <div className="product__price">đ {price}</div>

        </a>

    )
}