import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from './Home';
import Header from './Header';
import Context from './context/context';
const App=()=>{

 


    return (
        <div>
        <Context>

        <Header/>

        <Outlet/>
        </Context>
        </div>
      
    )
     
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Home/>
                
            }
        ]
    }
])



const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)