import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/about";
import Contact from "../pages/contact";
import ErrorPage from "../pages/error";
import Home from "../pages";
import Services from "../pages/services";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/service',
            element : <Services></Services>
        },
        {
            path : '/about',
            element : <About></About>
        },
        {
            path : '/contact',
            element : <Contact></Contact>
        },
        
      ]
    },
  ]);

  export default router