import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import Footer from "../components/Footer"
import {createNewUser} from '../../utils/utils'

export default function Signup() {
    const [newUser, setNewUser] = useState({
        username: "",
        name: "",
        avatar_url: ""
    })

    const handleCreateNewUser = (e) => {
        e.preventDefault();
        createNewUser(newUser).then(()=> {
            console.log('hhahahah')
            alert('Congratulations, You have succesfully signed up!')
        })
    }

    return (
        <>
        <main id="signup_page">
            <div className='login_wrapper'>
                <h1>Ubiquitous Biscuits</h1>
                <div className='login_container'>
                <form id="registration_form" onSubmit={handleCreateNewUser}>
                    <label className='username_label required' htmlFor="username">Username</label>
                    <input
                        value={newUser.username}
                        id="username"
                        type="text"
                        onChange={(e)=>setNewUser({...newUser, username: e.target.value})}
                        required
                    />
                    <label className='name_label required' htmlFor="name">Name</label>
                    <input
                        value={newUser.name}
                        id="name"
                        type="text"
                        onChange={(e)=>setNewUser({...newUser, name: e.target.value})}
                        required
                    />
                    <label className='avatar_label' htmlFor="avatar">Avatar_url</label>
                    <input
                        value={newUser.avatar_url}
                        id="avatar"
                        type="url"
                        placeholder="https://"
                        onChange={(e)=>setNewUser({...newUser, avatar_url: e.target.value})}
                    />
                    <button type="submit">Sign up</button>
                </form>
                <Link to="/" className="back_to_home">return to home</Link>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}