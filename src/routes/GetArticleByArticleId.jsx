import { useParams } from "react-router-dom";
import Article from "../components/Article";
import CommentSection from "../components/CommentSection";

import '../css/article.css'

export default function GetArticleByArticleId() {
    const {article_id} = useParams();

    return (
        <main>
            <Article article_id={article_id} />
            <CommentSection article_id={article_id} />
        </main>
    )
}