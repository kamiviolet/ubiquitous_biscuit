import { Link } from 'react-router-dom'
import UpvoteBtn from "../components/UpvoteBtn"
import CommentBtn from "../components/CommentBtn"

export default function ArticleSummary({topic, article}) {
    return (
        <>
            <p role="article_id" aria-hidden>{article.article_id}</p>
            <Link to={topic? "../../articles/"+article.article_id : "articles/"+article.article_id}>
                <p role="title" aria-roledescription="title">{article.title}</p>
            </Link>
            <p role="author" aria-roledescription="author">{article.author}</p>
            <p role="date" aria-roledescription="created_at">{article.created_at}</p>
            <p className={article.topic} role="topic" aria-roledescription="under_topic">{article.topic}</p>
            <div className="stat">
                <CommentBtn link={"articles/"+article.article_id+"#comments"} comments={article.comment_count} />
                <UpvoteBtn type="article" id={article.article_id} votes={article.votes} />            </div>
        </>
    )
}