import type { ReactNode } from "react";
import Navbar from "../../Layouts/NavBar/Navbar";
import Footer from "../../Layouts/footer/Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-4">{children}</main>
      <Footer />
    </>
  );
}
