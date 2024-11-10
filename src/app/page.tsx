
import Aboutsec from "@/components/Aboutsec";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";

import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonial";


export default function Home() {
  return (
    <div className="text-[white] selection:bg-[#A9927D] selection:text-black">
      <Navbar/>
      <Herosection/>
      <Aboutsec/>
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}
