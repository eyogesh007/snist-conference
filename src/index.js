import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Homepage from "./Pages/Homepage";
import {AppBar} from "@mui/material";

const router = createBrowserRouter([{path : "/", element : <Homepage />}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppBar>snist conference</AppBar>
      <RouterProvider router={router} />
  </React.StrictMode>
);

