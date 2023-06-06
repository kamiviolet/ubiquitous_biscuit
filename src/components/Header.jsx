import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUser';
import ToggleTheme from './ThemeToggle'

export default function Header() {
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
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
            setCurrentUser({username: "", name: "", avatar_url: ""})
            localStorage.clear();
            alert('Now you have successfully signed out.')
        }
    }

    return (
        <header>
            <div className="header_wrapper">
                <Link to="/">Home</Link>
                <span> | </span>
                {(currentUser.username)? <>
                    <Link onClick={handleSignout}>Sign out</Link>
                    <span> | </span>
                    <Link to={"/users/"+currentUser.username}>My Profile</Link>
                </> : 
                <Link to="/login">Log in</Link>}
                <ToggleTheme />
                <p>{date}</p>
            </div>
            <Link className="header_banner" to="/"><h1>Ubiquitous Biscuit</h1></Link>
        </header>
    )
}