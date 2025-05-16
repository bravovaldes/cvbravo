// src/pages/Home.jsx
import Navbar           from '../components/Navbar'
import Hero             from '../components/Hero'
import Skills           from '../components/Skills'
import Projects         from '../components/Projects'
import Certifications   from '../components/Certifications'
import ExperienceMap    from '../components/ExeperienceCard'
import DashboardFreelance from '../components/DashboardFreelance'
import BlogSection      from '../components/Blog'
import ContactSection   from '../components/Contact'
import FooterSection    from '../components/Footer'
import FloatingChat     from '../components/FloatingChat'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* chaque section a son id + scroll-mt-24 (≈ hauteur navbar) */}
      <section id="home"        className="scroll-mt-24"><Hero /></section>
      <section id="skills"      className="scroll-mt-24"><Skills /></section>
      <section id="projects"    className="scroll-mt-24"><Projects /></section>
      <section id="certifs"     className="scroll-mt-24"><Certifications /></section>
      <section id="experience"  className="scroll-mt-24"><ExperienceMap /></section>
      <section id="freelance"   className="scroll-mt-24"><DashboardFreelance /></section>
      <section id="blog"        className="scroll-mt-24"><BlogSection /></section>
      <section id="contact"     className="scroll-mt-24"><ContactSection /></section>

      <FooterSection />
      <FloatingChat />
    </>
  );
}
