import { Link } from "react-router-dom"
import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import ToggleTheme from './ThemeToggle'

export default function Header() {
    const {user, setUser} = useContext(UserContext)
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    const date = new Date().toLocaleString("en-GB", options);

    const handleSignout = () => {
        const signoutConfirmation = confirm('Are you sure to sign out?');
        if (signoutConfirmation) {
            setUser("")
            alert('Now you have successfully signed out.')
        }
    }

    return (
        <header>
            <div className="header_wrapper">
                <Link to="/">Home</Link>
                <span> | </span>
                {(user)? <Link onClick={handleSignout}>Sign out</Link> : 
                <Link to="/login">Log in</Link>}
                <ToggleTheme />
                <p>{date}</p>
            </div>
            <h1>Ubiquitous Biscuits</h1>
        </header>
    )
}