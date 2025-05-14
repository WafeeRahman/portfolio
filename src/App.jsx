import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Background from './Background'
import Menu from './Menu'
import Section from './Section'

// Content components
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StartPrompt = styled(motion.div)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
  position: absolute;
  text-align: center;
  z-index: 10;
`

const ContentLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
  }
`

// Angled name box in top left corner
const HeaderNameContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 20;
  transform: rotate(-10deg);
  
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    transform: rotate(-10deg) scale(0.8);
  }
`

const HeaderNameBox = styled.div`
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(4px);
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 4px;
  padding: 0.8rem 1.8rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  transform: skewX(-8deg);
`

const HeaderName = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: #000;
  letter-spacing: 1.5px;
  text-shadow: none;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`

const App = () => {
  const [started, setStarted] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [blurBackground, setBlurBackground] = useState(false)
  const [currentProjectData, setCurrentProjectData] = useState(null)
  
  const menuItems = [
    { id: 'home', label: 'HOME', component: Home },
    { id: 'about', label: 'ABOUT', component: About },
    { id: 'projects', label: 'PROJECTS', component: Projects },
    { id: 'resume', label: 'RESUME', component: Resume },
    { id: 'contact', label: 'CONTACT', component: Contact },
  ]
  
  // Handle key press or click to start
  const handleStart = () => {
    if (!started) {
      setStarted(true)
      // Set the default active section after a delay
      setTimeout(() => {
        setActiveSection('home')
      }, 1000)
    }
  }
  
  // Add event listeners for any key press
  useEffect(() => {
    const handleKeyDown = () => handleStart()
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [started])
  
  // Effect to handle background blur when a section is active
  useEffect(() => {
    setBlurBackground(activeSection !== null)
  }, [activeSection])

  // Handle project selection
  const handleProjectSelect = (projectData) => {
    setCurrentProjectData(projectData)
  }

  // Get the component for the active section
  const getActiveComponent = () => {
    const item = menuItems.find(item => item.id === activeSection)
    if (!item) return null
    
    const Component = item.component
    
    // Pass project selection handler to Projects component
    if (activeSection === 'projects') {
      return <Component onProjectSelect={handleProjectSelect} />
    }
    
    return <Component />
  }

  return (
    <AppContainer onClick={!started ? handleStart : undefined}>
      <Background blur={blurBackground} />
      
      <HeaderNameContainer
        initial={{ opacity: 0, y: -20, rotate: -10 }}
        animate={{ 
          opacity: started ? 1 : 0, 
          y: started ? 0 : -20,
          rotate: -10
        }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <HeaderNameBox>
          <HeaderName>WAFEE RAHMAN</HeaderName>
        </HeaderNameBox>
      </HeaderNameContainer>
      
      <AnimatePresence>
        {!started && (
          <StartPrompt 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.4, 1, 0.4], 
              transition: { 
                repeat: Infinity, 
                duration: 2 
              } 
            }}
            exit={{ opacity: 0 }}
          >
            PRESS ANY KEY / CLICK TO START
          </StartPrompt>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {started && (
          <ContentLayout>
            <Menu 
              items={menuItems}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            
            <AnimatePresence mode="wait">
              {activeSection && (
                <Section 
                  key={activeSection} 
                  sectionId={activeSection}
                  projectData={currentProjectData}
                >
                  {getActiveComponent()}
                </Section>
              )}
            </AnimatePresence>
          </ContentLayout>
        )}
      </AnimatePresence>
    </AppContainer>
  )
}

export default App