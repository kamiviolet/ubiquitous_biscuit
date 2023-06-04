import { useNavigate } from "react-router-dom";


export default function PrevPageBtn({innerText}) {
    const navigate = useNavigate();

    return <p className="prevPage" onClick={()=>navigate(-1)}>{innerText}</p>
}