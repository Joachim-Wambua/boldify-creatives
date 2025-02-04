import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Clients from "./sections/Clients";
import Team from "./sections/Team";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Expertise from "./pages/Expertise";
import Portfolio from "./pages/Portfolio";
import TopProjects from "./sections/TopProjects";
import CallToAction from "./sections/CallToAction";
import SingleProject from "./pages/SingleProject";
import HeroSection from "./sections/HeroSection";
import WhatsAppButton from "./sections/WhatsAppButton";
import HeaderCarousel from "./sections/HeaderCarousel";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/project" element={<SingleProject />} />
        </Routes>
      </Router>
    </>
  );
}

const Home = () => (
  <>
    <div className="flex flex-col justify-start">
      {/* <Header /> */}
      {/* <HeaderCarousel /> */}
      <HeroSection />
      <About />
      <TopProjects />
      <Services />
      {/* <Team /> */}
      <Clients />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  </>
);

export default App;
