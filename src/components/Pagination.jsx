import '../css/pagination.css'

export default function Pagination({total_count, params, setParams}) {
    const {p, limit} = params;
    const totalPage = Math.ceil(total_count / limit);

    return (
        <>
            <div className="prev_next">
                {+p === 1? <></> : <span onClick={()=>setParams({...params, p: p - 1})}>&lt; Prev</span>}
                {+p === totalPage? <></> : <span onClick={()=>setParams({...params, p: p + 1})}>Next &gt;</span>}
            </div>
            <p className="pagination">Page <span onClick={()=>setParams({...params, p: p})}> {p} </span> / {totalPage}</p>    
        </>
    )
}