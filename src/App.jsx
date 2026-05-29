import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";

function App() {

  return (

    <BrowserRouter>

      <div className="bg-[#05010d] text-white overflow-x-hidden min-h-screen">

        {/* NAVBAR */}
        <Navbar />

        {/* ROUTES */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          
          <Route path="/projects" element={<Projects />} />
          
          <Route path="/contact" element={<Contact />} />
        
          <Route path="/resume" element={<Resume />} />

          <Route path="/certifications" element={<Certifications />} />
        
        </Routes>

        {/* FOOTER */}
        <Footer />

      </div>

    </BrowserRouter>

  )
}

export default App

