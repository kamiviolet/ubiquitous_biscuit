import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArticleByArticleId,fetchCommentsByArticleId } from '../../utils/utils'
import Article from "../components/Article";
import CommentSection from "../components/CommentSection";

import '../css/article.css'

export default function GetArticleByArticleId() {
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [listOfComments, setListOfComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticleByArticleId(article_id)
            .then(({article}) => setArticle(article))
            .then(()=> fetchCommentsByArticleId(article_id))
            .then(({comments}) => setListOfComments(comments))
            .then(()=>setIsLoading(false))
    }, [])

    if (isLoading) {
        return  <main>Loading...<br />Don't worry, it may take some time. Thank you for your patience.</main>
    }

    return (
        <main>
            <Article article={article} />
            <CommentSection listOfComments={listOfComments} />
        </main>
    )
}