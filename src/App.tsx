import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Benefits } from "./components/Benefits/Benefits";
import { Treatments } from "./components/Treatments/Treatments";
import { About } from "./components/About/About";
import { BeforeAfter } from "./components/BeforeAfter/BeforeAfter";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Stats } from "./components/Stats/Stats";
import { FAQ } from "./components/FAQ/FAQ";
import { CTA } from "./components/CTA/CTA";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Treatments />
        <About />
        <BeforeAfter />
        <Testimonials />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
