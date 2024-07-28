import AboutUs from "./pages/About/AboutUs";
import BlogPages from "./pages/BlogPages/BlogPages";
import ContatcPages from "./pages/ContactPages/ContatcPages";
import Home from "./pages/Home 1/Home";
import Home2 from "./pages/Home 2/Home2";
import Home3 from "./pages/Home 3/Home3";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFoundPages/NotFound";
import PortfilioPages from "./pages/PortfilioPages/PortfilioPages";
import ServicesPages from "./pages/ServicesPages/ServicesPages";



let allRoutes = [
    { path: '/', element: <Home /> },
    { path: '/home1', element: <Home /> },
    { path: '/home2', element: <Home2 /> },
    { path: '/home3', element: <Home3 /> },
    { path: '/about', element: <AboutUs /> },
    { path: '/services', element: <ServicesPages /> },
    { path: '/portfolio', element: <PortfilioPages /> },
    { path: '/blog', element: <BlogPages /> },
    { path: '/contact', element: <ContatcPages /> },
    { path: "/*", element: <NotFound /> },
    { path: "/loginpage", element: <LoginPage /> }
]


export default allRoutes