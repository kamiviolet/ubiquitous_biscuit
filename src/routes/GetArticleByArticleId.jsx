import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticleByArticleId } from '../../utils/utils'
import Subheader from "../components/Subheader";
import '../css/article.css'

export default function GetArticleByArticleId() {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticleByArticleId(article_id).then(({article}) => setArticle(article)).then(()=>setIsLoading(false))
    }, [])

    if (isLoading) {
        return  <main>Loading...<br />Thank you for your patience.</main>
    }

    return (
        <main>
            <article>
                <Subheader title={article.title} />
                <p role="topic">{article.topic}</p>
                <p role="article_id">{article.article_id}</p>

                <p role="article_body">{article.body}</p>
                <p className="created_data">
                    <span role="author">{article.author} | </span>
                    <span role="date">{article.created_at}</span>
                </p>
                <p className="stat">
                    <span role="votes">votes: {article.votes} | </span>
                    <span role="comment_no">comments: {article.comment_count}</span>
                </p>
            </article>
        </main>
    )
}