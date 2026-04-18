import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { ScrollToTop } from "./components/Common/ScrollToTop";
import OurMissionSection from "./components/OurMissionSection/OurMissionSection";
import ContactUs from "./pages/ContactUs/ContactUs";
import { GetStarted } from "./pages/GetStarted/GetStarted";
import OurWork from "./components/OurWork/OurWork";

function App() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/OurMission" element={<OurMissionSection />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/work" element={<OurWork />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
