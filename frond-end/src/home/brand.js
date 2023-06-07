import {getProductByBrandId} from "../feature/product";

export function Brand(props) {
    const {name,imageUrl}= props.data;
    function  handerBrand(){
        // getProductByBrandId(i)
    }
    return (
        <>
            <button className="part d-flex rounded mx-3 my-3 border-0" onClick={handerBrand}>
                <img className="img-fluid rounded"
                     src={imageUrl}/>
                <div className="brands__name h4 "><a className="text-decoration-none text-black" >{name}</a></div>
            </button>
        </>
    )
}