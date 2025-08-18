import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import RegisterTransporter from "./pages/RegisterTransporter.jsx";
import RegisterCargo from "./pages/RegisterCargo.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import Loader from "./Custom/Loader.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/transporterReg",
        element: <RegisterTransporter />,
      },
      {
        path: "/cargoReg",
        element: <RegisterCargo />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/verifyEmail",
        element: <VerifyEmail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-[100vh] bg-main">
          <Loader />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
