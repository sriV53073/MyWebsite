import React from 'react'
import styled from 'styled-components';
import Masonry from 'react-masonry-css'
import './Projects.css';
const ProjectBody = styled.div`
z-index: 10;
  position: absolute;
  top: 20%;
  width: 100%;
  text-align:center;
`
const MyProjects = styled.div`
z-index: 10;
text-align: center;
`
const ProjectHeader = styled.h1`
color: white;
  font-size: 50px;
  @media screen and (max-width: 860px)
  {
      font-size: 40px;
}
  @media screen and (max-width: 768px)
  {
      font-size: 35px;
}
@media screen and (max-width: 594px)
  {
      font-size: 25px;
}
@media screen and (max-width: 419px)
  {
      font-size: 20px;
}
`
const ProjectTitle = styled.h3`
  @media screen and (max-width: 860px)
  {
      font-size: 20px;
}
  @media screen and (max-width: 768px)
  {
      font-size: 15px;
}
@media screen and (max-width: 594px)
  {
      font-size: 20px;
}
padding-bottom:1px;
`;
const ProjectDesc = styled.p
`
font-size: 1vw;
@media screen and (max-width: 1100px)
  {
      font-size: 13px;
}
@media screen and (max-width: 700px)
  {
      font-size: 15px;
}
@media screen and (max-width: 457px)
  {
      font-size: 11px;
}

`
const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };
function Projects() {
    return (
        <>
           <ProjectBody>
               <ProjectHeader>
                   These are the Projects I worked on
               </ProjectHeader>
               <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
               <MyProjects>
                   <ProjectTitle>
                       Pokemon app
                   </ProjectTitle>
                   <ProjectDesc>
                       This was my first web app, <br/>
                       the goal of this app is that when the user <br/>
                       types into a search bar, the app does a fetch <br/>
                       request to the pokemon api, and display's the<br/>
                       returned info, in a easy to see format
                   </ProjectDesc>

               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Node Email app
                   </ProjectTitle>
                   <ProjectDesc>
                       This was just a quick app I created,<br/>
                       in order to help with the creation of my<br/>
                       personal website the goal of this app is to listen<br/>
                       on a server accept a post request, which then sends<br/>
                       an email, to my email with the body of the post<br/>
                       request
                   </ProjectDesc>
                   
               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Call Center Monitoring-UI
                   </ProjectTitle>
                   <ProjectDesc>
                       I converted the UI for the Call Center Monitoring<br/>
                       app from jquery to React, and Node.

                   </ProjectDesc>
                   
               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Personal Website
                   </ProjectTitle>
                   <ProjectDesc>
                       Created this Project using React, Node<br/>
                       with Express, for the multi page website<br/>
                       I used react-router.

                   </ProjectDesc>
               </MyProjects>
               </Masonry>

           </ProjectBody>
        </>
    )
}

export default Projects
