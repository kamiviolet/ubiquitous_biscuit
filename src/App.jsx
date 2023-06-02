import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './contexts/Theme';
import { UserContext } from './contexts/User';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Nav from '../src/components/Nav'
import './App.css'

function App() {
  const {theme, setTheme} = useContext(ThemeContext)
  const {user, setUser} = useContext(UserContext)

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
