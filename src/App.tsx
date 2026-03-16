import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { ScrollToTop } from "./components/Common/ScrollToTop";
import OurMissionSection from "./components/OurMissionSection/OurMissionSection";
import { ContactSection } from "./components/ContactSection/ContactSection";

function App() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/OurMission" element={<OurMissionSection />} />
            <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
