import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Styles
import 'primeicons/primeicons.css';
import './index.css'

// React Router
import Tasks from './Pages/Tasks/Index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tasks/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
