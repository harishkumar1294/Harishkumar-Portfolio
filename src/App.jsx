import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 min-h-screen font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
