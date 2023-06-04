import { Outlet } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './contexts/Theme';
import { AllUsersContext } from './contexts/AllUsers';
import { CurrentUserContext } from './contexts/CurrentUser';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Nav from '../src/components/Nav'
import { fetchAllUsers } from '../utils/utils'
import './App.css'

function App() {
  const { theme, setTheme } = useContext(ThemeContext)
  const { allUsers, setAllUsers } = useContext(AllUsersContext)
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  useEffect(() => {
    const loggedIn = localStorage.getItem('user');

    if (loggedIn) {
      setCurrentUser(JSON.parse(loggedIn))
    }
  }, [])

  useEffect(() => {
    fetchAllUsers().then(({users}) => setAllUsers(users))
}, [])

  return (
    <div id="theme" className={theme}>
      <div id="wrapper">
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
