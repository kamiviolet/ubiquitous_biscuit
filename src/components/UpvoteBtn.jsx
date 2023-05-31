import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { updateVotesByArticleId, updateVotesByCommentId } from "../../utils/utils"
import { useState } from "react";
import "../css/upvote_btn.css"

export default function UpvoteBtn({type, id, votes}) {
    const [currVotes, setCurrVotes] = useState(votes);
    const [haveVoted, setHaveVoted] = useState(false);
    
    const handleVotes = () => {
        if (haveVoted) {
            setHaveVoted(false);
            setCurrVotes((currVotes) => currVotes - 1)

            if (type === "article") {
                updateVotesByArticleId(id, -1).then(({article}) => setCurrVotes(article.votes))
            }
            if (type === "comment") {
                updateVotesByCommentId(id, -1).then(({comment}) => setCurrVotes(comment.votes))
            }
        } else {
            setHaveVoted(true);
            setCurrVotes((currVotes) => currVotes + 1)

            if (type === "article") {
                updateVotesByArticleId(id, 1).then(({article}) => setCurrVotes(article.votes))
            }
            if (type === "comment") {
                updateVotesByCommentId(id, 1).then(({comment}) => setCurrVotes(comment.votes))
            }
        }
    }

    return (
        <button className={(haveVoted)? "voted" : "default"} role="votes" aria-roledescription="number_of_votes" onClick={handleVotes}><BsFillHandThumbsUpFill /> {currVotes}</button>
    )
}