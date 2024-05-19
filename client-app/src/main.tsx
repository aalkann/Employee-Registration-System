import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './page/Home Page/HomePage'
import MonitoringPage from './page/Monitoring Page/MonitoringPage'
import RegistrationPage from './page/Registration Page/RegistrationPage'

const router = createBrowserRouter([
  {path:'/', element: <HomePage />},
  {path:'/monitoring', element: <MonitoringPage />},
  {path:'/registration', element: <RegistrationPage />},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
