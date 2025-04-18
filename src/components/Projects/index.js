import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From MERN Stack to Java Springboot. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" style={{color:"white"}} onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" style={{color:"white"}} onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'node' ?
            <ToggleButton active value="node" style={{color:"white"}} onClick={() => setToggle('node')}>NodeJs</ToggleButton>
            :
            <ToggleButton value="node" style={{color:"white"}} onClick={() => setToggle('node')}>NodeJs</ToggleButton>
          }
          <Divider />
          {toggle === 'springboot' ?
            <ToggleButton active value="springboot" style={{color:"white"}} onClick={() => setToggle('springboot')}>Java + Springboot</ToggleButton>
            :
            <ToggleButton value="springboot" style={{color:"white"}} onClick={() => setToggle('springboot')}>Java + Springboot</ToggleButton>
          }
          <Divider />
          {toggle === 'andriod' ?
            <ToggleButton active value="andoroid" style={{color:"white"}} onClick={() => setToggle('android')}>Flutter</ToggleButton>
            :
            <ToggleButton value="android" style={{color:"white"}} onClick={() => setToggle('android')}>Flutter</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects