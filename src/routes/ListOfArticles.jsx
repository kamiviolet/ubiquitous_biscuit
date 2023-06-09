import { useEffect, useState, useContext } from 'react'
import { CurrentUserContext } from '../contexts/CurrentUser';
import FilterSorter from '../components/FilterSorter'
import ArticleSummary from '../components/ArticleSummary'
import Pagination from '../components/Pagination'
import PostArticle from '../routes/PostArticle'
import { getAllArticles } from '../../utils/utils'
import '../css/list_of_articles.css'
import { v4 } from 'uuid'

export default function ListOfArticles({topic}) {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [listOfArticles, setListOfArticles] = useState([]);
    const [totalCountOfArticles, setTotalCountOfArticles] = useState(0);
    const [params, setParams] = useState({sort_by: "created_at", order: "desc", p: 1, limit: 10})
    const [isLoading, setIsLoading] = useState(true)
   
    useEffect(() => {
        getAllArticles(topic, params)
            .then(({articles, total_count}) => {
                setListOfArticles(articles)
                setTotalCountOfArticles(total_count)
            })
            .then(() => setIsLoading(false))
    }, [topic, params]);

    if (isLoading) {
        return  <div className='loading_page'>Loading...<br />Thank you for your patience.</div>
    }
    return (
        <main>
            <FilterSorter
                total_count={totalCountOfArticles}
                params={params}
                setParams={setParams}
            />
            <ul className='list_of_articles'>
                {
                    (!listOfArticles) ? <></>
                    : listOfArticles.map(article => {
                        return (
                            <li key={v4()} className='article_card'>
                                <ArticleSummary
                                    topic={topic}
                                    article={article}
                                    setListOfArticles={setListOfArticles}
                                    currentUser={currentUser}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <Pagination
                total_count={totalCountOfArticles}
                params={params}
                setParams={setParams}
            />
            <PostArticle
                currentUser={currentUser}
                topic={topic}
                listOfArticles={listOfArticles}
                setListOfArticles={setListOfArticles}
            />
        </main>
    )
}