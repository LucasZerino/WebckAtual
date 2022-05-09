import React from 'react'
import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
var scrollToElement = require('scroll-to-element')

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          collapse: false,
          sticky: false,
          sections: this.props.sections ? this.props.sections : ['home', 'quem somos', 'serviços', 'avaliações', 'contato']
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (window.pageYOffset >= 50 && this.state.sticky) {
            if (this.state.collapse !== nextState.collapse) {
                return true
            }
            return false
        } else {
            return true
        }
    }

    handleScroll = event => {
        if (window.pageYOffset >= 50) {
            this.setState({ sticky: true })
        } else {
            this.setState({ sticky: false })
        }
    }

    collapseNav() {
        console.log(this.state, 'col')
        if (!this.state.collapse) {
            this.setState({ collapse: true })
        } else {
            this.setState({ collapse: false })
        }
    }
    

    render() {

        

        const NavbarWrapper = styled.div`
            position: absolute;
            z-index: 1;
            width: 100%;
            padding: 20px 0;
            z-index: 100;
            &.sticky {
                position: fixed;
                background-color: rgba(0,0,0,.8);
                padding: 0 0;
                @media (max-width: 500px) {
                    padding: 20px 0;
                }
            }
        `

        const NavbarContainer = styled(Container)`
            display: flex;
            position: relative;
            @media (max-width: 500px) {
                display: block;
                padding: 0;
            }
            
        `

        const Nav = styled.nav`
            flex: 0 0 80%;
            max-width: 80%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
                background-color: rgba(0,0,0,.8);
                margin-top: 20px;
                &.hidden_mobile {
                    display: flex;
                }
            }
        `

        const LogoWrapper = styled.div`
            flex: 0 0 20%;
            max-width: 20%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            @media (max-width: 500px) {
                flex: 0 0 100%;
                max-width: 100%;
                justify-content: center;
            }
        `

        const Logo = styled.img`
            height: 40px;
            @media (max-width: 1023px) {
                height: 30px;
            }
        `

        const NavInner = styled.div`
        .ancora{
            z-index: 95;
            position: relative;
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
            width: 50px;
            height: 20px;
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
            width: 20px;
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
            font-size: 0.7em;
            opacity: 0.8;
            text-transform: uppercase;
            letter-spacing: 2px;
            transition: 0.5s;
            color: #04e5e5;
        }


        .ancora:hover .spanBotao{
            z-index: 91;
            letter-spacing: 3px;
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
            width: 30px;
            height: 20px;
          }
          
        }
        a{
            color: #fff;
            padding: 10px;
            font-size: 100%;
            text-transform: uppercase;
        }
        a:hover{
            color: #04E5E5;
        }

        .centro{
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
        }
            justify-content: flex-end;
            
        `

        const Toggler = styled.button`
            color: #fff;
            position: absolute;
            right: 0;
            top: 0;
            @media (min-width: 700px) {
                display: none;
            }
        `
        
        
        return(
            <NavbarWrapper className={`header${this.state.sticky === true ? ' sticky' : ''}`}>
                <NavbarContainer>
                    <LogoWrapper className="logo">
                       <a href='/'><Logo src="/img/logo.png" alt="logo" /></a>
                    </LogoWrapper>
                    <Toggler
                        onClick={() => this.collapseNav()}
                        className="navbar-toggler navbar-toggler-right"
                    >
                       <FontAwesomeIcon icon={faBars} className="bars" />
                    </Toggler>
                    <Nav className={`navbar navbar-expand-sm ${this.state.collapse === true ? 'expand' : 'hidden_mobile'}`}>
                        <NavInner className={`navbar-collapse collapse ${this.state.collapse === true ? 'show' : ''}`}>
                            <div className="navbar-nav">{this.navItems()}</div>
                            <div className='centro'>
                            <a className='ancora' target="_blank" href='https://webck.com.br/portifolio/'><span className='spanBotao'>Rastreador</span></a>
                            </div>
                        </NavInner>
                    </Nav>
                </NavbarContainer>
            </NavbarWrapper>
        )
    }

    navigate(id) {
        if (this.props.scroll) {
            const el = document.getElementById(id)
            scrollToElement(el, {
                offset: 0,
                ease: 'in-out-expo',
                duration: 20
            })
        } else {
            window.location.href = `./#${id}`;
        }
    }

    navItems() {
        const NavItem = styled.button`
            background: none;
            border: none;
            color: #fff;
            text-transform: uppercase;
            font-weight: 500;
            margin: 10px 5px;
            transition: .5s;
            &:hover {
                color: #04e5e5;
            }
            &:focus {
                outline: none;
            }
            @media (min-width: 501px) and (max-width: 1023px) {
                font-size: 11px;
                margin: 2px;
            }
        `
        
        return this.state.sections.map((value, index) => {
            return (
                <NavItem key={index} onClick={() => this.navigate(value)}>
                    {value}
                </NavItem>
            )
        })
    }
}

export default Navbar