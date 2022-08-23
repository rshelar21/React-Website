import React, {useState} from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Info from '../components/Info';
import Info2 from "../components/Info2"

const Home = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
    <>
    <Container>

  
    <Main>
    <Herobg>
    <video muted autoPlay={true} loop={true} playsInline={true}>
    <source src='/assets/videos/bg.mp4' type='video/mp4'/>
</video>
    </Herobg>
    <Content>
        <h1>Virtual Banking Made Easy</h1>
        <p>Sign up for new account today and receive $780 in credit
        towards your next payment</p>

        <Btn >
            <Link to="/signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                Get Started 
                {
                    !hover ? (<ArrowForwardIosIcon className='icons'/>) :
                    (<ArrowForwardIcon className='icons'/>)
                }
            </Link>
        </Btn>
    </Content>
    </Main>
    </Container>

    <Info/>
    {/* <Info2/>   */}
    </>
  )
}

const Container = styled.div`
/* height: 100vh; */
/* overflow: hidden; */
`;

const Main = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #0c0c0c;
position: relative;
z-index: 1;
/* min-height: 100vh; */
width: 100vw;
height: 100vh;
`

const Herobg = styled.div`
position: absolute;
/* width: 100%; */
height: 100%;
top: 0;
left: 0;
right: 0;
z-index: -1;
video {
    width: 100%;
    height: 100%;
    object-fit: cover;
   
}
`
const Content = styled.div`
position: relative;
z-index: 99;
display: flex;
align-items: center;
max-width: 650px;
min-width: 300px;
width: 100%;
margin: 0 auto;
color: #fff;
flex-direction: column;
padding: 8px 20px;
flex-wrap: wrap;
/* background: red; */
h1 {
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 665px) {
        font-size: 35px;
    }
    @media screen and (max-width: 500px) {
        font-size: 25px;
    }
}

p {
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin-top: 24px;

    @media screen and (max-width: 450px) {
        font-size: 18px;
    }
}
@media screen and (max-width: 450px) {
    padding: 0;
    }

`

const Btn = styled.div`
margin-top: 32px;
display: flex;
align-items: center;

a {
    color: #fff;
  font-weight: 400;
  font-size: 15px;
  background: #01bf71;
  color: #010606;
  border-radius: 50px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  

.icons {
    font-size: 15px;
    margin-left: 5px;
}

&:hover {
    background: #fff;
}
}
`


export default Home
