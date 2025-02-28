import React, { useEffect } from "react";
import AppRouting from "./AppRouting";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";
import { useSelector } from "react-redux";

function Layout() {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);
  
  return (
    <>
      <Header />
      <AppRouting />
      <Footer />
    </>
  );
}

export default Layout;
