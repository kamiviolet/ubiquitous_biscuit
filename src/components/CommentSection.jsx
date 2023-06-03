import '../css/list_of_comments.css'
import { fetchCommentsByArticleId } from '../../utils/utils'
import { useContext, useEffect, useState } from 'react'
import ListOfComments from '../components/ListOfComments'
import NewCommentForm from '../components/NewCommentForm'
import { CurrentUserContext } from '../contexts/CurrentUser';


export default function CommentSection({article_id}) {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [listOfComments, setListOfComments] = useState([]);
    const [newComment, setNewComment] = useState({
        username: currentUser.username,
        body: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCommentsByArticleId(article_id)
            .then(({comments}) => setListOfComments(comments))
            .then(()=>setIsLoading(false))
    }, [])

    if (isLoading) {
        return  <div className='loading_page'>Fetching comments...</div>
    }

    return (
        <section id="comments" role="comment_section">
            <NewCommentForm
                user={currentUser.username}
                article_id={article_id}
                newComment={newComment}
                listOfComments={listOfComments}
                setNewComment={setNewComment}
                setListOfComments={setListOfComments}
            />
            <ListOfComments
                currentUser={currentUser.username}
                listOfComments={listOfComments}
                setListOfComments={setListOfComments}
            />
        </section>
    )
}