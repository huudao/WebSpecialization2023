export function Carousel(){
    return (
        <>
            <div id="demo" class="carousel slide container-fluid" data-bs-ride="carousel">
                {/* Indicators/dots  */}
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                </div>
                {/* <The slideshow/carousel */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.fragrancex.com/images/l/25/d/0/homeimage_1_mq4.webp?v=CUX3HVSUB9FQ3GA" alt="Los Angeles" class="d-block w-100" />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.fragrancex.com/images/l/25/d/0/homeimage_0_mq4.webp?v=2LTNCKRR3GQKU3D" alt="Chicago" class="d-block w-100" />
                    </div>



                </div>
                {/* Left and right controls/icons */}
                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>
        </>
    )
}