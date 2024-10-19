import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.jpg";
import InteractiveCard from "./InteractiveCard";
import Particles from "react-tsparticles"; // Import particles.js

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // Particle options
  const particlesInit = (main) => {
    console.log(main); // Can be used for debugging or loading other plugins
  };

  const particlesLoaded = (container) => {
    console.log(container); // Can be used for debugging
  };

  return (
    <section className="skill" id="skills">
      {/* Particles background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "repulse"
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
      
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              I have strong competitive programming skills in C++ and Java, and worked on building websites using React, Node.js, MongoDB, and Express.
        
              </p>
              <h2>Explore my skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
              <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${5} interactive-card-slide`}>
                    <h2>Java</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${15} interactive-card-slide`}>
                    <h2>C++</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${7} interactive-card-slide`}>
                    <h2>C</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${3} interactive-card-slide`}>
                    <h2>Python</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${5} interactive-card-slide`}>
                    <h2>HTML</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${4}`}>
                    <h2>CSS</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${3}`}>
                    <h2>JavaScript</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${2}`}>
                    <h2>React</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${1}`}>
                    <h2>Node.js</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${5}`}>
                    <h2>Express</h2>
                  </InteractiveCard>
                </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${4}`}>
                    <h2>MongoDB</h2>
                  </InteractiveCard>
                  </div>
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${9}`}>
                    <h4>TOOls</h4>
                    <p>GIT,Vs Code</p>
                  </InteractiveCard>
                </div>
                
                <div className="item">
                  <InteractiveCard className={`journey-item card-texture-${3}`}>
                    <h2>SQL</h2>
                  </InteractiveCard>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
