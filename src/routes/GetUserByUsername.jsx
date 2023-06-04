import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUser';
import PrevPageBtn from '../components/PrevPageBtn';
import { getUserByUsername } from '../../utils/utils'
import '../css/profile.css'

export default function GetUserByUsername() {
    const { username } = useParams();
    const [ userProfile, setUserProfile ] = useState({})
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext);

    useEffect(()=>{
        getUserByUsername(username).then(({user}) => setUserProfile({...user}))
    }, [username])
    
    return (
        <main>
            <div className="user_profile">
                <img role="avatar" src={userProfile.avatar_url} />
                <div className='profile_wrapper'>
                    <p role="label">Username</p><p>{userProfile.username}</p>
                    <p role="label">Name</p><p>{userProfile.name}</p>
                    {currentUser.username === username ? <button>Edit profile</button> : <></>}
                </div>
            </div>
            <PrevPageBtn innerText="Return to previous page" />
        </main>
    )
    
} 