import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUser';
import PrevPageBtn from '../components/PrevPageBtn';
import { getUserByUsername, updateUserByUsername } from '../../utils/utils'
import { HiUser } from "react-icons/hi2";
import '../css/profile.css'

export default function GetUserByUsername() {
    const navigate = useNavigate();
    const { username } = useParams();
    const [ userProfile, setUserProfile ] = useState({});
    const { currentUser, setCurrentUser} = useContext(CurrentUserContext);
    const [ toEdit, setToEdit ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    useEffect(()=>{
        getUserByUsername(username).then(({user}) => setUserProfile({...user}))
    }, [username])
    
    const handleEditUser = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        updateUserByUsername(userProfile)
            .then(({user})=>{
                alert(`Your profile is updated!\n\n(You will be redirected back to profile in)`)
            })
            .then(()=>{
                setTimeout(()=>{
                    setToEdit(false)
                    setIsSubmitted(false);
                }, 3000)
            })
    }

    return (
        <main>
            <div className="user_profile_background">
            {
                toEdit
                ? <>
                <form id="edit_profile" onSubmit={handleEditUser}>
                    <label className='username_label' htmlFor="username">Username</label>
                    <input
                        value={userProfile.username}
                        id="username"
                        type="text"
                        disabled
                    />
                    <label className='name_label' htmlFor="name">Name</label>
                    <input
                        value={userProfile.name}
                        id="name"
                        type="text"
                        onChange={(e)=>setUserProfile({...userProfile, name: e.target.value})}
                        disabled={isSubmitted? true : false}
                    />
                    <label className='avatar_label' htmlFor="avatar">Avatar_url</label>
                    <input
                        value={userProfile.avatar_url}
                        id="avatar"
                        type="url"
                        placeholder="https://"
                        onChange={(e)=>setUserProfile({...userProfile, avatar_url: e.target.value})}
                        disabled={isSubmitted? true : false}
                    />
                    <button type="submit">Confirm</button>
                </form>
                </>
                : <>
                    <div className="user_profile">
                    {
                        userProfile.avatar_url
                        ? <img role="avatar" src={userProfile.avatar_url} />
                        : <div role="avatar" className='default_avatar'><HiUser /></div>
                    }
                    <div className='profile_wrapper'>
                        <p role="label">Username</p><p>{userProfile.username}</p>
                        <p role="label">Name</p><p>{userProfile.name}</p>
                        {
                            currentUser.username === username
                            ? <button onClick={()=>setToEdit(true)}>Edit profile</button>
                            : <></>
                        }
                    </div>
                </div>
                </>
            }
            </div>

            <PrevPageBtn innerText="Return to previous page" />
        </main>
    )
    
} 