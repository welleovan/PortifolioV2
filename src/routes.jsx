import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import Curriculum from "./pages/Curriculum/curriculum";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{ path: "/", element: <Home /> }],
  },
  { path: "/", 
    children: [{ path: "/Curriculo", element: <Curriculum /> }] },
]);
