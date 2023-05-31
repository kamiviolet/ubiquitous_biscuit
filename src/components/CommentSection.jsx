import '../css/list_of_comments.css'
import {convertDate} from "../../utils/utils"

export default function CommentSection({listOfComments}) {
    
    return (
        <section id="comments" role="comment_section">
            <h3>Comments</h3>
            <ul className='list_of_comments'>
                {listOfComments.map(comment => {
                    return (
                        <li key={"comment_" + comment.comment_id} className='comment_card'>
                            <p role="comment_id" aria-hidden>{comment.comment_id}</p>
                            <p role="comment_body" aria-roledescription="comment_body">{comment.body}</p>
                            <p role="author" aria-roledescription="author">{comment.author}</p>
                            <p role="date" aria-roledescription="created_at">{convertDate(comment.created_at)}</p>
                            <p className="stat" role="votes" aria-roledescription="number_of_votes">votes: {comment.votes}</p>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}