import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Clients from "./sections/Clients";
import Team from "./sections/Team";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-start">
        <Header />
        <About />
        <Services />
        <Team />
        <Clients />
        <Footer />
      </div>
    </>
  );
}

export default App;
