import { useContext } from 'react'
import { useParams } from "react-router-dom";
import Article from "../components/Article";
import CommentSection from "../components/CommentSection";
import { CurrentUserContext } from '../contexts/CurrentUser';

import '../css/article.css'

export default function GetArticleByArticleId() {
    const {article_id} = useParams();
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    return (
        <main>
            <Article currentUser={currentUser} article_id={article_id} />
            <CommentSection currentUser={currentUser} article_id={article_id} />
        </main>
    )
}