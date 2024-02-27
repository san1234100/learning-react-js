import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/about',
        element:<AboutPage/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/about/:name',  //To get value from url
        element:<AboutPage/>,
        errorElement:<ErrorPage/>
      },
      {
        path:'/contact',
        element:<ContactPage/>,
        errorElement:<ErrorPage/>
      }
    ],
    errorElement:<ErrorPage/>
  } 
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
