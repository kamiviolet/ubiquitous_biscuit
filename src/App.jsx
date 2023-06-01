import { Routes, Route } from 'react-router-dom';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Nav from '../src/components/Nav'
import ErrorPage from './ErrorPage'
import ListOfAllArticles from '../src/routes/ListOfAllArticles'
import ListOfArticlesByTopic from '../src/routes/ListOfArticlesByTopic'
import GetArticleByArticleId from '../src/routes/GetArticleByArticleId'
import './App.css'
import { useContext } from 'react';
import { ThemeContext } from './contexts/Theme';

function App() {
  const {theme, setTheme} = useContext(ThemeContext)

  return (
    <div id="theme" className={theme}>
      <div id="wrapper">
        <Header />
        <Nav />
        <Routes >
          <Route path="/" element={<ListOfAllArticles />} errorElement={<ErrorPage />}></Route>
          <Route path="/articles" element={<ListOfAllArticles />} errorElement={<ErrorPage />}></Route>
          <Route path="/topics/:topic_name" element={<ListOfArticlesByTopic />} errorElement={<ErrorPage />}></Route>
          <Route path="/articles/:article_id" element={<GetArticleByArticleId />} errorElement={<ErrorPage />}></Route>        
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App
