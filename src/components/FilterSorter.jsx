import '../css/filter_sorter.css'
import { useState } from 'react';
import { v4 } from 'uuid'

export default function FilterSorter({total_count, params, setParams}) {
    const {p, limit} = params;
    const [sort, setSort] = useState("created_at");
    const [order, setOrder] = useState("desc");
    const [customLimit, setCustomLimit] = useState(10);
    const [page, setPage] = useState(1);
    const totalPage = Math.ceil(total_count / limit);

    const handleFilter = (e) => {
        e.preventDefault();
        setParams({sort_by: sort, order:order, limit:customLimit, p:page})
    }

    const handleReset = (e) => {
        e.preventDefault();
    }

    return (
        <form id="filter_sorter" action="" onSubmit={handleFilter} onReset={handleReset}>
            <label htmlFor="sort">Sort By
                <select value={sort} name="sort_by" onChange={(e)=>setSort(e.target.value)}>
                    <option value="created_at">Date created</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>
            </label>
            <label htmlFor="order">Order By
                <select value={order} name="order" onChange={(e)=>setOrder(e.target.value)}>
                    <option value="desc">Descending</option>
                    <option value="asc">Ascending</option>
                </select>
            </label>
            <label>Articles shown per page
                <select value={customLimit} onChange={(e)=>setCustomLimit(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value={total_count}>All</option>
                </select>
            </label>
            <label>Jump to Page
            <select value={page} onChange={(e)=>setPage(e.target.value)}>
                    {Array.apply(null, Array(totalPage)).map((p, i)=>{
                        return <option key={v4()} value={i+1}>{i+1}</option>
                    })}
                </select>
            </label>
            <button type="submit">Sort</button>
            <button type="reset">Reset</button>
        </form>
    )
}