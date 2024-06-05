import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './styles/main.css'
import Profile from './pages/profile.jsx';
import Games from './pages/games.jsx';
import Home from './pages/home.jsx'
import PageNotFound from './pages/pageNotFound.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { index: true, element: <Home/>},
      { path: 'profile', element: <Profile/>},
      { path: 'games', element: <Games/>},
      { path: '*',element: <PageNotFound/>},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>  
  </React.StrictMode>,
)
