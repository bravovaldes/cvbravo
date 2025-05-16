// src/pages/Home.jsx
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import ExperienceMap from '../components/ExeperienceCard'
import DashboardFreelance from '../components/DashboardFreelance'
import BlogSection from '../components/Blog'
import ContactSection from '../components/Contact'
import FooterSection from '../components/Footer'
import FloatingChat from '../components/FloatingChat'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <ExperienceMap />
      <DashboardFreelance />
      <BlogSection />
      <ContactSection />
      <FooterSection />
      <FloatingChat />
    </>
  )
}
