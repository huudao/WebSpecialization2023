
function  Pagination(props){
    const {pagination, onPageChange}=props;
    const begin =props.begin;
    const end =props.end;
    const totalRow =props.totalRow;


    const totalPage=Math.ceil(totalRow/end)
    function handlePageChange(newPage){
        console.log(begin+'begin')
        if(newPage){
            onPageChange(newPage)
        }
    }
    return(
        <>
            <nav aria-label="Page navigation example ">
                <ul className="pagination justify-content-center" >
                    <button className="page-item btn btn-outline-danger" disabled={begin==0} onClick={()=>handlePageChange("pre")}>Previous</button>

                    <button className="page-item btn btn-outline-danger" disabled={end==totalRow} onClick={()=>handlePageChange("next")}>Next</button>
                </ul>
            </nav>
        </>

    )
}
export default  Pagination