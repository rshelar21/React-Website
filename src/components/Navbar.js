import React, {useState} from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [menu, setMenu] = useState("close")
  const [nav, setNav] = useState(false)
   const createScroll = () => {
    console.log(window.scrollY)
    // setNav(true)
    if(window.scrollY >= 50){
      setNav(true)
    }
    else {
      setNav(false)
    }
  }
  window.addEventListener("scroll", createScroll)

  

  const handlebar = (e) => {
    switch(menu){
      case "close" :
        setMenu("open");
        break;
      case "open" : 
      setMenu("close")  
      break;;
      default :
      setMenu("close")
      break;
    }
  }
  return (
    <>
    <Container style={{background: nav ? "#000" : "transparent"}}>
    <Nav>
    <Link to="/">
    dolla
    </Link>
    <MenuBar>
      <MenuIcon onClick={handlebar}/>
    </MenuBar>
    <NavList>
      <NavItem>
        <Link to="/about">
        About
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/discover">
        Discover
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/services">
        Services
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/signup">
        Sign Up
        </Link>
      </NavItem>
    </NavList>

    <NavBtn>
    <Link to="signup">
    Sign Up
    </Link>
    </NavBtn>
    </Nav>
    <Sidebar menu={menu} handlebar={handlebar}/>
    </Container>
    </>
  )
}

const Container = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
width: 100vw;
height: 70px;
z-index: 999;
background: #000;
/* margin-top: -80px; */
/* background: transparent; */


`
const Nav = styled.nav`
max-width: 1128px;
margin: 0 auto;
height: 70px;
display: flex;
color: #fff;
/* background: #000; */
align-items: center;
justify-content: space-between;
padding: 0 24px;
z-index: 999;


a {
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    justify-self: flex-start;
    margin-left: 24px;
    cursor: pointer;
}

@media screen and (max-width: 960px) {
    transition: all 0.8s ease;
    
}


`


const MenuBar = styled.div`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  cursor: pointer;
}
`

const NavList = styled.ul`
display: flex;
align-items: center;
list-style: none;
/* margin-right: -22px; */

@media screen and (max-width: 768px) {
  display: none;
 
}

`

const NavItem =  styled.li`

a {
  color: #fff;
  font-weight: 400;
  font-size: 15px;
}
`


const NavBtn = styled.div`

@media screen and (max-width: 768px) {
  display: none;
 
}

a {
  color: #fff;
  font-weight: 400;
  font-size: 15px;
  background: #01bf71;
  color: #010606;
  border-radius: 50px;
  padding: 10px 22px;


  &:hover {
    transition: all 0.2s ease;
    background: #fff;
    color: 010606;
  }
}

`

export default Navbar