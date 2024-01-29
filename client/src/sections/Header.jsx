import CanvasArea from "../threejs/CanvasArea"
import Navbar from "./NavBar"

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="header-container flex flex-row w-full h-full items-center justify-center">
        <div className="header-content flex-1 w-1/2 py-6">
          <h1 className="text-8xl font-extrabold">We Are<br/> <span>Boldify</span></h1  >
        </div>
        <div className="header-image w-1/2 ">
          <CanvasArea />
        </div>
      </div>
    </header>
  )
}

export default Header
