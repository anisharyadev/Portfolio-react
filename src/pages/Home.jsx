import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Projects from "../components/Home/Projects";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ"; // Import added
import CTA from "../components/Home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <FAQ /> {/* Added here */}
      <CTA />
    </>
  );
}