import { HiUser } from "react-icons/hi2";
import { postNewCommentByArticleId } from "../../utils/utils"
import { useState } from 'react'
import '../css/new_comment_form.css'

export default function NewCommentForm({article_id, newComment, user, setNewComment, listOfComments, setListOfComments}) {
    const [posting, setPosting] = useState(false);

    const handleNewComment = (e) => {
            e.preventDefault();
            setPosting(true)

            postNewCommentByArticleId(article_id, newComment)
                .then(({comment}) => {
                    setNewComment({username: user, body: ""});
                    setListOfComments((listOfComments) => [comment, ...listOfComments])
                })
                .then(() => {
                    setPosting(false)
                })
                .catch((err) => {
                    return <div>Sorry, the comment is not posted at the moment. {err.message}</div>
                })
    }

    return (
        <form className="new_comment" role="new_comment_form" onSubmit={handleNewComment}>
            <div className="avatar" role="avatar"><HiUser /></div>
            <label htmlFor="author" className="author_label required">
                Username: {newComment.username === "" ? <span className="warning">(Please log in to use comment function)</span> : <></>}</label>
            <input
                className="input_field author"
                name="author"
                id="author"
                type="text"
                value={newComment.username}
                disabled
            />
            <label htmlFor="comment" className="comment_label required" >Comment: </label>
            <textarea
                className="input_field comment_body"
                value={newComment.body}
                onChange={(e)=> setNewComment({...newComment, body: e.target.value})}
                id="comment"
                disabled={posting? true: false} 
                required
            />
            <button disabled={posting? true: false} className="submit_btn" type="submit">Add comment</button>
        </form>
    )
}