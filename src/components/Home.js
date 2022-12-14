import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const HomeBody = styled.div`
  z-index: 10;
  position: absolute;
  top: 40%;
  width: 100%;
  text-align:center;
  `
  const Header = styled.h1`
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
  `
   const Text = styled.h3`
   color: black;
   font-size: 20px;
   @media screen and (max-width: 860px)
  {
      font-size: 18px;
}
   @media screen and (max-width: 768px)
  {
      font-size: 16px;
}
@media screen and (max-width: 693px)
  {
      font-size: 14px;
}
@media screen and (max-width: 603px)
  {
      font-size: 12px;
}
@media screen and (max-width: 511px)
  {
      font-size: 10px;
}
@media screen and (max-width: 417px)
  {
      font-size: 8px;
}
   `
function Home() {
    return (
        <>
            <HomeBody>
                <Header>
                    Hi, I'm Sri Vemugunta
                </Header>
                <Text>
                    I am a computer science Student at Ut Dallas, with an excpected grad date of May 2023
                    <br/>
                    And Software developer, who is experienced with both back end and front-end development.
                    <br/>
                    Learn more about me through my Portfolio
                    <br/>
                    Donwload my resume below:<br/>
                    <Button size="sm" href='./Sri_s_Official_Resume (3).pdf' download = "Sri_Resume">Download</Button>
                </Text>
            </HomeBody>
       </>
    )
}

export default Home
