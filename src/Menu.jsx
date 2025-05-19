import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const MenuContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  z-index: 10;
  perspective: 1000px;
  width: 40%;
  height: 100%;
  
  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 24, 51, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3);
    z-index: 100;
  }
`

const MenuList = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform-style: preserve-3d;
  transform: rotateX(-15deg);
  position: relative;
  
  @media (max-width: 1024px) {
    flex-direction: row;
    transform: none;
    gap: 0;
    width: 100%;
    justify-content: space-around;
    padding: 0.5rem 0;
    margin: 0;
  }
`

const MenuItem = styled(motion.li)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  text-transform: uppercase;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  padding: 0.5rem 2rem;
  position: relative;
  z-index: ${props => props.$active ? '2' : '1'};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.$active ? 'black' : 'rgba(255, 255, 255, 0.8)'};
    transform: ${props => props.$active ? 'none' : 'translateY(-2px)'};
  }
  
  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 0.8rem 0;
    text-align: center;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.6rem 0;
  }
`

const HighlightBar = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #0080FF, #80C0FF);
  box-shadow: 0 0 15px rgba(0, 128, 255, 0.7);
  transform: skewY(-5deg);
  z-index: 1;
  border-radius: 5px;
  left: 0;
  
  @media (max-width: 1024px) {
    transform: none;
    border-radius: 0;
    height: 3px;
    top: auto !important;
    bottom: 0;
    width: 20%;
    left: ${props => (props.$index || 0) * 20}%;
  }
`

const menuVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    rotateX: -30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { 
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  }
}

const Menu = ({ items, activeSection, setActiveSection }) => {
  const [highlightPosition, setHighlightPosition] = useState({ top: 0, height: 0 })
  const [activeIndex, setActiveIndex] = useState(0)
  const menuItemRefs = useRef([])
  
  // Reset refs when items change
  useEffect(() => {
    menuItemRefs.current = menuItemRefs.current.slice(0, items.length)
  }, [items])
  
  // Update highlight position when active section changes
  useEffect(() => {
    if (activeSection && menuItemRefs.current.length) {
      const index = items.findIndex(item => item.id === activeSection)
      if (index >= 0 && menuItemRefs.current[index]) {
        const element = menuItemRefs.current[index]
        setHighlightPosition({
          top: element.offsetTop,
          height: element.offsetHeight
        })
        setActiveIndex(index)
      }
    }
  }, [activeSection, items])
  
  return (
    <MenuContainer>
      <MenuList
        variants={menuVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {activeSection && (
            <HighlightBar 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1, 
                top: highlightPosition.top,
                height: highlightPosition.height,
              }}
              $index={activeIndex}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
        
        {items.map((item, index) => (
          <MenuItem
            key={item.id}
            variants={itemVariants}
            ref={el => menuItemRefs.current[index] = el}
            onClick={() => setActiveSection(item.id)}
            $active={activeSection === item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </MenuContainer>
  )
}

export default Menu
