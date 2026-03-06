import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import LandingLayout from "./Layouts/LandingLayout";
import AboutLayout from "./Layouts/AboutLayout";

function App() {
  return (
    <Router>
      <Routes>

        <Route element={<LandingLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AboutLayout />}>
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;