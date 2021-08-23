import './Navbar.css'
import styled from 'styled-components'
import  {NavLink as Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  const Nav = styled.nav`
  background: #000;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw -  1000px) /2);
  z-index: 10;
  `
  const NavLink = styled(Link)`
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  &.active {
    color:  #01bf71;
  }
  `
  const Bars = styled(FaBars)`
  display: none;
  color:#fff;
  @media screen and (max-width: 768px)
  {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 75%);
      font-size: 1.8rem;
      cursor: pointer;
}
  `
  const NavMenu =  styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px)
  {
      display: none;
  }
  `
  const Contact  = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px)
  {
      display: none;
  }
  `
function Navbar({toggle}) {
    return (
            <Nav>
                <Bars onClick={toggle}/>
                <NavMenu>
                <NavLink to ="/" exact ={true} >
                    <h1>Home</h1>
                </NavLink>
                    <NavLink to ="/skills" exact={true}>
                    <h1>Skills</h1>
                </NavLink>
                <NavLink to ="/projects" exact={true}>
                    <h1>Projects</h1>
                </NavLink>
                </NavMenu>
                <Contact>
                    <NavLink to = "/email" exact={true}>
                    <img className= "picture" src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Email"/>
                    </NavLink>
                    <NavLink to ="/phone">
                    <img src="https://img.icons8.com/color/48/000000/address-book.png"/>
                    </NavLink>
                </Contact>
            </Nav>
    )
}

export default Navbar
