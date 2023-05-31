import { HiUser } from "react-icons/hi2";
import { postNewCommentByArticleId } from "../../utils/utils"
import '../css/new_comment_form.css'

export default function NewCommentForm({article_id, newComment, setNewComment, listOfComments, setListOfComments}) {
    const handleNewComment = (e) => {
            e.preventDefault();
            postNewCommentByArticleId(article_id, newComment)
                .then(({comment}) => {
                    setNewComment({username: "", body: ""});
                    setListOfComments((listOfComments) => {
                        return [comment, ...listOfComments]
                    })
                })
    }

    return (
        <form className="new_comment" role="new_comment_form" onSubmit={handleNewComment}>
            <div className="avatar" role="avatar"><HiUser /></div>
            <label htmlFor="username" className="username_label required">Username: </label>
            <input value={newComment.username} onChange={(e)=> setNewComment({...newComment, username: e.target.value})} name="username" id="username" type="text" required/>
            <label htmlFor="comment" className="comment_label" >Comment: </label>
            <textarea value={newComment.body} onChange={(e)=> setNewComment({...newComment, body: e.target.value})} id="comment" />
            <button type="submit">Add comment</button>
        </form>
    )
}