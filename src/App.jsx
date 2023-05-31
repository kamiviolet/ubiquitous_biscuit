import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ListOfAllArticles from './routes/ListOfAllArticles'
import ListOfArticlesByTopic from './routes/ListOfArticlesByTopic'
import GetArticleByArticleId from './routes/GetArticleByArticleId'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Routes >
        <Route path={"/"} element={<ListOfAllArticles />}></Route>
        <Route path="/topics/:topic_name" element={<ListOfArticlesByTopic />}></Route>
        <Route path="/articles/:article_id" element={<GetArticleByArticleId />}></Route>        
      </Routes>
      <Footer />
    </>
  )
}

export default App
