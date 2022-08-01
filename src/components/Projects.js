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
padding-bottom: 10px;
margin-bottom:10px;
`
const ProjectHeader = styled.h1`
color: black;
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
color: lightgreen;
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
const ProjectDesc = styled.p`
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
                   These are My Projects/Work I have Done
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
                       returned info, in a easy to see format<br/>
                       This was done In React. And uses fetch.
                   </ProjectDesc>

               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Node Email app
                   </ProjectTitle>
                   <ProjectDesc>
                       This was a rest server I created,<br/>
                       in order to help with the creation of my<br/>
                       Portfolio website the goal of this server is to listen<br/>
                       on a route and accept a post request, which then sends<br/>
                       an email, to my personal email with the body of the post<br/>
                       request which contains info on how to contact the sender back
                   </ProjectDesc>
                   
               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Call Center Monitoring-UI
                   </ProjectTitle>
                   <ProjectDesc>
                       I converted the UI for the Call Center Monitoring App<br/>
                       that was written in jquery to React Js, and Node Js. The app uses a flex box to show the data
                       <br/> That was fetched from Node, that was retrieved from the database. The project also used Redux
                       <br/> for State Managment.

                   </ProjectDesc>
                   
               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Personal Website
                   </ProjectTitle>
                   <ProjectDesc>
                       Created this Project using React, Node<br/>
                       with Express and Mongoose. For the multi page website<br/>
                       I used react-router. The website is fully dynamic and responsice. This was done using
                       <br/> Media Query's. The website also implements flex box in multiple places. The website sends a request to the 
                       <br/> Backend email server, in order to store the message sent to the backend in a database. In order for me to see it.
                   </ProjectDesc>
               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Created Website to Display How each Team's Pull Request Data Looks
                   </ProjectTitle>
                   <ProjectDesc>
                      The Website is code in Angular js, and Nest Js, and Mongoose<br/>
                      The Website is done trough 3 layers, the MS layer<br/>
                      The Orchestration layer, and the Front End Layer.
                      <br/> The Front end is coded in Angular, and uses strict Type Script, it talks to the orch layer, using axios
                      <br/>The Orchestration layer is coded in nest js, and manipulates data that the ms layer gives it, based on what
                      <br/> front end needs. The backend is written in nest Js, and talks to the database, using mongoose.
                   </ProjectDesc>
               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Created a POC MarketPlace Site for ATT
                   </ProjectTitle>
                   <ProjectDesc>
                      The Website is code in React Js, and Node Js, and Mongoose<br/>
                      The Website is done trough 2 layers, the Backend<br/>
                      the Front end Layer.
                      <br/> The Front end is coded in React, and uses inline styling, and React Router, it talks to the Backend, using fetch
                      <br/>The Backend is coded in Node Js, and uses mongoose. To the talk the databse for User Authentication. The passwords are
                      <br/> Bycrypted.
                   </ProjectDesc>
               </MyProjects>
               <MyProjects>
                   <ProjectTitle>
                       Created a server side, console app for a theatre.
                   </ProjectTitle>
                   <ProjectDesc>
                      The App is Coded in Java, and this was for a class.
                      <br/> So There is no backend. Involved rather a 2d array is used for each theatre
                      <br/>There is a login section where either a customer, or a manager can login. Customer can buy And
                      <br/> Checkout a seat or multiple seats in a theatre, and also check previous transactions. The manager
                      <br/> Can check the amount of transaction and also reset theatres.
                   </ProjectDesc>
               </MyProjects>
               </Masonry>

           </ProjectBody>
        </>
    )
}

export default Projects
