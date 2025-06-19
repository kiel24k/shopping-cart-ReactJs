import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      <header className="sticky top-0 z-99">
        <Navbar />
      </header>

      <div className="main">
        <Outlet />
      </div>

      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default RootLayout;
