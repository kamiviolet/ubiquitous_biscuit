import { useEffect, useState } from 'react'
import Subheader from '../components/Subheader'
import ArticleSummary from '../components/ArticleSummary'
import { getAllArticles } from '../../utils/utils'
import '../css/list_of_articles.css'

export default function ListOfAllArticles() {
    const [listOfArticles, setListOfArticles] = useState([]);
    useEffect(() => {getAllArticles().then(({articles}) => setListOfArticles(articles))}, []);
    
    return (
        <main>
            <Subheader title="All articles" />
            <ul className='list_of_articles'>
                {
                    (!listOfArticles) ? <></>
                    : listOfArticles.map(article => {
                        return (<li key={article.id} className='article_card'><ArticleSummary article={article}/></li>)
                    })
                }
            </ul>
        </main>
    )
}