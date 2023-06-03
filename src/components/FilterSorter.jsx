import { useState } from 'react'
import '../css/filter_sorter.css'

export default function FilterSorter({params, setParams}) {

    function handleSorting(e) {
        e.preventDefault();
        setParams({sort_by: "created_at", order: "desc"})
    }

    return (
        <form id="filter_sorter" action="" onSubmit={handleSorting}>
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
                <select>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </label>
            <label>Jump to Page
                <select>
                    <option value="1">1</option>
                </select>
            </label>
        </form>
    )
}