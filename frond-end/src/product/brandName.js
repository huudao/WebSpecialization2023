export  function BrandName(props){
    const {name}=props.data;
    return(
        <>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="dolce__gabbana"/>
                <label className="form-check-label" htmlFor="dolce__gabbana"> {name}</label>
            </div>
        </>
    )
}