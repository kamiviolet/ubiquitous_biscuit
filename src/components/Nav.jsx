import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getAllTopics } from '../../utils/utils'
import '../css/nav.css'

export default function Nav() {
    const [allTopics, setAllTopics] = useState([]);
    
    useEffect(() => {
        getAllTopics().then(({topics}) => setAllTopics(topics))
    }, [])

    return (
        <nav>
            <ul className="menuWrapper">
                {allTopics.map(topic => {
                    return (
                        <li className={"nav_item " + topic.slug} key={topic.slug} title={topic.description}>
                            <Link to={"topics/" + topic.slug}>{topic.slug}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}