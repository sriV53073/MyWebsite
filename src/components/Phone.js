import React from 'react'
import styled from 'styled-components'
const PhoneDiv = styled.div`
z-index: 10;
  position: absolute;
  top: 40%;
  width: 100%;
  text-align:center;
  font-size: 23px;
  color: white;
  font-weight:bold;
  @media screen and (max-width: 955px)
  {
      font-size: 17px;
}
@media screen and (max-width: 757px)
  {
      font-size: 14px;
}
@media screen and (max-width: 667px)
  {
      font-size: 14px;
}
@media screen and (max-width: 587px)
  {
      font-size: 11px;
}
@media screen and (max-width: 497px)
  {
      font-size: 9px;
}
`;
function Phone() {
    return (
        <>
        <PhoneDiv>
            Hi, Thanks for showing interest in me. Please feel free to contact me at 847-917-1358
        </PhoneDiv>
        </>
    )
}

export default Phone
