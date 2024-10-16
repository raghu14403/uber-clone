import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/common/Footer.";
import Ride from "./components/Ride";
import Header from "./components/common/Header";
import Home from "./components/Home";

function RoutingComponent() {
  const wrapper = (header: boolean, children: any, footer: boolean) => {
    return (
      <>
        {header && <Header />}
        {children}
        {footer && <Footer />}
      </>
    );
  };
  const routes = createBrowserRouter([
    {
      path: "/",
      element: wrapper(true, <Home />, true),
      errorElement: <div>Error</div>,
    },
    {
      path: "/header",
      element: <Header />,
    },
    {
      path: "/ride",
      element: <Ride />,
      errorElement: <div>Error</div>,
    },
    {
      path: "/about",
      element: wrapper(true, <About />, true),
      errorElement: <div>Error</div>,
    },
    {
      path: "/footer",
      element: <Footer />,
    },
    {
      path: "*",
      element: <div>Errors</div>,
    },
  ]);
  return <RouterProvider router={routes}></RouterProvider>;
}

export default RoutingComponent;
