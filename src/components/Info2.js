import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"



const Info2 = () => {
  return (
    <>
    <Main>
    <Container>
    <Wrap>
        <Left>
            <img src="/assets/images/bg3.svg" alt="" />
        </Left>
        <Right>
            <Para>UNLIMITED ACCESS</Para>
            <h1>Login to your <br /> account at any <br /> time </h1>
            <p>We have you covered no matter where you are <br />
            located. All you need is an internet connection <br /> and a phone 
            or computer</p>
            <Link to="/">
            Learn More
            </Link>
        </Right>
    </Wrap>
    </Container>
    </Main>
    </>
  )
}
const Main = styled.div`
background: #fff;
height: 860px;
height: 100%;
width: 100%;
/* width: 100vw; */
padding: 100px 20px;
@media screen and (max-width: 786px){        
    max-height: 100%;
    width: 100%;
    }



`;

const Container = styled.div`
position: relative;
max-width: 1128px;
width: 100%;
/* background: red; */
margin: 0 auto;

`;

const Wrap = styled.div`
display: flex;
justify-content: space-evenly;

@media screen and (max-width: 786px) {
    flex-direction: column;
    
}
`;

const Left = styled.div`
max-width: 560px;
min-width: 360px;
height: fit-content;
object-fit: cover;
flex-wrap: 1;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media screen and (max-width: 786px)  {
    min-width: auto;
    max-width: 100%;
    margin: 0;
    margin-left: 0;
    margin-right: 0;
}
`

const Right = styled.div`
width: 50%;
min-width: 360px;
color: #010606;
position: relative;
h1 {
    font-size: 45px;
    font-weight: 800;

}

a {
    color: #fff;
    background: #010606;
    padding: 10px 22px;
    border-radius: 50px;
    position: absolute;
    margin-top: 20px;
}

@media screen and (max-width: 786px)  {
    width: 100%;
    margin: 0;
    min-width: auto;

}

`

const Para = styled.p`
color: #01bf71;
`


export default Info2