import { Link } from 'react-router-dom'
import '../css/article_card.css'

export default function ArticleSummary({article}) {
    return (
        <>
            <p role="article_id" aria-hidden>{article.article_id}</p>
            <Link to={"articles/"+article.article_id}>
                <p role="title" aria-roledescription="title">{article.title}</p>
            </Link>
            <p role="author" aria-roledescription="author">{article.author}</p>
            <p role="date" aria-roledescription="created_at">{article.created_at}</p>
            <p className={article.topic} role="topic" aria-roledescription="under_topic">{article.topic}</p>
            <p className="stat" role="comment_no" aria-roledescription="number_of_comments">Comments: {article.comment_count}</p>
            <p className="stat" role="votes" aria-roledescription="number_of_votes">votes: {article.votes}</p>
        </>
    )
}