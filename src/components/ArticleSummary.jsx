import { Link } from 'react-router-dom'
import UpvoteBtn from "../components/UpvoteBtn"
import CommentBtn from "../components/CommentBtn"
import { deleteArticleByArticleId } from '../../utils/utils'

export default function ArticleSummary({topic, article, currentUser, setListOfArticles}) {
    const deleteArticle = (e) => {
        deleteArticleByArticleId(e.target.value)
            .then((d)=> {
                if (d.status === 204) {
                    alert(`The article has been deleted successfully.`)
                    setListOfArticles((listOfArticles)=>{
                        return listOfArticles.filter(article=>article.article_id !== +e.target.value)
                    })
                } else {
                    alert(`Sorry, please try again.`)
                }
            })
            .catch(err=>err.message)
    }
    
    return (
        <>
            <p role="article_id" aria-hidden>{article.article_id}</p>
            <Link className='article_card_wrapper' to={topic? "../../articles/"+article.article_id : "articles/"+article.article_id}>
                <p role="title" aria-roledescription="title">{article.title}</p>
                <p role="author" aria-roledescription="author">{article.author}</p>
                <p role="date" aria-roledescription="created_at">{article.created_at}</p>
                <p className={article.topic + " topics"}  role="topic" aria-roledescription="under_topic">{article.topic}</p>
            </Link>
            <Link role="article_img_container" to={topic? "../../articles/"+article.article_id : "articles/"+article.article_id}>
                <img className='article_img' src={article.article_img_url} alt={article.title} />
            </Link>
            <div className="stat">
                <CommentBtn link={"/articles/"+article.article_id+"#comments"} comments={article.comment_count} />
                <UpvoteBtn type="article" id={article.article_id} votes={article.votes} />
                {
                    currentUser.username === article.author
                    ? <div role="delete"><button value={article.article_id} onClick={(e)=>deleteArticle(e)}> X </button></div>
                    : <></>
                }
            </div>

        </>
    )
}