import { HiUser } from "react-icons/hi2";
import { postNewCommentByArticleId, fetchUsers } from "../../utils/utils"
import { useEffect, useState } from 'react'
import '../css/new_comment_form.css'

export default function NewCommentForm({article_id, newComment, user, setNewComment, listOfComments, setListOfComments}) {
    const [allUsers, setAllUsers] = useState([]);
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

    useEffect(() => {
        fetchUsers().then(({users}) => setAllUsers(users))
    }, [])

    return (
        <form className="new_comment" role="new_comment_form" onSubmit={handleNewComment}>
            <div className="avatar" role="avatar"><HiUser /></div>
            <label htmlFor="author" className="author_label required">Username: </label>
            <select
                className="input_field"
                onChange={(e)=> setNewComment({...newComment, username: e.target.value})}
                name="author"
                id="author"
                type="text"
                value={newComment.username}
                disabled
            >
                <option value=""></option>
                {allUsers.map(user => <option value={user.username} key={user.username}>{user.username}</option>)}
            </select>
            <label htmlFor="comment" className="comment_label required" >Comment: </label>
            <textarea
                className="input_field"
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