import React from "react";

// import react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import AppLayout from "./pages/AppLayout.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "brizz-bar-restaurant/",
        element: <Home />,
      },
      {
        path: "brizz-bar-restaurant/menu",
        element: <Menu />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden">
      <RouterProvider router={router} />

      <div className="h-[380px] md:h-[370px]"></div>
    </div>
  );
};

export default App;
