
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
                    <button className="page-item" disabled={begin==0} onClick={()=>handlePageChange("pre")}>Previous</button>
                    {/*<li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                    {/*<li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                    <button className="page-item" disabled={end==totalRow} onClick={()=>handlePageChange("next")}>Next</button>
                </ul>
            </nav>
        </>

    )
}
export default  Pagination