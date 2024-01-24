import React, { lazy , Suspense, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenus from "./components/RestaurantMenus";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName , setUserName] = useState();

    // authentication
    useEffect(()=> {
        // make an api call and send username and password

        const data = {
            name : "Raunak Raj",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value = {{loggedInUser : userName}}>
            <div className="App">
        <Header/>
        <Outlet/>
    </div>

        </UserContext.Provider>
        </Provider>
        
    
    );
};

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/About",
                element : <About />
            },
            {
                path : "/Contact",
                element : <Contact />
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenus />
            },
            {
                path : "/Grocery",
                element : <Suspense fallback={<h1>Loading....</h1>}>
                    <Grocery />
                    </Suspense>
            },
            {
                path : "/cart",
                element : <Cart />
            },
        ],
        errorElement : <Error />
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);