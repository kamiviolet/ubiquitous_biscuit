import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/CurrentUser';
import Footer from '../components/Footer';
import PrevPageBtn from '../components/PrevPageBtn';
import { getUserByUsername } from '../../utils/utils'
import '../css/login.css'

export default function Login() {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext)
    const [loginUser, setLoginUser] = useState("")
    const [hasAccount, setHasAccount] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();

        getUserByUsername(loginUser)
        .then(({user}) => {
            if(user) {
                        setCurrentUser(user)
                        localStorage.setItem('user', JSON.stringify(user))
                        setHasAccount(true)
                    }
                })
                .catch((err) => {
                    setHasAccount(false)
                })
            }    

    return (
        <>
        <main id="login_page">
            <div className='login_wrapper'>
                <h1>Ubiquitous Biscuits</h1>
                <div className='login_container'>
                    {
                        (hasAccount===true)
                        ? <></>
                        : <>
                        <form id="login_form" onSubmit={handleLogin}>
                            <label className='username_label required' htmlFor="username">Username</label>
                            <input
                                value={loginUser}
                                id="username"
                                type="text"
                                onChange={(e)=>{
                                    setLoginUser(e.target.value)
                                }}
                                required
                            />
                            <button type="submit">Login</button>
                        </form>
                        <Link to="/registration" className="link_signup">New to our site? Please sign up to join the community!</Link>
                        </>
                }
                {
                    (hasAccount===false)
                    ? <div className='login_message not_existing_user'>Cannot find the user with username. Please signup to join our community.</div>
                    : (hasAccount===true)? <div className='login_message'>Thank you.<br/>you may now return to <PrevPageBtn innerText="the previous page" />.</div>
                    : <></>
                }
                <Link to="/" className="back_to_home">return to home</Link>
            </div>
            </div>
        </main>
        <Footer />
        </>
    )
}