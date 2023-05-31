import { HiUser } from "react-icons/hi2";
import '../css/new_comment_form.css'

export default function NewCommentForm() {
    return (
        <form className="new_comment" role="new_comment_form">
            <div className="avatar" role="avatar"><HiUser /></div>
            <label for="username" className="username_label required">Username: </label>
            <input name="username" id="username" type="text" required/>
            <label for="comment" className="comment_label" >Comment: </label>
            <textarea id="comment" />
            <button type="submit">Add comment</button>
        </form>
    )
}