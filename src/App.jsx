import About from "./components/About"
import Home from "./components/home"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Footer from "./components/Footer"


function App() {
  

  return (
    <div className="bg-blue-300 h-auto w-full overflow-hidden">
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Footer/>
      
    </div>
  )
}

export default App
