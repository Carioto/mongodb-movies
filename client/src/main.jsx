import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Error from './pages/Error';
import Home from './pages/Home.jsx';
import Search from './pages/Search.jsx';
import Login from './pages/Login.jsx';
import Random from './pages/Random.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
      index: true,
      element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/random',
        element: <Random />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  }
])





ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />   
)
