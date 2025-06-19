import { Button } from "@mui/material";
import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./router/AppRouter";

const App = () => {
  return <>
  <RouterProvider router={routes}/>
  </>;
};

export default App;
