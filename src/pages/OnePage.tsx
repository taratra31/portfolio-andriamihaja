import { Home } from '@/pages/Home'
import { Experience } from '@/pages/Experience'
import { Projects } from '@/pages/Projects'
import { Skills } from '@/pages/Skills'
import { Education } from '@/pages/Education'
import { Contact } from '@/pages/Contact'
import { useIsMobile } from '@/hooks/useIsMobile'

export function OnePage() {
  const isMobile = useIsMobile()

  if (!isMobile) return <Home />

  return (
    <>
      <Home />
      <div id="experience" className="scroll-mt-24">
        <Experience />
      </div>
      <div id="projects" className="scroll-mt-24">
        <Projects />
      </div>
      <div id="skills" className="scroll-mt-24">
        <Skills />
      </div>
      <div id="education" className="scroll-mt-24">
        <Education />
      </div>
      <div id="contact" className="scroll-mt-24">
        <Contact />
      </div>
    </>
  )
}