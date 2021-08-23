import React from 'react'
import Masonry from 'react-masonry-css';
import styled from 'styled-components';
import './Skills.css';
const SkillsBody = styled.div`
z-index: 10;
  position: absolute;
  top: 10%;
  width: 100%;
  text-align:center;
`
const SkillsHeader = styled.h1`
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
`;
const MySkills = styled.div`
z-index: 10;
height: 50px!important;
text-align: center;
`;
const SkillsTitle = styled.h3`
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
const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
  };
function Skills() {
    const myExpression = function()
    {
       const mySkills = ["JavaScript", "HTML", "CSS","React","Node.js","Redux","Express","Agile",""];
        const skillsList = mySkills.map((skill) =>
        <MySkills>
            <SkillsTitle>
                {skill}
            </SkillsTitle>
        </MySkills>
        );
        return skillsList;
    }
    return (
        <>
            <SkillsBody>
                <SkillsHeader>
                    These are my Current Skills
                </SkillsHeader>
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                    {myExpression()}
                </Masonry>


            </SkillsBody>
        </>
    )
}

export default Skills
