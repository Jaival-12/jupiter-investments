import TopBar from "../components/layout/TopBar";
import LogoSection from "../components/layout/LogoSection";
import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";

import AboutPreview from "../components/about/AboutPreview";

import Services from "../components/services/Services";

import WhyChooseUs from "../components/whyus/WhyChooseUs";

import Testimonials from "../components/testimonials/Testimonials";

import FAQ from "../components/home/FAQ";

import Contact from "../components/home/Contact";

import Footer from "../components/home/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <LogoSection />
      <Navbar />

      <Hero />
      <Stats />
      <AboutPreview />
      
      <Services />
      <WhyChooseUs />

      <Testimonials />
      <FAQ />

      <Contact />
      <Footer />
    </>
  );
}

export default Home;
