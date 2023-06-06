import {NavLink} from "react-router-dom";

function Home() {
    return (
        <>
            <div className="container-fluid brands py-4">
                <div className="brands__title text-center">
                    <div className="h2 text-center">Top Fragrance Brands</div>
                    <NavLink to="/product" className=" ">View All Brands</NavLink>
                </div>
                <div className="brands__detail d-flex flex-wrap justify-content-center mx-5 my-5">
                    <div className="part d-flex rounded mx-3 my-3 ">
                        <img className="img-fluid rounded"
                             src="https://img.fragrancex.com/images/assets/product%20images/calvin-klein.webp"/>
                        <div className="brands__name h4 "><a className="text-decoration-none text-black" href="#">Calvin Klein</a></div>
                    </div>
                    <div className="part d-flex rounded mx-3 my-3 ">
                        <img className="img-fluid rounded"
                             src="https://img.fragrancex.com/images/assets/product%20images/mont-blanc.webp"/>
                        <div className="brands__name h4 "><a className="text-decoration-none text-black" href="#">Montblanc</a></div>
                    </div>
                    <div className="part d-flex rounded mx-3 my-3 ">
                        <img className="img-fluid rounded"
                             src="https://img.fragrancex.com/images/assets/product%20images/dolce-gabbana.webp"/>
                        <div className="brands__name h4 "><a className="text-decoration-none text-black" href="#">Dolce
                            & Gabbana</a></div>
                    </div>
                    <div className="part d-flex rounded mx-3 my-3 ">
                        <img className="img-fluid rounded"
                             src="https://img.fragrancex.com/images/assets/product%20images/dior.webp"/>
                        <div className="brands__name h4 "><a className="text-decoration-none text-black" href="#">Christian Dior</a></div>
                    </div>
                    <div className="part d-flex rounded mx-3 my-3 ">
                        <img className="img-fluid rounded"
                             src="https://img.fragrancex.com/images/assets/product%20images/jimmy-choo.webp"/>
                        <div className="brands__name h4 "><a className="text-decoration-none text-black" href="#">Jimmy Choo</a></div>
                    </div>
                    <div className="part d-flex rounded mx-3 my-3 ">
                        <img className="img-fluid rounded"
                             src="https://img.fragrancex.com/images/assets/product%20images/versace.webp"/>
                        <div className="brands__name h4 "><a className="text-decoration-none text-black" href="#">Versace</a></div>
                    </div>

                </div>
            </div>
            <div className="bestsaler container p-5">
                <div className="brands__title text-center">
                    <div className="h2 text-center">Best Saller</div>
                    <NavLink to="/product"className=" " >See All</NavLink>
                </div>
                <div className="bestsaler__product  row  overflow-hidden position-relative flex-nowrap ">
                    <NavLink to="/product" className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
                        <img src="https://img.fragrancex.com/images/products/sku/small/61100w.webp"></img>
                        <div className="product__name h5">Bright Crystal</div>
                        <div className="product__brand">By Versace</div>
                        <div className="product__review  d-flex justify-content-center" >
                            <div className="product__star  ">
                                <div className="star__total" style={{width: "90%"}}></div>
                            </div>
                            <div className="review__count">(4544)</div>
                        </div>

                        <div className="product__name">đ 237,940.70</div>

                    </NavLink>
                    <NavLink to="/product" className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
                        <img src="https://img.fragrancex.com/images/products/sku/small/81419w.webp"></img>
                        <div className="product__name h5">
                            Lattafa Pride Royal Sapphire</div>
                        <div className="product__brand">By Lattafa</div>
                        <div className="product__review  d-flex justify-content-center" >
                            <div className="product__star  ">
                                <div className="star__total" style={{width: "90%"}}></div>
                            </div>
                            <div className="review__count">(4544)</div>
                        </div>

                        <div className="product__name">đ 237,940.70</div>

                    </NavLink>
                    <NavLink to="/product" className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
                        <img src="https://img.fragrancex.com/images/products/sku/small/81418w.webp"></img>
                        <div className="product__name h5">
                            <div className="serif h3">
                                Lattafa Pride Ansaam Silver
                            </div></div>
                        <div className="product__brand">By Lattafa</div>
                        <div className="product__review  d-flex justify-content-center" >
                            <div className="product__star  ">
                                <div className="star__total" style={{width: "90%"}}></div>
                            </div>
                            <div className="review__count">(4544)</div>
                        </div>

                        <div className="product__name">đ 237,940.70</div>

                    </NavLink>
                    <NavLink to="/product"  className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
                        <img src="https://img.fragrancex.com/images/products/sku/small/81422w.webp"></img>
                        <div className="product__name h5">
                            <div className="serif h3">
                                Lattafa Pride Royal Sapphire
                            </div></div>
                        <div className="product__brand">By Lattafa</div>
                        <div className="product__review  d-flex justify-content-center" >
                            <div className="product__star  ">
                                <div className="star__total" style={{width: "90%"}}></div>
                            </div>
                            <div className="review__count">(4544)</div>
                        </div>

                        <div className="product__name">đ 237,940.70</div>

                    </NavLink>
                    <NavLink to="/product"  className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
                        <img src="https://img.fragrancex.com/images/products/sku/small/61100w.webp"></img>
                        <div className="product__name h5">Bright Crystal</div>
                        <div className="product__brand">By Versace</div>
                        <div className="product__review  d-flex justify-content-center" >
                            <div className="product__star  ">
                                <div className="star__total" style={{width: "90%"}}></div>
                            </div>
                            <div className="review__count">(4544)</div>
                        </div>

                        <div className="product__name">đ 237,940.70</div>

                    </NavLink>
                    <NavLink to="/product"  className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
                        <img src="https://img.fragrancex.com/images/products/sku/small/61100w.webp"></img>
                        <div className="product__name h5">Bright Crystal</div>
                        <div className="product__brand">By Versace</div>
                        <div className="product__review  d-flex justify-content-center" >
                            <div className="product__star  ">
                                <div className="star__total" style={{width: "90%"}}></div>
                            </div>
                            <div className="review__count">(4544)</div>
                        </div>

                        <div className="product__name">đ 237,940.70</div>

                    </NavLink>
                    <NavLink to="/product"  className="bestsaler__product-detail text-center col-sm-3 text-decoration-none ">
                    <img src="https://img.fragrancex.com/images/products/sku/small/61100w.webp"></img>
                    <div className="product__name h5">Bright Crystal</div>
                    <div className="product__brand">By Versace</div>
                    <div className="product__review  d-flex justify-content-center">
                        <div className="product__star  ">
                            <div className="star__total" style={{width: "90%"}}></div>
                        </div>
                        <div className="review__count">(4544)</div>
                    </div>

                    <div className="product__name">đ 237,940.70</div>

                    </NavLink>



                    <div className="button">
                        <button className="button__left   "><i className="fas fa-chevron-left "></i></button>
                        <button className="button__right  "><i className="fas fa-chevron-right"></i></button>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;