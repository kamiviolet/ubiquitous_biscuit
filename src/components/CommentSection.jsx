import '../css/list_of_comments.css'
import {convertDate} from "../../utils/utils"
import UpvoteBtn from "../components/UpvoteBtn"
import { fetchCommentsByArticleId } from '../../utils/utils'
import { useEffect, useState } from "react";

export default function CommentSection({article_id}) {
    const [listOfComments, setListOfComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchCommentsByArticleId(article_id)
            .then(({comments}) => setListOfComments(comments))
            .then(()=>setIsLoading(false))
    }, [])

    if (isLoading) {
        return  <div id="loading_page">Loading...<br />Don't worry, it may take some time. Thank you for your patience.</div>
    }

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
                            <UpvoteBtn votes={comment.votes} />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}