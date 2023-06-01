import { useParams } from "react-router-dom";
import ListOfAllArticles from './ListOfAllArticles'

export default function ListOfArticlesByTopic() {
    const {topic_name} = useParams();

    return (
        <ListOfAllArticles topic={topic_name} />
    )
}