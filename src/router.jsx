import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Area from "./components/Area/Area";
import Categories from "./components/Categories/Categories";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: 'categories',
                loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
                element: <Categories></Categories>
            },
            {
                path: 'area',
                element: <Area></Area>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'about',
                element: <About></About>
            }
        ]
    }

])