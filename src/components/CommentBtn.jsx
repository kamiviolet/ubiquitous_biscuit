import { BsFillChatSquareDotsFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CommentBtn({link, comments}) {
    const navigate = useNavigate();
    
    return (
        <button
            onClick={()=>navigate(link)}
            role="comment_no"
            aria-roledescription="number_of_comments">
                <BsFillChatSquareDotsFill /> {comments}
            </button>
    )
}