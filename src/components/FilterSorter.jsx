import { useSearchParams } from 'react-router-dom';
import { useState } from 'react'
import '../css/filter_sorter.css'

export default function FilterSorter({params, setParams}) {
    const [sort, setSort] = useState('');
    const [order, setOrder] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    function handleSorting(e) {
        e.preventDefault();
        setParams({
            sort_by: sort, order: order
        })
        setSearchParams(params);
    }

    return (
        <form id="filter_sorter" action="" onSubmit={handleSorting}>
            <label htmlFor="sort">Sort By
                <select name="sort_by" onChange={(e)=>setSort(e.target.value)}>
                    <option value="created_at">Date created</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>
            </label>
            <label htmlFor="order">Order By
            <select name="order" onChange={(e)=>setOrder(e.target.value)}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}