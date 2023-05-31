import Subheader from "../components/Subheader";
import {convertDate} from "../../utils/utils"

export default function Article({article}) {
    return (
        <>
            <article>
                <Subheader title={article.title} />
                <p className={article.topic} role="topic">{article.topic}</p>
                <p role="article_id">{article.article_id}</p>

                <p role="article_body">{article.body}</p>
                <p className="created_data">
                    <span role="author">{article.author} | </span>
                    <span role="date">{convertDate(article.created_at)}</span>
                </p>
                <p className="stat">
                    <span role="votes">Upvotes {article.votes} | </span>
                    <span role="comment_no">comments {article.comment_count}</span>
                </p>
            </article>
        </>
    )
}