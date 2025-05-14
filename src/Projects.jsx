import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`

const Title = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #0080FF;
  text-transform: uppercase;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.5);
`

const IntroText = styled(motion.p)`
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
`

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`

const ProjectCard = styled(motion.div)`
  background: rgba(0, 24, 51, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(4px);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 128, 255, 0.2);
    border-color: rgba(0, 128, 255, 0.5);
  }
`

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: white;
`

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

const Tag = styled.span`
  background: rgba(0, 128, 255, 0.3);
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 128, 255, 0.5);
`

// Project Detail View
const ProjectDetailView = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`

const DetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const BackButton = styled(motion.button)`
  background: transparent;
  border: 1px solid rgba(0, 128, 255, 0.5);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 128, 255, 0.2);
    box-shadow: 0 0 15px rgba(0, 128, 255, 0.3);
  }
`

// Project content only - no image here
const ProjectContentBox = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 2rem;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(0, 128, 255, 0.3);
  
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

const DetailTitle = styled.h2`
  font-size: 1.8rem;
  color: #0080FF;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.3);
`

const DetailTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const DetailTag = styled.span`
  background: rgba(0, 128, 255, 0.2);
  color: white;
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(0, 128, 255, 0.4);
`

const DetailSection = styled.div`
  margin-bottom: 1.5rem;
  background: rgba(0, 24, 51, 0.2);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2px);
`

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: white;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid rgba(0, 128, 255, 0.3);
  padding-bottom: 0.5rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 20%;
    height: 2px;
    background: linear-gradient(90deg, #0080FF, #FF4444);
  }
`

const DetailText = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
`

const FeaturesList = styled.ul`
  list-style-type: none;
  margin-left: 1rem;
  
  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.7rem;
      width: 6px;
      height: 6px;
      background: #0080FF;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 128, 255, 0.6);
    }
  }
`

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i + 0.3
    }
  })
}

const detailVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  exit: { 
    opacity: 0, 
    x: -20,
    transition: {
      duration: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
}

// Project images - you can add actual screenshots here
const projectImages = {
  'exploreToronto': 'https://github.com/user-attachments/assets/4c5252b0-7ec1-4fac-8f45-f42295f4a584',
  'clipshare': 'https://github.com/user-attachments/assets/3dd91985-422e-448f-b69b-1424d9c364b3',      // Add: '/path/to/clipshare-screenshot.png'
  'weatherly': 'https://github.com/user-attachments/assets/7e4c95b2-68b7-428d-a671-0df79ab7c02f'       // Add: '/path/to/weatherly-screenshot.png'
}

// Accept projectData as prop to pass to Section
const Projects = ({ onProjectSelect }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'exploreToronto',
      title: 'Explore Toronto - Full-Stack Application',
      shortDesc: 'Web application for posting and reviewing tourist locations in Toronto.',
      tags: ['MongoDB', 'Express', 'React', 'Node'],
      longDesc: 'A full-featured web application that enables users to discover, post, and review tourist locations throughout Toronto. This project demonstrates full-stack development with the MERN stack and incorporates mapping features.',
      features: [
        'Built 3 data models and respective create, read, update, and delete methods to streamline data operations',
        'Developed 16+ REST API routes, responding with middleware and validation for secure client requests',
        'Used PassportJS and Session cookies to encrypt and authenticate user credentials, enhancing site security',
        'Designed a responsive UI with real-time mapping using MapboxGL and Material UI to enhance user experience'
      ],
      technologies: 'MongoDB, Express.js, React, Node.js, Passport.js, MapboxGL, Material UI',
      challenges: 'One of the main challenges was implementing real-time mapping functionality while ensuring optimal performance. This was addressed by optimizing data loading and implementing efficient state management.',
      image: projectImages.exploreToronto
    },
    {
      id: 'clipshare',
      title: 'ClipShare Library - Video Processing Service',
      shortDesc: 'Scalable cloud video storage solution with processing capabilities.',
      tags: ['Firebase', 'NextJS', 'React', 'Google Cloud Platform'],
      longDesc: 'A scalable cloud video storage solution that compresses, processes, and displays user-uploaded videos. This project leverages cloud technologies to create a seamless video management experience.',
      features: [
        'Programmed and containerized processing service on Google Cloud using Docker for seamless video processing',
        'Pipelined data between Cloud Storage buckets via Pub/Sub messaging queues to automate raw video encoding',
        'Deployed 5+ GCP Cloud Run functions for serverless video upload processing and secure user authentication',
        'Produced frontend application using TypeScript, React, and Next.js, allowing users to interact with uploads'
      ],
      technologies: 'Firebase, Next.js, React, Google Cloud Platform, Docker, Cloud Run, Pub/Sub, Cloud Storage',
      challenges: 'Managing the video processing pipeline efficiently was a significant challenge. We implemented a robust queuing system to handle the processing load and ensure videos were encoded correctly.',
      image: projectImages.clipshare
    },
    {
      id: 'weatherly',
      title: 'Weatherly - A Machine Learning Meteorologist',
      shortDesc: 'ML-Driven weather forecasting platform with real-time predictions.',
      tags: ['TensorFlow 2.0', 'Spring Boot', 'React', 'AWS'],
      longDesc: 'A full-stack machine learning weather forecasting platform that provides accurate predictions based on historical data and implements LLM technology to explain results in natural language.',
      features: [
        'Transformed and preprocessed 10,000+ rows of weather data to construct a feature set for prediction models',
        'Optimized prediction model accuracy by 25% using LSTM-based temperature forecasting with TensorFlow 2.0',
        'Engineered Large Language Model (LLM) to explain real-time predictions using Spring Boot and OpenAI API',
        'Deployed Spring Boot application on AWS EC2 Linux Virtual Machine to autonomously serve production build'
      ],
      technologies: 'TensorFlow 2.0, Spring Boot, React, AWS EC2, LSTM Neural Networks, OpenAI API',
      challenges: 'Achieving high accuracy in weather prediction required extensive data preprocessing and model tuning. We experimented with various architectures before settling on the LSTM approach that yielded the best results.',
      image: projectImages.weatherly
    }
  ];

  const handleSelectProject = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    setSelectedProject(projectId);
    // Pass project data to parent (Section) for image display
    if (onProjectSelect && project) {
      onProjectSelect(project);
    }
  };

  const handleBackToList = () => {
    setSelectedProject(null);
    // Clear project data in parent
    if (onProjectSelect) {
      onProjectSelect(null);
    }
  };

  const selectedProjectData = projects.find(p => p.id === selectedProject);

  return (
    <ProjectsContainer>
      <AnimatePresence mode="wait">
        {!selectedProject ? (
          // Project List View
          <motion.div
            key="project-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Title
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Projects
            </Title>
            
            <IntroText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Click on a project to see more details, all of the repositories are available via github. More Projects coming soon, with a focus on computer vision & graphics next. 
            </IntroText>
            
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSelectProject(project.id)}
                >
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.shortDesc}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </ProjectTags>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </motion.div>
        ) : (
          // Project Detail View
          <ProjectDetailView
            key="project-detail"
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <DetailHeader>
              <BackButton 
                onClick={handleBackToList}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back to Projects
              </BackButton>
            </DetailHeader>
            
            <ProjectContentBox>
              <motion.div variants={itemVariants}>
                <DetailTitle>{selectedProjectData.title}</DetailTitle>
                
                <DetailTags>
                  {selectedProjectData.tags.map(tag => (
                    <DetailTag key={tag}>{tag}</DetailTag>
                  ))}
                </DetailTags>
                
                <DetailSection>
                  <SectionTitle>Overview</SectionTitle>
                  <DetailText>{selectedProjectData.longDesc}</DetailText>
                </DetailSection>
                
                <DetailSection>
                  <SectionTitle>Key Features</SectionTitle>
                  <FeaturesList>
                    {selectedProjectData.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        variants={itemVariants}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </FeaturesList>
                </DetailSection>
                
                <DetailSection>
                  <SectionTitle>Technologies Used</SectionTitle>
                  <DetailText>{selectedProjectData.technologies}</DetailText>
                </DetailSection>
                
                <DetailSection>
                  <SectionTitle>Challenges & Solutions</SectionTitle>
                  <DetailText>{selectedProjectData.challenges}</DetailText>
                </DetailSection>
              </motion.div>
            </ProjectContentBox>
          </ProjectDetailView>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  )
}

export default Projects