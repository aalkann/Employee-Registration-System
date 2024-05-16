import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './page/Home Page/HomePage.jsx'
import RegistrationPage from './page/Registration Page/RegistrationPage.jsx'
import MonitoringPage from './page/Monitoring Page/MonitoringPage.jsx'
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/registration', element: <RegistrationPage /> },
  { path: '/monitoring', element: <MonitoringPage /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
