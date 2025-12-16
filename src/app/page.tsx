// src/app/page.tsx
import Navbar from './projects/Navbar';
import Hero from './projects/Hero';
import FeaturedProjects from './projects/FeaturedProjects';
import Experience from './projects/Experience';
import OpenSource from './projects/OpenSource';
import Projects from './projects/Projects';
import Skills from './projects/Skills';
import Certifications from './projects/Certifications';
import Contact from './projects/Contact';
import Footer from './projects/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#EDEDED]">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <Experience />
      <OpenSource />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
