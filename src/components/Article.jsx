import Subheader from "../components/Subheader";
import { convertDate } from "../../utils/utils"
import { useEffect, useState } from "react";
import { fetchArticleByArticleId } from '../../utils/utils'
import UpvoteBtn from "../components/UpvoteBtn"
import CommentBtn from "../components/CommentBtn"
import { Link, useNavigate } from "react-router-dom";


export default function Article({article_id}) {
    const navigate = useNavigate();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticleByArticleId(article_id)
            .then(({article}) => setArticle(article))
            .then(()=>setIsLoading(false))
    }, [])

    if (isLoading) {
        return  <div className='loading_page'>Loading...<br />Don't worry, it may take some time. Thank you for your patience.</div>
    }

    return (
        <>
            <article>
                <Link className="prevPage" onClick={()=>navigate(-1)}>Back to the list</Link>
                <Subheader title={article.title} />
                <p className={article.topic + " topics"} role="topic">{article.topic}</p>
                <p role="article_id">{article.article_id}</p>

                <p role="article_body">{article.body}</p>
                <p className="created_data">
                    <Link to={"/users/"+article.author} role="author">{article.author}</Link> | 
                    <span role="date"> {convertDate(article.created_at)}</span>
                </p>
                <div className="stat">
                    <CommentBtn link="#comments" comments={article.comment_count} />
                    <UpvoteBtn type="article" id={article.article_id} votes={article.votes} />
                </div>
            </article>
        </>
    )
}
