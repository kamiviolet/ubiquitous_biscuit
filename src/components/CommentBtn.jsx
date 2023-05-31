import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function CommentBtn({link, comments}) {
    return (
        <Link to={link} role="comment_no" aria-roledescription="number_of_comments"><BsFillChatSquareDotsFill /> {comments}</Link>
    )
}