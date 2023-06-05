import { useEffect, useState } from "react";
import { fetchArticleByArticleId, deleteArticleByArticleId, convertDate } from '../../utils/utils'
import Subheader from "../components/Subheader";
import UpvoteBtn from "../components/UpvoteBtn"
import CommentBtn from "../components/CommentBtn"
import PrevPageBtn from "./PrevPageBtn";
import { Link, useNavigate } from "react-router-dom";


export default function Article({currentUser, article_id}) {
    const navigate = useNavigate()
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticleByArticleId(article_id)
            .then(({article}) => setArticle(article))
            .then(()=>setIsLoading(false))
    }, [])

    const deleteArticle = (e) => {
        deleteArticleByArticleId(e.target.value)
            .then((d)=>{
                if (d.status === 204) {
                    alert(`The article has been deleted successfully.`)
                } else {
                    alert(`Sorry, please try again.`)
                }
            })
            .then(()=> {
                navigate('/')
            })
    }
    
    if (isLoading) {
        return  <div className='loading_page'>Loading...<br />Don't worry, it may take some time. Thank you for your patience.</div>
    }

    return (
        <>
            <article>
                <PrevPageBtn innerText="Back to the list" />
                <Subheader title={article.title} />
                <img src={article.article_img_url} alt={article.title} />
                    <p className={article.topic + " topics"} role="topic">{article.topic}</p>
                    <p role="article_id">{article.article_id}</p>

                    <p role="article_body">{article.body}</p>
                    <p className="created_data">
                        <Link to={"/users/"+article.author} role="author">{article.author}</Link> | 
                        <span role="date"> {convertDate(article.created_at)}</span>
                    </p>
                    <div className="stat">
                    {
                        currentUser.username === article.author
                        ? <div role="delete"><button value={article.article_id} onClick={(e)=>deleteArticle(e)}> X </button></div>
                        : <></>
                    }
                        <CommentBtn link="#comments" comments={article.comment_count} />
                        <UpvoteBtn type="article" id={article.article_id} votes={article.votes} />
                    </div>
            </article>
        </>
    )
}
