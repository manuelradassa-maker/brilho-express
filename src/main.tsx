import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import FloatingWhatsApp from "./components/FloatingWhatsApp"
import MobileActionBar from "./components/MobileActionBar"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <Hero />
    <Services />
    <About />
    <Testimonials />
    <Contact />
    <Footer />
    <FloatingWhatsApp />
    <MobileActionBar />
  </StrictMode>
)
