import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router';
import { router } from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <StrictMode>
      <App />
    </StrictMode>,
  </RouterProvider>
)
