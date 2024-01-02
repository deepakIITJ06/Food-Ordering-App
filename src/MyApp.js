import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy, Suspense} from "react";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setuserName] = useState("default user");

    useEffect(()=>{
        const data = {
            Name: "deepak"
        }
        setuserName(data.Name);
    },[])

    return (
        <Provider store={appStore}>
            <userContext.Provider value={{loggedInUser: userName, setuserName}}>
                {/* If i will wrap only header then only value for header will be deepak and for rest of the app that will be default user . And the most important thing is that you can set for header "deepak" and for "body or something that will be different that means you can use it multiple times */}
                <div className="app">
                    <Header />
                    <Outlet />
                </div>
            </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        // This is children routing
        children: [
            {
                path: "/",
                element: <Body />
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
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ],
        errorElement: <Error />
    }
])

root.render(<RouterProvider router={appRouter}/>)