import { useParams } from "react-router-dom";

export default function ListOfArticlesByTopic() {
    const {topic_name} = useParams();
    console.log(topic_name)
}