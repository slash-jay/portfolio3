import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-2.png";
import projImg3 from "../assets/img/project-4.png";
import projImg4 from "../assets/img/project-ext.png";

// import colorSharp2 from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "FIX ME",
      description: " Web portal for the business partners ,investors,job seekers for collaboration.",
      imgUrl: projImg1,
    },
    {
      title: "MENTAL HEALTH",
    description: "TEENAGERS MENTAL HEALTH ASSESMENT",
      imgUrl: projImg2,
    },
    {
      title: "QUICKEY",
      description: "SECURED SAVING NOTES",
      imgUrl: projImg3,
    },
    {
      title: "MAKEITEASY",
      description: "chrome extension for easy notesmaking",
      imgUrl: projImg4,
    },
   
  ];

  const projectDetails = [
    {
      description: " Web portal for the business partners ,investors,job seekers for collaboration.",
      technologies:"Html,css,JavaScript, Node.js, Express, MongoDB",
      github: "https://github.com/slash-jay/fixme11",
      liveDemo: "https://fixme11.onrender.com/",
    },
    {
      description:  "Web portal for the mental health assessment for the teeenagers and adults.",
      technologies:"Python,firebase,ml classifiers",
      github: "https://github.com/slash-jay/mgit_hack",
    
    },
    {
      description: "a web application for securely saving notes and protected text online without requiring user accounts.",
     technologies:"Html,css,JavaScript, Node.js, Express, MongoDB,crypto js",
      github: "https://github.com/slash-jay/quicky",
      liveDemo: "https://quicky-1.onrender.com ",
    },
   
    {
      description: " The MAKE IT EASY EXTENSION is a Student Helper Extension i.e Chrome browser extension designed to assist students and children in organizing and managing their online study materials efficiently. It provides a versatile notepad that allows users to create and maintain notes by integrating text, screenshots, and other media directly from their web browsing sessions. This tool is particularly useful for studying, research, and online coursework.",
      technologies:"Html,css,JavaScript, chrome Apis",
      github: "https://github.com/slash-jay/makeiteasy",
      DownloadEXTENSION: "https://github.com/slash-jay/makeiteasy/releases/tag/v1.2.0",
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <h2>Projects</h2>
                  
                    <p>In my journey, I have explored and created several projects that have helped me gain knowledge and face challenges, pushing me to become a proficient problem solver in web development. Below are some of the projects I have worked on:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project Details</Nav.Link>
                      </Nav.Item>
                      
                    </Nav>
                    <Tab.Content id="slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
  <Row>
    {projectDetails.map((detail, index) => (
      <Col key={index} md={4} className="mb-4">
        <div className="project-details-card">
          <h4>{`Project ${index + 1}`}</h4>
          <p>{detail.description}</p>
          <a href={detail.github} target="_blank" rel="noopener noreferrer">GitHub</a><br />
          <a href={detail.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </Col>
    ))}
  </Row>
</Tab.Pane>

                     
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
  
    </section>
  );
}
