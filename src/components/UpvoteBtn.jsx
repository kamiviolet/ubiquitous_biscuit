import { BsFillHandThumbsUpFill } from "react-icons/bs";

export default function UpvoteBtn({votes, setvotes}) {
    const handleVotes = () => {
        setvotes((votes) => {votes + 1})
    }

    return (
        <button role="votes" aria-roledescription="number_of_votes" onClick={handleVotes}><BsFillHandThumbsUpFill /> {votes}</button>
    )
}