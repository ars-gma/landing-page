import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-12">
      {children}
      </div>
      <Footer />
    </>
  );
};
