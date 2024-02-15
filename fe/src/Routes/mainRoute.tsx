import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/static/Layout";
import Error from "../Error/Error";
import Hero from "../Page/Hero";
import Aboutme from "../Page/Aboutme";
import { Portfolio } from "../Page/Portfolio";
import Contact from "../Page/Contact";


export const mainRoute = createBrowserRouter ([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Hero/>
            },
            {
                index: true,
                path: "/about",
                element: <Aboutme/>
            },
            {
                index: true,
                path: "/portfolio",
                element: <Portfolio/>
            },
            {
                index: true,
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
   
    {
        path: "*",
        element: <Error/>
    },

])