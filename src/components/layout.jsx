import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="md:mt-12">
      {children}
      </div>
      <Footer />
    </>
  );
};
