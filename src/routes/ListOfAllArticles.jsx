import { useEffect, useState } from 'react'
import Subheader from '../components/Subheader'
import ArticleSummary from '../components/ArticleSummary'
import { getAllArticles } from '../../utils/utils'
import '../css/list_of_articles.css'

export default function ListOfAllArticles() {
    const [listOfArticles, setListOfArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllArticles().then(({articles}) => setListOfArticles(articles)).then(() => setIsLoading(false))
    }, []);
    
    if (isLoading) {
        return  <div className='loading_page'>Loading...<br />Thank you for your patience.</div>
    }

    return (
        <main>
            <Subheader title="All articles" />
            <ul className='list_of_articles'>
                {
                    (!listOfArticles) ? <></>
                    : listOfArticles.map(article => {
                        return (<li key={"article_" + article.article_id} className='article_card'><ArticleSummary article={article}/></li>)
                    })
                }
            </ul>
        </main>
    )
}