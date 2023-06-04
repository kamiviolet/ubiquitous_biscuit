import { Link } from 'react-router-dom'
import UpvoteBtn from "../components/UpvoteBtn"
import CommentBtn from "../components/CommentBtn"

export default function ArticleSummary({topic, article}) {
    return (
        <>
            <Link className='article_card_wrapper' to={topic? "../../articles/"+article.article_id : "articles/"+article.article_id}>
                <p role="article_id" aria-hidden>{article.article_id}</p>
                <p role="title" aria-roledescription="title">{article.title}</p>
                <p role="author" aria-roledescription="author">{article.author}</p>
                <p role="date" aria-roledescription="created_at">{article.created_at}</p>
                <p className={article.topic + " topics"}  role="topic" aria-roledescription="under_topic">{article.topic}</p>
            </Link>
            <Link role="article_img" to={topic? "../../articles/"+article.article_id : "articles/"+article.article_id}>
                <img src={article.article_img_url} alt={article.title} />
            </Link>

            <div className="stat">
                <CommentBtn link={"/articles/"+article.article_id+"#comments"} comments={article.comment_count} />
                <UpvoteBtn type="article" id={article.article_id} votes={article.votes} />            </div>
        </>
    )
}