import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout/MainLayout";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { ScrollToTop } from "./components/Common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <div className="animate-slide-up">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </MainLayout>
    </>
  );
}

export default App;
