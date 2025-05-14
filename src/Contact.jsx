import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const ContactContainer = styled.div`
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

const IntroText = styled(motion.p)`
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const FormField = styled(motion.div)`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
`

const Input = styled.input`
  background: rgba(0, 24, 51, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0.8rem;
  color: white;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #0080FF;
    box-shadow: 0 0 5px rgba(0, 128, 255, 0.5);
  }
`

const TextArea = styled.textarea`
  background: rgba(0, 24, 51, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0.8rem;
  color: white;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: #0080FF;
    box-shadow: 0 0 5px rgba(0, 128, 255, 0.5);
  }
`

const SubmitButton = styled(motion.button)`
  background: linear-gradient(90deg, #0060C0, #0080FF);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.8rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  cursor: pointer;
  margin-top: 1rem;
  align-self: flex-start;
  box-shadow: 0 0 10px rgba(0, 128, 255, 0.3);
  
  &:hover {
    background: linear-gradient(90deg, #0080FF, #0060C0);
  }
`

const ContactInfo = styled(motion.div)`
  background: rgba(0, 24, 51, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  height: fit-content;
`

const InfoTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
`

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  
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
  width: 36px;
  height: 36px;
  background: rgba(0, 128, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  background: rgba(0, 128, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 128, 255, 0.5);
    transform: translateY(-3px);
  }
`

const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3
    }
  })
}

const infoItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1 + 0.3
    }
  })
}

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted')
  }

  const formFields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'subject', label: 'Subject', type: 'text' },
    { id: 'message', label: 'Message', type: 'textarea' }
  ]
  
  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'Wafee.Rahman842@gmail.com', link: 'mailto:Wafee.Rahman842@gmail.com' },
    { icon: '📱', label: 'Phone', value: '647-570-3356', link: 'tel:6475703356' },
    { icon: '🏫', label: 'University', value: 'Toronto Metropolitan University', link: null },
    { icon: '📍', label: 'Location', value: 'Toronto, ON, Canada', link: null }
  ]
  
  const socialLinks = [
    { icon: 'L', label: 'LinkedIn', link: 'https://linkedin.com/in/wafeerahman' },
    { icon: 'G', label: 'GitHub', link: 'https://github.com/WafeeRahman' }
  ]

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contact
      </Title>
      
      <IntroText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm always open to new opportunities and collaborations. Feel free to reach out using the form below or through my contact information.
      </IntroText>
      
      <ContactLayout>
        <ContactForm 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {formFields.map((field, index) => (
            <FormField
              key={field.id}
              custom={index}
              variants={formFieldVariants}
              initial="hidden"
              animate="visible"
            >
              <Label htmlFor={field.id}>{field.label}</Label>
              {field.type === 'textarea' ? (
                <TextArea id={field.id} required />
              ) : (
                <Input type={field.type} id={field.id} required />
              )}
            </FormField>
          ))}
          
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            SEND MESSAGE
          </SubmitButton>
        </ContactForm>
        
        <ContactInfo
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <InfoTitle>Contact Information</InfoTitle>
          <InfoList>
            {contactInfo.map((info, index) => (
              <InfoItem
                key={info.label}
                custom={index}
                variants={infoItemVariants}
                initial="hidden"
                animate="visible"
              >
                <InfoIcon>{info.icon}</InfoIcon>
                <div>
                  <strong>{info.label}:</strong><br />
                  {info.link ? (
                    <a href={info.link} target={info.link.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    info.value
                  )}
                </div>
              </InfoItem>
            ))}
          </InfoList>
          
          <SocialLinks>
            {socialLinks.map((social, index) => (
              <SocialLink
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.8 + (index * 0.1) }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                {social.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </ContactInfo>
      </ContactLayout>
    </ContactContainer>
  )
}

export default Contact