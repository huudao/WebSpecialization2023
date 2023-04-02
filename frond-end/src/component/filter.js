function BarFilter() {
    return (
        <>
            <div className="filter ">
                <p>Filter By</p>
                <form>
                    <div className="gender form-check">
                        <p>Gender</p>
                        <div className="form-check">

                            <input className="form-check-input" type="checkbox" value="" id="women"/>
                            <label className="form-check-label" htmlFor="women">Women</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="man"/>
                            <label className="form-check-label" htmlFor="man">Man</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="unisex"/>
                            <label className="form-check-label" htmlFor="unisex">Unisex</label>
                        </div>

                    </div>
                    <hr/>
                    <div className="brand form-check">
                        <p>Brand</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="dolce__gabbana"/>
                            <label className="form-check-label" htmlFor="dolce__gabbana"> Dolce & Gabbana</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="armaf"/>
                            <label className="form-check-label" htmlFor="armaf">Armaf</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="calvin"/>
                            <label className="form-check-label" htmlFor="calvin">Calvin Klein</label>
                        </div>

                    </div>
                    <hr/>
                    <div className="price form-check">
                        <p>Price</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="cheap"/>
                            <label className="form-check-label" htmlFor="cheap"> Under đ 230,000</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="normal"/>
                            <label className="form-check-label" htmlFor="normal">đ 230,000 - 580,000</label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="high"/>
                            <label className="form-check-label" htmlFor="high">đ 580,000 - 1,200,000</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="very_high"/>
                            <label className="form-check-label" htmlFor="very_high">đ 1,200,000+</label>
                        </div>

                    </div>
                    <hr/>
                    <div className="stock form-check">
                        <p>In Stock</p>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="in_stock"/>
                            <label className="form-check-label" htmlFor="in_stock"> In stock only</label>
                        </div>


                    </div>
                </form>

            </div>
        </>
    )
}

export default BarFilter;