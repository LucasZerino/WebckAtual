import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from '../../components/animation-container'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AnimatedHeading from '../../components/animated-heading'

class ClientsOne extends React.Component {


    shouldComponentUpdate() {
      return false
    }
  

    render() {
        const Section = styled.section`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            background-color: transparent;
            background-size: cover;
            padding: 100px 0;
            .ancora{
              z-index: 95;
              margin-top: 150px;
              position: relative;
              top: 20px;
              padding: 20px 60px;
              display: flex;
              justify-content: center;
              align-items: center;
              background: rgba(0,0,0,0.5);
              overflow: hidden;
              text-decoration: none;
              letter-spacing: 1px;
              color: white;
              text-align: center;
              font-weight: 400;
              width: 500px;
              height: 120px;
              transition: 1s;
              -webkit-box-reflect: below 1px linear-gradient(tranparent, #0004);
          }
          .ancora:hover{
              background: #04e5e5;
              box-shadow: 0 0 10px #04e5e5;
              0 0 30px #04e5e5;
              0 0 60px #04e5e5;
              0 0 100px #04e5e5;
          }
          .ancora::before{
              content: '';
              position: absolute;
              width: 40px;
              height: 500%;
              background: #04e5e5;
              transition: 1s;
              animation: animate 2s linear infinite;
          }
          .ancora:hover::before{
              width: 100%;
          }

          .ancora::after{
              content: '';
              position: absolute;
              inset: 4px;
              background: #333;
          }
          .ancora:hover::after{
              background: #333;
              color: red;
          }

          .spanBotao{
              position: relative;
              z-index: 91;
              font-size: 1.5em;
              opacity: 0.8;
              text-transform: uppercase;
              letter-spacing: 4px;
              transition: 0.5s;
              color: #04e5e5;
          }


          .ancora:hover .spanBotao{
              z-index: 91;
              font-size: 1.5em;
              opacity: 1;
              color: #04e5e5;
          }

          @keyframes animate {
              0%{
                  transform: rotate(0deg);
              }
              100%{transform rotate(360deg);}
          }

          @media (max-width: 500px) {
            .ancora{
              width: 300px;
              height: 120px;
            }
            
          }
           
           
          }
        `

        
        const Heading = styled.a `
            .heading{
              position: absolute;
              width: 100%;
              height: 100%;
               z-index: -99;
            }
        `

      const LeftCol = styled(Col)`
          display: flex;
          align-items: center;
      `


      const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };



        return(
            <Section id="clients">
                <AnimatedHeading text="Conheça nossos trabalhos" />
                <a className='ancora' target="_blank" href='https://webck.com.br/portifolio/'><span className='spanBotao'>PORTFOLIO WEBCK</span></a>
                  <Heading>
                    <div className='heading'>
                    <Particles className='particles'
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                    "particles": {
                      "number": {
                        "value": 100,
                        "density": {
                          "enable": true,
                          "value_area": 2000
                        }
                      },
                      "color": {
                        "value": ["#03afaf","#04e5e5"]
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#fff"
                        }
                      },
                      "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                          "enable": true,
                          "speed": 0.5,
                          "opacity_min": 0.1,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 8.017060304327615,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 12.181158184520175,
                          "size_min": 0.1,
                          "sync": true
                        }
                      },
                      "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": this.context.theme === "dark" ? "#fff" : "#555",
                        "opacity": 0.5,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "bounce",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "canvas",
                      "events": {
                        "onhover": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "onclick": {
                          "enable": false,
                          "mode": "push"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 400,
                          "size": 40,
                          "duration": 2,
                          "opacity": 8,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 200,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }}
                />
                    </div>
                  </Heading>
            </Section>
        )
    }

    clients() {
      return this.props.clients.map((value, index) => {
        const Client = styled.img`
            height: 100px;
        `

        const ClientCol = styled(Col)`
            text-align: center;
            padding: 20px 0;
            border-color: #efefef;
            border-left: none;
            border-top: none;
            transition: .1s;
            &:hover {
              transform: scale(1.1);
              background-color: #04e5e5;
              z-index: 5;
              border-radius: 10px;
            }
            @media (max-width: 500px) {
              border: none !important;
            }
        `
          return (
              <ClientCol md={3} key={index} style={{borderRight: (index+1)%4 === 0 ? "none" : "1px solid", borderBottom: index < 8 ? "1px solid" : "none"}}>
                  <AnimationContainer animation="fadeIn slower" delay={index*200}>
                    <Client
                      src={value.node.childImageSharp.fluid.src}
                      alt="Client"
                    />
                  </AnimationContainer>
              </ClientCol>
          )
      })
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        clients: allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "clients"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500) {
                  src
                }
              }
            }
          }
        }
      }      
      `}
      render={({ clients }) => <ClientsOne clients={clients.edges} {...props} />}
    />
  )