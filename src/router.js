import Home from "./pages/Home 1/Home";
import Home2 from "./pages/Home 2/Home2";
import Home3 from "./pages/Home 3/Home3";



let allRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home1', element: <Home /> },
    { path: '/home2', element: <Home2 /> },
    { path: '/home3', element: <Home3 /> }
]


export default allRoutes