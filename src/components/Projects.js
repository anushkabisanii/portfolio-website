import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Emotion Recognition System",
      description: "Python, Machine Learning",
      imgUrl: projImg1,
      codeLink:"https://github.com/anushkabisanii/Emotion_Recognition_System"
    },
    {
      title: "Social Media Post Analysis",
      description: "Python, Machine Learning",
      imgUrl: projImg2,
      codeLink:"https://github.com/anushkabisanii/social_media_post_analysis"
    },
    {
      title: "Heart Disease Prediction",
      description: "Python, Machine Learning",
      imgUrl: projImg3,
      codeLink:"https://github.com/anushkabisanii/Heart-Disease-Prediction"
    },
    {
      title: "Crop Reccomendation System",
      description: "Python, Machine Learning, GUI",
      imgUrl: projImg5,
      codeLink:"https://github.com/anushkabisanii/Crop-Recommendation-With-GUI"
    },
    {
      title: "Round Robin Scheduling",
      description: "Python",
      imgUrl: projImg4,
      codeLink:"https://github.com/anushkabisanii/Optimised-Round-Robin-Scheduling"
    },
    {
      title: "Contact Finder",
      description: "HTML, CSS, JavaScript, MySQL, PHP",
      imgUrl: projImg6,
      codeLink:"https://github.com/anushkabisanii/contact-finder-database"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on. You can also find the links to their source code mentioned below.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.slice(0, 3).map((project, index) => { // Use .slice(0, 3) for the first three projects
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.slice(3, 6).map((project, index) => { // Use .slice(0, 3) for the first three projects
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects to be added soon.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Description" />
    </section>
  )
}
