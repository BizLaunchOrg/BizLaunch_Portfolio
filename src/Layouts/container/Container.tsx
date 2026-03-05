import React, { ReactNode } from "react";
import Footer from "../footer/Footer";
import Navbar from "../NavBar/Navbar";

interface ContainerProps {
  children?: ReactNode; // allow optional children
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Container;
