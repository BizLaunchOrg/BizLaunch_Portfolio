import type { ReactNode } from "react";
import { Nav } from "../../components/Nav/Nav";
import { Footer } from "../../components/Footer/Footer";


export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main className="pt-4">{children}</main>
      <Footer />
    </>
  );
}
