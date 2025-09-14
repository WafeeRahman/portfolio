import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

const ResumeNavigation = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

const NavButton = styled(motion.button)`
  background: ${props => props.$active ? 'rgba(0, 128, 255, 0.3)' : 'rgba(0, 24, 51, 0.5)'};
  border: 1px solid ${props => props.$active ? 'rgba(0, 128, 255, 0.8)' : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 128, 255, 0.2);
    border-color: rgba(0, 128, 255, 0.5);
  }
`

const ResumeSection = styled(motion.div)`
  overflow-y: auto;
  height: 100%;
  padding-right: 1rem;
`

const ResumeSectionTitle = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #0080FF;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const InfoBlock = styled(motion.div)`
  margin-bottom: 2rem;
`

const BlockTitle = styled.h3`
  font-size: 1.3rem;
  color: white;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
`

const ExperienceItem = styled(motion.div)`
  margin-bottom: 1.5rem;
  background: rgba(0, 24, 51, 0.3);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid rgba(0, 128, 255, 0.5);
`

const PositionTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
  color: #80C0FF;
`

const CompanyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const CompanyName = styled.span`
  font-weight: 600;
`

const Duration = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
`

const Location = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin-left: auto;
`

const BulletList = styled.ul`
  list-style-type: none;
  margin-left: 0.5rem;
  
  li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-size: 0.9rem;
    
    &:before {
      content: '•';
      color: #0080FF;
      position: absolute;
      left: 0;
      font-size: 1rem;
    }
  }
`

const EducationItem = styled(motion.div)`
  margin-bottom: 1.5rem;
`

const UniversityName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #80C0FF;
`

const DegreeInfo = styled.div`
  margin-bottom: 0.5rem;
`

const Degree = styled.span`
  font-weight: 600;
`

const CourseworkTitle = styled.h5`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
`

const Coursework = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
`

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const SkillCategory = styled.div`
  margin-bottom: 0.5rem;
`

const CategoryTitle = styled.h5`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
`

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const SkillTag = styled(motion.span)`
  background: rgba(0, 128, 255, 0.15);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
`

const AwardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

const AwardCategory = styled.div`
  margin-bottom: 0.5rem;
`

const AwardList = styled.ul`
  list-style-type: none;
  
  li {
    position: relative;
    padding-left: 1.2rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-size: 0.9rem;
    
    &:before {
      content: '•';
      color: #0080FF;
      position: absolute;
      left: 0;
      font-size: 1rem;
    }
  }
`

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  
  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'awards', label: 'Awards' }
  ];
  
  return (
    <ResumeContainer>
      <ResumeNavigation>
        {sections.map(section => (
          <NavButton
            key={section.id}
            $active={activeTab === section.id}
            onClick={() => setActiveTab(section.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.label}
          </NavButton>
        ))}
      </ResumeNavigation>
      
      <AnimatePresence mode="wait">
        {activeTab === 'experience' && (
          <ResumeSection
            key="experience"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ResumeSectionTitle>Professional Experience</ResumeSectionTitle>
            
            <InfoBlock>
              <ExperienceItem>
                <PositionTitle>Software Engineer Intern - Process Innovation & Data Analytics</PositionTitle>
                <CompanyInfo>
                  <CompanyName>TD Securities</CompanyName>
                  <Location>Toronto, ON</Location>
                </CompanyInfo>
                <Duration>May 2025 - August 2025</Duration>
                <BulletList>
                  <li>Led the development of 6 software automation projects from requirements to deployment, each eliminating 500
hours of manual intervention annually using TypeScript and the Numpy stack</li>
                  <li>Accelerated structured notes preprocessing by 90% through automated PDF parsing with Python Regex patterns/li>
                  <li>Reduced operational costs by $16,000 annually by automating daily Excel calculations with TypeScript</li>
                  <li>Automated manual support script execution with a Flask/FastAPI architecture, saving 1040 hours annually</li>
                </BulletList>
              </ExperienceItem>
              
              <ExperienceItem>
                <PositionTitle>Digitization, Automation, Workflow (DAW) Intern</PositionTitle>
                <CompanyInfo>
                  <CompanyName>TD Insurance (TDI)</CompanyName>
                  <Location>Toronto, ON</Location>
                </CompanyInfo>
                <Duration>September 2024 - April 2025</Duration>
                <BulletList>
                  <li>Supported project delivery and management for DAW teams with Git, Jira, and Confluence DevOps tools</li>
                  <li>Automated manual spreadsheet tasks by creating Excel scripts with TypeScript, significantly reducing labor time</li>
                  <li>Analyzed production defects and conducted root cause analysis with SQL, saving over $10,000 in annual costs</li>
                  <li>Facilitated project maintenance of 18+ automation deployments, ensuring service-level performance metrics</li>
                  <li>Streamlined quarterly KPI reporting by automating 1,000+ daily report extractions with Python and Powerapps</li>
                </BulletList>
              </ExperienceItem>
            </InfoBlock>
          </ResumeSection>
        )}
        
        {activeTab === 'education' && (
          <ResumeSection
            key="education"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ResumeSectionTitle>Education</ResumeSectionTitle>
            
             <InfoBlock>
               <EducationItem>
                 <UniversityName>Toronto Metropolitan University (Formerly Ryerson University)</UniversityName>
                 <DegreeInfo>
                   <Degree>Bachelor of Science, Computer Science Co‑Op</Degree>
                   <Duration> May 2027 (Expected)</Duration>
                 </DegreeInfo>
                 <div>GPA: 4.03 / 4.33</div>
                 <CourseworkTitle>Relevant Coursework:</CourseworkTitle>
                 <Coursework>
                   • CPS109/209 – Python &amp; Java programming, OOP, algorithms<br/>
                   • CPS213/310 – Logic circuits, CPU &amp; ISA design<br/>
                   • CPS305 – Trees, graphs, algorithm analysis<br/>
                   • CPS590 – Processes, memory, file systems (OS)<br/>
                   • CPS406 – OO software engineering, UML<br/>
                   • CPS530 – Full‑stack Web (Perl, Ruby, CGI, Apache)<br/>
                   • CPS393 – UNIX &amp; C systems programming
                 </Coursework>
               </EducationItem>

              {/* ────────── Udemy Certification ────────── */}
              <EducationItem>
                <UniversityName>Udemy – Full‑Stack Web Developer Bootcamp 2023 (Colt Steele)</UniversityName>
                <DegreeInfo>
                  <Duration>Attained 2023</Duration>
                </DegreeInfo>
                <CourseworkTitle>Key Topics Covered:</CourseworkTitle>
                <Coursework>
                  • HTML 5, CSS 3, responsive &amp; accessible design<br/>
                  • Modern JavaScript (ES6+), DOM manipulation, tooling<br/>
                  • Node.js, Express, RESTful API design<br/>
                  • MongoDB &amp; Mongoose data modeling<br/>
                  • React fundamentals &amp; component architecture<br/>
                  • Deployment workflows &amp; full‑stack capstone projects
                </Coursework>
              </EducationItem>
             </InfoBlock>
          </ResumeSection>
        )}
        
        {activeTab === 'skills' && (
          <ResumeSection
            key="skills"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ResumeSectionTitle>Technical Skills</ResumeSectionTitle>
            
            <InfoBlock>
              <SkillsContainer>
                <SkillCategory>
                  <CategoryTitle>Programming Languages:</CategoryTitle>
                  <SkillsGrid>
                    {['Python', 'Javascript', 'C', 'Java', 'Lisp'].map((skill, index) => (
                      <SkillTag 
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: index * 0.05 }
                        }}
                      >
                        {skill}
                      </SkillTag>
                    ))}
                  </SkillsGrid>
                </SkillCategory>
                
                <SkillCategory>
                  <CategoryTitle>Technologies:</CategoryTitle>
                  <SkillsGrid>
                    {['HTML/CSS', 'Git', 'Node.js', 'REST', 'Express.js', 'Bash', 'Linux', 'MongoDB', 'ReactJS', 'NextJS', 'Firebase', 'UNIX'].map((skill, index) => (
                      <SkillTag 
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: index * 0.05 + 0.2 }
                        }}
                      >
                        {skill}
                      </SkillTag>
                    ))}
                  </SkillsGrid>
                </SkillCategory>
                
                <SkillCategory>
                  <CategoryTitle>Developer Tools:</CategoryTitle>
                  <SkillsGrid>
                    {['Git', 'Docker', 'Google Cloud Platform', 'Visual Studio', 'PyCharm', 'IntelliJ', 'Jira', 'Confluence'].map((skill, index) => (
                      <SkillTag 
                        key={`tool-${skill}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: index * 0.05 + 0.4 }
                        }}
                      >
                        {skill}
                      </SkillTag>
                    ))}
                  </SkillsGrid>
                </SkillCategory>
                
                <SkillCategory>
                  <CategoryTitle>Familiar:</CategoryTitle>
                  <SkillsGrid>
                    {['Perl', 'PHP', 'Ruby', 'Apache', 'CGI', 'ASP', 'XML'].map((skill, index) => (
                      <SkillTag 
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: index * 0.05 + 0.6 }
                        }}
                      >
                        {skill}
                      </SkillTag>
                    ))}
                  </SkillsGrid>
                </SkillCategory>
              </SkillsContainer>
            </InfoBlock>
          </ResumeSection>
        )}
        
        {activeTab === 'awards' && (
          <ResumeSection
            key="awards"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ResumeSectionTitle>Awards & Honours</ResumeSectionTitle>
            
            <InfoBlock>
              <AwardsContainer>
                <AwardCategory>
                  <CategoryTitle>Honours:</CategoryTitle>
                  <AwardList>
                    <li>2022 - 2023, 2023 - 2024 Faculty of Science Dean's List</li>
                  </AwardList>
                </AwardCategory>
                
                <AwardCategory>
                  <CategoryTitle>Awards:</CategoryTitle>
                  <AwardList>
                    <li>2022 CHFT Diversity Scholarship</li>
                    <li>2022 Investing in Our Diversity (IIOD) Scholarship</li>
                    <li>2023 Randy Padmore Anti-Racism Scholarship</li>
                    <li>2023-2024 Alexandra Park Revitalization Scholarship</li>
                    <li>2024 TD Securities Bridging the Gap Scholarship</li>
                  </AwardList>
                </AwardCategory>
              </AwardsContainer>
            </InfoBlock>
          </ResumeSection>
        )}
      </AnimatePresence>
    </ResumeContainer>
  )
}

export default Resume
