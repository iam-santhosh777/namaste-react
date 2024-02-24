import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import About from "./components/About";
import Contact from "./components/Contact";
import RestrarauntMenu from "./components/RestrarauntMenu";
import{createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";

const AppLayout = () => {
    return (
        <div className="app">
            <AppHeader />
            <Outlet />    
            {/* <About /> */}
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <AppBody />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restraraunts/:resId",
                element: <RestrarauntMenu />

            }
    
        ],
        errorElement: <Error />
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);