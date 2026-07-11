import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Us from "./components/Us";
import Services from "./components/Services";
import About from "./components/About";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import HeroBanner from "./components/HeroBanner";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  return (
    <main className="bg-[#070A12] text-white overflow-x-hidden">
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto md:px-10 lg:px-16">
        <About />
        <Services />
        <Team />
        <Us />
      </div>

      <Stats />

      <div className="max-w-6xl mx-auto md:px-10 lg:px-16">
        <Blog />
        <FAQ />
      </div>

      {/* FULL WIDTH SECTION */}
      <section className="w-full overflow-hidden">
        <HeroBanner />
      </section>
      <LanguageSwitcher />
    </main>
  );
}
