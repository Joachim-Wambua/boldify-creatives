import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Clients from "./sections/Clients";
import Team from "./sections/Team";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Projects from "./sections/Projects";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Expertise from "./pages/Expertise";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/expertise" element={<Expertise />} />
          {/* <Route path="/clients" element={<Clients />} /> */}
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </>
  );
}

const Home = () => (
  <>
    <div className="flex flex-col justify-start">
      <Header />
      <About />
      <Services />
      <Team />
      <Projects />
      <Clients />
      <Footer />
    </div>
  </> 
);

export default App;
