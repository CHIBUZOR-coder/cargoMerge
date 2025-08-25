import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { lazy } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Transporter from "./pages/Transporter.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

const RegisterCargo = lazy(() => import("./pages/RegisterCargo.jsx"));

const VerifyEmail = lazy(() => import("./pages/VerifyEmail.jsx"));
const Loader = lazy(() => import("./Custom/Loader.jsx"));

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
      // {
      //   path: "*",
      //   element: <div className="text-black text-xl">Page not found</div>,
      // },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
        path: "/addtransporter",
        element: <Transporter />,
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
