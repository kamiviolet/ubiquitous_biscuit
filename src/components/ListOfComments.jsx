import { convertDate, deleteCommentByCommentId } from "../../utils/utils"
import UpvoteBtn from "../components/UpvoteBtn"
import { HiUser } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function listOfComments({currentUser, listOfComments, setListOfComments}) {
    const deleteComment = (e) => {
        deleteCommentByCommentId(+e.target.value)
            .then(()=> {
                setListOfComments((listOfComments)=>{
                    return listOfComments.filter(comment=>comment.comment_id !== +e.target.value)
                })
            })
            .then(()=>alert(`The comment has been deleted successfully.`))
    }

    return (
        <section className='list_of_comments'>
            <h3>Comments</h3>
            <ul>
                {listOfComments.map(comment => {
                    return (
                        <li key={"comment_" + comment.comment_id} className='comment_card'>
                            <div className="avatar" role="avatar"><HiUser /></div>
                            <p role="comment_id" aria-hidden>{comment.comment_id}</p>
                            <p role="comment_body" aria-roledescription="comment_body">{comment.body}</p>
                            <Link to={"/users/"+comment.author} role="author" aria-roledescription="author">{comment.author}</Link>
                            <p role="date" aria-roledescription="created_at">{convertDate(comment.created_at)}</p>
                            <UpvoteBtn role="vote" type="comment" id={comment.comment_id} votes={comment.votes} />
                            {currentUser === comment.author? <div role="delete"><button value={comment.comment_id} onClick={(e)=>deleteComment(e)}> X </button></div> : <></>}
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}