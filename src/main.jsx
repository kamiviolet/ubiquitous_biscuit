import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/Theme.jsx'
import { CurrentUserProvider } from './contexts/CurrentUser.jsx'
import { AllUsersProvider } from './contexts/AllUsers.jsx'
import App from './App.jsx'
import ErrorPage from './ErrorPage'
import ListOfArticles from './routes/ListOfArticles'
import ListOfArticlesByTopic from './routes/ListOfArticlesByTopic'
import GetArticleByArticleId from './routes/GetArticleByArticleId'
import GetUserByUsername from './routes/GetUserByUsername.jsx'
import PostArticle from './routes/PostArticle.jsx'
import Login from './routes/Login'
import Signup from './routes/Signup.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ListOfArticles />
      },
      {
        path: "/articles",
        element: <ListOfArticles />
      },
      {
        path: "/articles/post",
        element: <PostArticle />
      },
      {
        path: "/articles/:article_id",
        element: <GetArticleByArticleId />
      },
      {
        path: "/topics/:topic_name",
        element: <ListOfArticlesByTopic />
      },
      {
        path: "/users/:username",
        element: <GetUserByUsername />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registration",
    element: <Signup />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AllUsersProvider>
        <CurrentUserProvider>
          <RouterProvider router={router} />
        </CurrentUserProvider>
      </AllUsersProvider>
    </ThemeProvider>
  </React.StrictMode>
)
