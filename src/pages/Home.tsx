import React from "react";
import Navbar from "../Layouts/NavBar/Navbar";
import Footer from "../Layouts/footer/Footer";
import Landing from "../Components/LandingSection/Landing";

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {" "}
      {/* give space for fixed navbar */}
      <Navbar />
      <main>
        <Landing />
      </main>
      <Footer />
     
    </div>
  );
};

export default Home;
