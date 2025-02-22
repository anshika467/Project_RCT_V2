import React from "react";
import AppRouting from "./AppRouting";
import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <AppRouting />
      <Footer />
    </>
  );
}

export default Layout;
