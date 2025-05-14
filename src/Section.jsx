import React from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const SectionContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  padding: 0 2rem;
`

// Center the content when project is selected
const CenteredWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 2rem;
  }
`

// Using attrs method to optimize class generation
const ContentPanel = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95
  },
  transition: {
    type: 'spring',
    stiffness: 200,
    damping: 20,
    duration: 0.5
  }
})`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  width: ${props => props.$hasProject ? '50%' : '80%'};
  height: 80%;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 128, 255, 0.3);
  overflow-y: auto;
  position: relative;
  
  @media (max-width: 1200px) {
    width: ${props => props.$hasProject ? '85%' : '80%'};
  }
  
  @media (max-width: 768px) {
    width: 90%;
  }
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 128, 255, 0.5);
    border-radius: 10px;
  }
`

const SectionTitle = styled(motion.h2)`
  position: absolute;
  top: -1.5rem;
  right: 2rem;
  font-size: 6rem;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 128, 255, 0.15);
  letter-spacing: 3px;
  pointer-events: none;
  z-index: -1;
  font-family: 'Montserrat', sans-serif;
  text-shadow: 0 0 20px rgba(0, 128, 255, 0.3);
  
  @media (max-width: 768px) {
    font-size: 3rem;
    top: -1rem;
    right: 1rem;
  }
`

// 3D Tilted Image Box centered with the content - EVEN LARGER SIZE
const ProjectImageBox = styled(motion.div)`
  width: 600px;
  height: 450px;
  perspective: 1000px;
  z-index: 10;
  flex-shrink: 0;
  
  @media (max-width: 1200px) {
    width: 500px;
    height: 400px;
  }
  
  @media (max-width: 768px) {
    width: 400px;
    height: 320px;
  }
`

const ImageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(-12deg) rotateX(8deg);
  overflow: hidden;
  border-radius: 12px;
  background: rgba(20, 44, 74, 0.97);
  border: 3px solid rgba(0, 128, 255, 0.6);
  box-shadow: 
    0 25px 60px rgba(0, 0, 0, 0.7),
    0 0 40px rgba(0, 128, 255, 0.6),
    inset 0 0 30px rgba(0, 128, 255, 0.1);
  backdrop-filter: blur(12px);
  
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, rgba(0, 128, 255, 0.25), rgba(255, 68, 68, 0.15));
    border-radius: 17px;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), transparent);
    pointer-events: none;
  }
`

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #001022;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  background-image: ${props => props.$image ? `url(${props.$image})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  
  /* Ensure image fits nicely */
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  /* Add inner border with glow */
  &:after {
    content: '';
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border: 1px solid rgba(0, 128, 255, 0.3);
    border-radius: 8px;
    pointer-events: none;
    box-shadow: 0 0 15px rgba(0, 128, 255, 0.2);
  }
`

const ImageLabel = styled.div`
  position: absolute;
  bottom: 25px;
  left: 25px;
  right: 25px;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 128, 255, 0.4);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
`

const getSectionTitle = (sectionId) => {
  switch(sectionId) {
    case 'home': return 'Home';
    case 'about': return 'About';
    case 'projects': return 'Projects';
    case 'resume': return 'Resume';
    case 'contact': return 'Contact';
    default: return '';
  }
}

const Section = ({ children, sectionId, projectData }) => {
  const title = getSectionTitle(sectionId);
  const hasProject = sectionId === 'projects' && projectData;
  
  return (
    <SectionContainer>
      <SectionTitle
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {title}
      </SectionTitle>
      
      {hasProject ? (
        <CenteredWrapper>
          <ProjectImageBox>
            <ImageContainer
              initial={{ opacity: 0, x: -300, rotateY: -60, rotateX: 30, scale: 0.7 }}
              animate={{ opacity: 1, x: 0, rotateY: -12, rotateX: 8, scale: 1 }}
              exit={{ opacity: 0, x: -300, scale: 0.7 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <ProjectImage $image={projectData.image}>
                <ImageLabel>
                  {projectData.image ? projectData.title : 'Project Screenshot Coming Soon'}
                </ImageLabel>
              </ProjectImage>
            </ImageContainer>
          </ProjectImageBox>
          
          <ContentPanel $hasProject={hasProject}>
            {children}
          </ContentPanel>
        </CenteredWrapper>
      ) : (
        <ContentPanel $hasProject={false}>
          {children}
        </ContentPanel>
      )}
    </SectionContainer>
  )
}

export default Section