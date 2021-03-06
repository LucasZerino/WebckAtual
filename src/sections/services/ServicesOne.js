import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import AnimationContainer from '../../components/animation-container/index'
import AnimatedHeading from '../../components/animated-heading'

class ServicesOne extends React.Component {


    shouldComponentUpdate() {
        return false
    }
      

    render() {
        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            background-image: url(${this.props.background.childImageSharp.fluid.src});
            background-size: cover;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceContainer = styled.div`
            background-color: rgba(0,0,0,.9);
            padding: 100px 0;
            
        `


        const ServiceElement = styled.div`
            margin-bottom: 20px;
            text-align: center;
            padding: 40px;
            border-radius: 20px;
            transition: .2s;
            &:hover {
                background-color: #000;
                box-shadow: 0 28px 60px rgb(4, 229, 229, .1);
                transform: translateY(-10px);
            }
        `
         const ServiceHeading = styled.h4
         `
            font-size: 30px;
            font-weight: 500;
            font-family: Teko;
            color: #fff;
        `
        const ServiceSeparator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 10px;
            margin: auto;
         `
        const ServiceIcon = styled.div`
            margin-bottom: 20px;
            img {
                max-height: 70px;
            }
        `

        const ServiceList = styled.ul`
            padding: 0;
            margin: 11px 0 0 0;
        `

        const ServiceListElement = styled.li`
            list-style: none;
            color: white;
            font-weight: 300;
            text-align: center;
            font-size: 14px;
            margin: 5px 0px;
            &::before {
                display: inline-block;
                content: '';
                border-radius: 2.5px;
                height: 5px;
                width: 5px;
                margin-right: 10px;
                background-color:#04e5e5;
                position: relative;
                bottom: 2.5px;
            }
        `

        return(
            <Section id="servi??os">
                <ServiceContainer>
                    <Container>
                        <AnimatedHeading text="Nossos Servi??os" />
                        <Row>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.mobile.childImageSharp.fluid.src} alt="Mobile App Development" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Software House
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    Aplica????es Web
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Aplica????es Mobile
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Websites e Landing Pages
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInDown"  delay={400}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.web.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Cloud Hosting
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Hospedagem de Sites e LPs
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                A Gest??o online de sua empresa em servidores de alta velocidade e disponibilidade
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Aluguel de servidores VPS ou Dedicados
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInRight" delay={600}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.email.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Marketing Estrat??gico
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Plano Estrat??gico de Marketing
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Linha editorial para sites, blogs etc
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                SEO - Apare??a na busca Org??nica do Google de forma gratuita
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                ADS - Gest??o de An??ncios Pagos
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Cria????o de logotipos e MIVs
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInLeft" delay={800}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.seo.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Seguran??a e Compliance
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                An??lise de Brechas na Seguran??a Digital 
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Adequa????o dos Processos Interno ??s Exig??ncias da LGPD
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Hardening de Sistemas Online
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                <AnimationContainer animation="fadeInUp" delay={1000}>
                                    <ServiceElement>
                                        <ServiceIcon>
                                                <img src={this.props.network.childImageSharp.fluid.src} alt="Mobile App Development" />
                                        </ServiceIcon>
                                        <ServiceHeading>
                                            Seguran??a e Gest??o de Frotas
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceList>
                                            <ServiceListElement>
                                                Rastreamento Veicular
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Gest??o de Frotas com Telemetrias
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Gest??o de Motoristas
                                            </ServiceListElement>
                                            <ServiceListElement>
                                                Tecnologia IOT / M2M
                                            </ServiceListElement>
                                        </ServiceList>
                                    </ServiceElement>
                                </AnimationContainer>
                            </Col>
                            <Col md={4}>
                                    <AnimationContainer animation="fadeInRight" delay={1200}>
                                        <ServiceElement>
                                            <ServiceIcon>
                                                    <img src={this.props.ui.childImageSharp.fluid.src} alt="Mobile App Development" />
                                            </ServiceIcon>
                                            <ServiceHeading>
                                                Aplica????es SaaS
                                            </ServiceHeading>
                                            <ServiceSeparator/>
                                            <ServiceList>
                                                <ServiceListElement>
                                                    CRM / ERP
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Ferramentas Suporte ao Cliente, Chatbos
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Integra????o de Sistemas
                                                </ServiceListElement>
                                                <ServiceListElement>
                                                    Automa????o de Fluxos
                                                </ServiceListElement>
                                            </ServiceList>
                                        </ServiceElement>
                                    </AnimationContainer>
                            </Col>
                        </Row>
                    </Container>
                </ServiceContainer>
            </Section>
        )
    }

}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "bg2.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }
        web: file(relativePath: {eq: "icons/web.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobile: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seo: file(relativePath: {eq: "icons/seo2.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        email: file(relativePath: {eq: "icons/email.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: {eq: "icons/sketch.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: {eq: "icons/network.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }      
      `}
      render={({ 
        background,
        web,
        mobile,
        seo,
        email,
        ui,
        network}) => <ServicesOne  
        background={background}
        web={web}
        mobile={mobile}
        seo={seo}
        email={email}
        ui={ui}
        network={network}
        {...props} />}
    />
  )