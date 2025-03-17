// src/app/page.tsx
import Navbar from './projects/Navbar';
import Hero from './projects/Hero';
import Projects from './projects/Projects';
import Contact from './projects/Contact';
import Footer from './projects/Footer';
import Experience from './projects/Experience';
import GitHubContributions from './projects/GitHubContributions';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <GitHubContributions />
      <Contact />
      <Footer />
    </div>
  );
}