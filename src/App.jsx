import { HashRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume";
import Certifications from "./components/Certifications";
import AdminPanel from "./components/AdminPanel";
import RoleSelectModal from "./components/RoleSelectModal";
import CustomCursor from "./components/CustomCursor";
import AIAssistant from "./components/AIAssistant";
import AtmosphereBackground from "./components/AtmosphereBackground";

function App() {

  return (

    <HashRouter>

      <div className="bg-themeBg text-themeText transition-colors duration-500 overflow-x-hidden min-h-screen relative">

        {/* ATMOSPHERE BACKGROUND */}
        <AtmosphereBackground />

        {/* CUSTOM CURSOR */}
        <CustomCursor />

        {/* AI ASSISTANT CHATBOT */}
        <AIAssistant />

        {/* ROLE SELECT MODAL */}
        <RoleSelectModal />

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

          <Route path="/admin" element={<AdminPanel />} />
        
        </Routes>

        {/* FOOTER */}
        <Footer />

      </div>

    </HashRouter>

  )
}

export default App