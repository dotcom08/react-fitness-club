import AOS from "aos"
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aboutus from "./components/Aboutus"
import Aboutus2 from "./components/Aboutus2"
import Aboutus3 from "./components/Aboutus3"
import Appstore from "./components/Appstore"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Plan from "./components/Plan"
import Testimonials from "./components/Testimonials"

import Footer from "./components/Footer"
import { useEffect } from "react"
const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className=" overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Aboutus2/>
      <Aboutus3/>
      <Contact/>
      <Plan/>
      <Appstore/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App