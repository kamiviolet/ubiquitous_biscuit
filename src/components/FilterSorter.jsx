import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import '../css/filter_sorter.css'

export default function FilterSorter() {
    const navigate = useNavigate();
    const [params, setParams] = useState({sort_by: "created_at", order: "desc"})

    function handleSorting(e) {
        e.preventDefault();
        // navigate({ pathname: '/articles', search: `?sort_by=${params.sort_by}&order=${params.order}`})
    }

    return (
        <form id="filter_sorter" action="" onSubmit={handleSorting}>
            <label htmlFor="sort">Sort By
                <select name="sort_by" onChange={(e)=>setParams({...params, sort_by: e.target.value})}>
                    <option value="created_at">Date created</option>
                    <option value="comment_count">comment count</option>
                    <option value="votes">votes</option>
                </select>
            </label>
            <label htmlFor="order">Order By
            <select name="order" onChange={(e)=>setParams({...params, order: e.target.value})}>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}