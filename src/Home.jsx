import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`

const Title = styled(motion.h1)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

const Role = styled(motion.div)`
  background: rgba(0, 128, 255, 0.2);
  border-radius: 4px;
  padding: 0.6rem 1.2rem;
  font-size: 1.2rem;
  color: white;
  margin-bottom: 2rem;
  border-left: 3px solid rgba(0, 128, 255, 0.8);
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }
`

const InfoList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  text-align: left;
  background: rgba(0, 24, 51, 0.3);
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 500px;
`

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  
  a {
    color: #0080FF;
    text-decoration: none;
    transition: color 0.2s ease;
    
    &:hover {
      color: #80C0FF;
      text-decoration: underline;
    }
  }
`

const InfoIcon = styled.div`
  width: 30px;
  height: 30px;
  background: rgba(0, 128, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

const Home = () => {
  return (
    <HomeContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        WELCOME
      </Title>
      
      <Role
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Software Engineer & Computer Science Student
      </Role>
      
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Explore my portfolio to learn about my projects, skills, and experience. 
        You can contact me at:
      </Subtitle>
      
      <InfoList
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <InfoItem
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <InfoIcon>📧</InfoIcon>
          <span>
            Email: <a href="mailto:Wafee.Rahman842@gmail.com">Wafee.Rahman842@gmail.com</a>
          </span>
        </InfoItem>
        
        <InfoItem
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <InfoIcon>🔗</InfoIcon>
          <span>
            LinkedIn: <a href="https://linkedin.com/in/wafeerahman" target="_blank" rel="noopener noreferrer">linkedin.com/in/wafeerahman</a>
          </span>
        </InfoItem>
        
        <InfoItem
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <InfoIcon>💻</InfoIcon>
          <span>
            GitHub: <a href="https://github.com/WafeeRahman" target="_blank" rel="noopener noreferrer">github.com/WafeeRahman</a>
          </span>
        </InfoItem>
        
        <InfoItem
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <InfoIcon>📱</InfoIcon>
          <span>Phone: 647-570-3356</span>
        </InfoItem>
      </InfoList>
    </HomeContainer>
  )
}

export default Home