import { Outlet } from "react-router-dom";

import Container from "./container/Container";
import NavBarLogin from "./NavBar/NavBarLogin";
import FooterLogin from "./footer/FooterLogin";

export default function AboutLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarLogin/>

      <main className="flex-grow">
        <Container>
          <Outlet />
        </Container>
      </main>

      <FooterLogin/>
    </div>
  );
}