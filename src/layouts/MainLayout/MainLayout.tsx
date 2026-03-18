import type { ReactNode } from "react";
import { Nav } from "../../Components/Nav/Nav";
import { Footer } from "../../Components/Footer/Footer";


export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-4">{children}</main>
      <Footer />
    </>
  );
}
