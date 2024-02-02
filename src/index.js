import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material';
import {
    createBrowserRouter,
    RouterProvider, Outlet
} from "react-router-dom";

import './index.css'
import Homepage from "./Pages/Homepage";
import NavBar from "./Components/NavBar";
import Registration from "./Pages/Registration";
import Publication from "./Pages/Publication";
import Program from "./Pages/Program";
import Venue from "./Pages/Venue";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import QuickLinks from "./Pages/Quicklinks";

const router = createBrowserRouter([{element : <Layout />, children : [{path : "/", element : <Homepage />, },
        {path : "/about", element : <About />},
        {path : "/quicklinks", element : <QuickLinks />},
        {path : "/registration", element : <Registration />},
        {path : "/publication", element : <Publication />},
        {path : "/program", element : <Program />},
        {path : "/venue", element : <Venue />},
        {path : "/contact", element : <Contact />}]}])

const theme = createTheme({
    typography: {
        fontFamily : "'Sora', sans-serif",
        fontSize : 16
    }
})
function Layout() {
    return <React.Fragment>
        <NavBar />
        <Outlet />
    </React.Fragment>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      </ThemeProvider>
  </React.StrictMode>
);

