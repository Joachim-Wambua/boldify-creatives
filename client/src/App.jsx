import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Footer from "./sections/Footer";
import Clients from "./sections/Clients";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          className="py-6"
          src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1706183635/Boldify_Creatives_Logo-01_lqtagj.png"
          width={180}
          alt="Logo"
        />
        <h1 className="font-bold text-2xl">Under Construction</h1>
        {/* <p className="pt-6">Under Construction</p> */}
      </div>
      <div className="flex flex-col justify-start" >
        <Header />
        <About />
        <Services />
        <Clients />
        <Footer />
      </div>
    </>
  );
}

export default App;
