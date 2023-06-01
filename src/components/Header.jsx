import { Link, useNavigate } from "react-router-dom"
import ToggleTheme from './ThemeToggle'

export default function Header() {
    const navigate = useNavigate();
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    const date = new Date().toLocaleString("en-GB", options);

    return (
        <header>
            <div className="header_wrapper">
                <Link to="/">Home</Link>
                <span> | </span>
                <Link>Login</Link>
                <ToggleTheme />
                <p>{date}</p>
            </div>
            <h1><Link to="/">NC-News</Link></h1>
        </header>
    )
}