import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Title = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #0080FF;
  text-transform: uppercase;
`

const Content = styled(motion.div)`
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
  }
`

const AboutSection = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: white;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
`

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
`

const SkillPill = styled(motion.div)`
  background: rgba(0, 128, 255, 0.15);
  border-radius: 20px;
  padding: 0.4rem 1rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const SkillIcon = styled.span`
  font-size: 1.1rem;
`

const InterestsList = styled.ul`
  list-style-type: none;
  margin-top: 1rem;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.7rem;
    
    &:before {
      content: '•';
      color: #0080FF;
      position: absolute;
      left: 0;
      font-size: 1.2rem;
    }
  }
`

const About = () => {
  const skills = [
    { name: 'Full-Stack Development', icon: '💻' },
    { name: 'Python', icon: '🐍' },
    { name: 'JavaScript/TypeScript', icon: '📜' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Cloud Computing', icon: '☁️' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Data Analysis', icon: '📊' }
  ];
  
  const interests = [
    'Building innovative web applications that solve real-world problems',
    'Exploring machine learning and AI technologies',
    'Cloud architecture and serverless computing',
    'Open-source contribution and community involvement',
    'UI/UX design and creating intuitive user experiences'
  ];

  return (
    <AboutContainer>
      <Title
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        About Me
      </Title>
      
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <AboutSection>
          <p>
            I'm a Computer Science student at Toronto Metropolitan University with a passion for software engineering and development. 
            My journey in technology is focused on creating meaningful solutions that combine innovation with practical applications.
          </p>
          <p>
            Currently in the co-op program, I've had the opportunity to work with TD Securities and TD Insurance, 
            where I've developed automations, optimized processes, and contributed to various projects using Python, TypeScript, SQL, and other technologies.
          </p>
          <p>
            I'm particularly interested in full-stack development, cloud technologies, and machine learning. 
            My projects reflect these interests, combining robust backend systems with intuitive user interfaces.
          </p>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>Core Skills</SectionTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillPill 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: index * 0.1 }
                }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                {skill.name}
              </SkillPill>
            ))}
          </SkillsGrid>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>Interests & Focus Areas</SectionTitle>
          <InterestsList>
            {interests.map((interest, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: 0.6 + (index * 0.1) }
                }}
              >
                {interest}
              </motion.li>
            ))}
          </InterestsList>
        </AboutSection>
      </Content>
    </AboutContainer>
  )
}

export default About