import { useEffect, useState } from 'react'
import FilterSorter from '../components/FilterSorter'
import ArticleSummary from '../components/ArticleSummary'
import { getAllArticles } from '../../utils/utils'
import '../css/list_of_articles.css'

export default function ListOfAllArticles({topic}) {
    const [listOfArticles, setListOfArticles] = useState([]);
    const [params, setParams] = useState({sort_by: "created_at", order: "desc"})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllArticles(topic, params)
            .then(({articles}) => setListOfArticles(articles))
            .then(() => setIsLoading(false))
    }, [topic, params]);

    if (isLoading) {
        return  <div className='loading_page'>Loading...<br />Thank you for your patience.</div>
    }

    return (
        <main>
            <FilterSorter params={params} setParams={setParams} />
            <ul className='list_of_articles'>
                {
                    (!listOfArticles) ? <></>
                    : listOfArticles.map(article => {
                        return (
                            <li key={"article_" + article.article_id} className='article_card'>
                                <ArticleSummary topic={topic} article={article}/>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}