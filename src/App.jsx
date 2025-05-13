import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

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

        
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
