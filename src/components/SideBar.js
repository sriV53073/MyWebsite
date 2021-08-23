import React from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import  {NavLink as LinkS} from "react-router-dom";
import Modal from 'react-modal';
import axios from 'axios';
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
const SideBarContainer = styled.aside`
position: fixed;
z-index: 1000;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
 opacity: ${({isOpen}) =>  (isOpen ? '100%' : '0')};
top: ${({isOpen}) =>  (isOpen ? '0' : '-100%')};
`
const CloseIcon = styled(FaTimes)`
color: #fff;
`
const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`
const SideBarWrapper =  styled.div`
color: #fff;
`
const SideBarLink  = styled(LinkS)`
display:  flex;
align-items: center;
justify-content:center;
font-size: 1.5rem;
text-decoration:none;
list-style:none;
transition: 0.2s  ease-in-out;
color: #fff;
cursor: pointer;
&:hover {
    color:  #01bf71;
    transition: 0.2s  ease-in-out;
}
`
const SideBarMenu =  styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;
@media  screen and (max-width: 480px)
{
    grid-template-rows: repeat(6, 60px);
} 

`
const SumbitDiv = styled.div`
width: 30%;
height: 30%;
`

const SideBar = ({isOpen, toggle}) => {
    return (
        <>
        <SideBarContainer  isOpen= {isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="/skills" onClick={toggle}>
                        Skills
                    </SideBarLink>
                    <SideBarLink to="/projects" onClick={toggle}>
                        Projects
                    </SideBarLink>
                    <SideBarLink to= "/email"  onClick={toggle}>
                        Email
                    </SideBarLink>
                    <SideBarLink to= "/phone"  onClick={toggle}>
                        Phone
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
                    
        </>
    )
}

export default SideBar
