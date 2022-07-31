import React from 'react'
import styled from 'styled-components'
const EmailForm = styled.form`
z-index: 10;
  position: absolute;
  top: 40%;
  width: 100%;
  text-align:center;
  font-size: 20px;
  color: black;
  font-weight:bold;
  @media screen and (max-width: 955px)
  {
      font-size: 15px;
}
@media screen and (max-width: 757px)
  {
      font-size: 13px;
}
@media screen and (max-width: 667px)
  {
      font-size: 11px;
}
@media screen and (max-width: 587px)
  {
      font-size: 9px;
}
@media screen and (max-width: 497px)
  {
      font-size: 7px;
}
`;
const Emailinput = styled.input`
margin-left:10px;
`;
const Emailtextarea = styled.input`
margin-left:10px;
`;

const axios = require('axios');
function Email() {
    const [emailValue, setEmailValue] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [thanks, setThanks] = React.useState("");
    const [dat, setDat] = React.useState('');
    const changeEmail = (event) =>
    {
        setEmailValue(event.target.value);
    }
    const changeSubject = (event) =>
    {
        setSubject(event.target.value);
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        e.stopPropagation();
       const content = {
           email: emailValue,
           subjectValue: subject
         };
     
         async function makeGetRequest() {

          //let d = await axios.get('http://localhost:3001/');
         // setDat(d.data);
            let res = await axios.post('https://hidden-bayou-27100.herokuapp.com/email', { content})
          
            let data = res.data;
            console.log(data);
            setThanks(`Hi You Email Was saved, I will respond as soon as I can.`);
          }
          makeGetRequest();
        setEmailValue("");
        setSubject("");
    }

    return (
        <>
          <EmailForm onSubmit={handleSubmit}>
                        <label>
                         Your Email : 
                        <Emailinput type="text" value={emailValue} onChange={changeEmail} />
                        </label>
                        <label>
                         What do you want to tell me :
                         <Emailtextarea rows = "5" cols = "60" value={subject} onChange={changeSubject}/>
                        </label>
                        <Emailinput type="submit" value="Submit" />
                        <br/>
                        {dat}
                        {thanks}
            </EmailForm>   
        </>
    )
}

export default Email
