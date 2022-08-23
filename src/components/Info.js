import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

const Info = () => {
  return (
    <>
    <Main>
    <Container>


    <Wrap>
    <Left>
        <Para>PREMIUM BANK</Para>
        <h1>Unlimited <br /> Transactions with <br /> zero fees </h1>
        <p>Get access to our exclusive app that allos you <br /> to send Unlimited transition without getting <br /> charged any fees</p>
        <Link to="/">
        Get Started
        </Link>
    </Left>
    <Right>
        <img src="/assets/images/bg3.svg" alt="" />
    </Right>
    </Wrap>
    </Container>
    </Main>
      
    </>
  )
}

const Main = styled.div`
color: #fff;
/* background: #f9f9f9; */
background: #010606;
height: 560px;
/* height: 100%; */
width: 100vw;
/* width: 100vw; */
padding: 100px 20px;

@media screen and (max-width: 786px){        
    height: 100%;
    }



`;

const Container = styled.div`
position: relative;
width: 100%;
max-width: 1128px;
margin: 0px auto;
`;



const Wrap = styled.div`
display: flex;
justify-content: space-evenly;

@media screen and (max-width: 786px){        
    flex-direction: column;
    }

`


const Left = styled.div`
width: 50%;
min-width: 340px;

/* margin: 0 30px; */

h1 {
    font-size: 45px;
    font-weight: 800;
    color: #fff;

    @media screen and (max-width: 850px){
        font-size: 40px;
        
    }

}

a {
    background: #01bf71; 
    padding: 10px 22px;
    border-radius: 50px;
    margin-top: 20px;
    position: absolute;
    color: #000;

}

@media (max-width: 786px){
    min-width: auto;
    width: 100%;
    margin-bottom: 50px;
    margin-left: 0;
    margin-right: 0;

    }




`

const Para = styled.p`
color: #01bf71;
`;


const Right = styled.div`
max-width: 560px;
min-width: 340px;
width: 100%;
height: fit-content;
object-fit: cover;

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


@media (max-width: 786px){
    min-width: auto;
    max-width: 100%;
    margin-top: 30px;
}
`



export default Info
