import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FollowersPage from './pages/FollowersPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Admin from './layouts/Admin.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'

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
      },{
        path:'/followers',
        element:<FollowersPage/>,
        errorElement:<ErrorPage/>
      }
    ],
    errorElement:<ErrorPage/>
  } ,
  {
    path:'/admin',
    element:<Admin/>,
    children:[
      {
        path:'login',
        element: <div>Login Page</div>
      },
      {
        path:'dashboard',
        element: <Dashboard/>
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
