import '../css/list_of_comments.css'
import { fetchCommentsByArticleId } from '../../utils/utils'
import { useContext, useEffect, useState } from 'react'
import ListOfComments from '../components/ListOfComments'
import NewCommentForm from '../components/NewCommentForm'
import { UserContext } from '../contexts/User';

export default function CommentSection({article_id}) {
    const { user, setUser } = useContext(UserContext);
    const [listOfComments, setListOfComments] = useState([]);
    const [newComment, setNewComment] = useState({
        username: user,
        body: ""
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCommentsByArticleId(article_id)
            .then(({comments}) => setListOfComments(comments))
            .then(()=>setIsLoading(false))
    }, [])

    if (isLoading) {
        return  <div className='loading_page'>Loading...<br />Don't worry, it may take some time. Thank you for your patience.</div>
    }

    return (
        <section id="comments" role="comment_section">
            <NewCommentForm
                user={user}
                article_id={article_id}
                newComment={newComment}
                listOfComments={listOfComments}
                setNewComment={setNewComment}
                setListOfComments={setListOfComments}
            />
            <ListOfComments listOfComments={listOfComments} />
        </section>
    )
}