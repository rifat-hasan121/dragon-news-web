import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/', Component: HomeLayout, children: [
            { index: true, Component: Home },
            {
                path: '/category/:id',
                Component: CategoryNews,
                loader: ()=> fetch('/news.json')
            }
    ]},
    { path: '/auth', element:<h2>Auth layout</h2>},
    { path: '/news', element:<h2>News layout</h2>},
    { path: '/*', element:<h2>Error 402</h2>}
])

export default router