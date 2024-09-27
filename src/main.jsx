import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./Components/About.jsx";
import Login from "./Components/Login.jsx";
import Error from "./Components/Error.jsx";
import BookList from "./Components/BookList.jsx";
// import { Router } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App component includes Header and Outlet
    children: [
      {
        index: true,
        element: <BookList />,
      },
      {
        path: "About",
        element: <About />,
        
      },
      {
        path: "Login",
        element: <Login />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
