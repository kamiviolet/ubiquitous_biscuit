import { useParams } from "react-router-dom";
import ListOfArticles from './ListOfArticles'

export default function ListOfArticlesByTopic() {
    const { topic_name } = useParams();

    return (
        <ListOfArticles topic={topic_name} />
    )
}