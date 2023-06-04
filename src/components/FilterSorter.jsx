import '../css/filter_sorter.css'

export default function FilterSorter({total_count, params, setParams}) {
    const {p, limit} = params;
    const totalPage = Math.ceil(total_count / limit);
    console.log('total_count', total_count)
    console.log(totalPage)

    return (
        <form id="filter_sorter" action="">
            <label htmlFor="sort">Sort By
                <select value={params.sort_by} name="sort_by" onChange={(e)=>setParams({...params, sort_by: e.target.value})}>
                    <option value="created_at">Date created</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>
            </label>
            <label htmlFor="order">Order By
                <select value={params.order} name="order" onChange={(e)=>setParams({...params, order: e.target.value})}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </label>
            <label>Articles shown per page
                <select onChange={(e)=>setParams({...params, limit: e.target.value})}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value={total_count}>All</option>
                </select>
            </label>
            <label>Jump to Page
            <select onChange={(e)=>setParams({...params, p: e.target.value})}>
                    {Array.apply(null, Array(totalPage)).map((p, i)=>{
                        return <option key={"page_"+i+1} value={i+1}>{i+1}</option>
                    })}
                </select>
            </label>
        </form>
    )
}