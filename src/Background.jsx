import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BackgroundContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(to bottom, #001833, #003366);
  z-index: -1;
  transition: filter 0.5s ease;
  filter: ${props => props.blur ? 'blur(3px)' : 'none'};
`

// Using $-prefixed props (transient props) to avoid DOM warnings
const Bubble = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$color || 'rgba(255, 255, 255, 0.1)'};
  box-shadow: 0 0 8px ${props => props.$glow || 'rgba(0, 128, 255, 0.3)'};
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  bottom: -${props => props.$size}px;
  left: ${props => props.$left}%;
  opacity: ${props => props.$opacity};
  animation: float ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-120vh);
    }
  }
`

// Generate random number between min and max
const random = (min, max) => Math.random() * (max - min) + min

// Create a unique bubble object
const createBubble = () => {
  const size = random(5, 40)
  const isBlue = Math.random() > 0.6
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    size,
    left: random(0, 100),
    opacity: random(0.1, 0.3),
    duration: random(10, 25),
    delay: random(0, 15),
    color: isBlue ? 'rgba(0, 128, 255, 0.2)' : 'rgba(255, 255, 255, 0.2)',
    glow: isBlue ? 'rgba(0, 128, 255, 0.4)' : 'rgba(255, 255, 255, 0.3)',
  }
}

// Using attrs to reduce the number of generated classes
const Background = ({ blur }) => {
  const [bubbles, setBubbles] = useState([])
  
  // Generate initial bubbles
  useEffect(() => {
    const initialBubbles = Array(30).fill().map(() => createBubble())
    setBubbles(initialBubbles)
    
    // Continuously add new bubbles
    const intervalId = setInterval(() => {
      setBubbles(prevBubbles => {
        const newBubble = createBubble();
        return [...prevBubbles, newBubble];
      });
      
      // Keep bubble count under control
      if (bubbles.length > 50) {
        setBubbles(prevBubbles => prevBubbles.slice(prevBubbles.length - 40))
      }
    }, 2000)
    
    return () => clearInterval(intervalId)
  }, [])
  
  return (
    <BackgroundContainer blur={blur}>
      {bubbles.map(bubble => (
        <Bubble
          key={bubble.id}
          $size={bubble.size}
          $left={bubble.left}
          $opacity={bubble.opacity}
          $duration={bubble.duration}
          $delay={bubble.delay}
          $color={bubble.color}
          $glow={bubble.glow}
        />
      ))}
    </BackgroundContainer>
  )
}

export default Background