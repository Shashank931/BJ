import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MoreDetails from "./pages/Moredetails";

function App() {
  return (
    <Router>
      <div className="bg-blue-300 h-auto w-full overflow-hidden">
        <Navbar />
       
        <Routes>
         
          <Route
            path="/BJ/"
            element={
              <>
                <Home />
                <Services />
                <About />
              </>
            }
          />

             <Route path="/moredetails" element={<MoreDetails/>}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
