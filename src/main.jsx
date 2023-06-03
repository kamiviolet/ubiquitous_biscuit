import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './contexts/Theme.jsx'
import { UserProvider } from './contexts/User.jsx'
import { AllUsersProvider } from './contexts/AllUsers.jsx'
import App from './App.jsx'
import ErrorPage from './ErrorPage'
import ListOfAllArticles from '../src/routes/ListOfAllArticles'
import ListOfArticlesByTopic from '../src/routes/ListOfArticlesByTopic'
import GetArticleByArticleId from '../src/routes/GetArticleByArticleId'
import Login from '../src/routes/Login'
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
        element: <ListOfAllArticles />
      },
      {
        path: "/articles",
        element: <ListOfAllArticles />
      },
      {
        path: "/topics/:topic_name",
        element: <ListOfArticlesByTopic />
      },
      {
        path: "/articles/:article_id",
        element: <GetArticleByArticleId />
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
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </AllUsersProvider>
    </ThemeProvider>
  </React.StrictMode>
)
