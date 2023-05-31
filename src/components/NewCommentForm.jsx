import { HiUser } from "react-icons/hi2";

export default function NewCommentForm() {
    return (
        <form className="new_comment" role="new_comment_form">
            <div className="avatar" role="avatar"><HiUser /></div>
            <label for="username" className="username_label required">Username: </label>
            <input name="username" id="username" type="text" required/>
            <label for="comment" className="comment_label" >Comment: </label><textarea />
            <button type="submit">Add comment</button>
        </form>
    )
}