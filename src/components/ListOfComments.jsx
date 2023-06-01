import { convertDate } from "../../utils/utils"
import UpvoteBtn from "../components/UpvoteBtn"

export default function listOfComments({listOfComments}) {
    return (
        <section className='list_of_comments'>
            <h3>Comments</h3>
            <ul>
                {listOfComments.map(comment => {
                    return (
                        <li key={"comment_" + comment.comment_id} className='comment_card'>
                            <p role="comment_id" aria-hidden>{comment.comment_id}</p>
                            <p role="comment_body" aria-roledescription="comment_body">{comment.body}</p>
                            <p role="author" aria-roledescription="author">{comment.author}</p>
                            <p role="date" aria-roledescription="created_at">{convertDate(comment.created_at)}</p>
                            <UpvoteBtn type="comment" id={comment.comment_id} votes={comment.votes} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}