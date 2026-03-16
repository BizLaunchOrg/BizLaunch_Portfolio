import { Outlet } from "react-router-dom";

import Container from "./container/Container";
import Navbar from "./NavBar/Navbar";
import Footer from "./footer/Footer";

export default function LandingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>

      <main className="flex-grow">
        <Container>
          <Outlet />
        </Container>
      </main>

     <Footer/>
    </div>
  );
}