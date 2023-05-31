import '../css/list_of_comments.css'
import { fetchCommentsByArticleId } from '../../utils/utils'
import { useEffect, useState } from "react";
import ListOfComments from '../components/ListOfComments'
import NewCommentForm from '../components/NewCommentForm'


export default function CommentSection({article_id}) {
    const [listOfComments, setListOfComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
            <NewCommentForm />
            <ListOfComments listOfComments={listOfComments} />
        </section>
    )
}