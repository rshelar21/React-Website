import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom"
import {Link as LinkS} from "react-scroll"

const Sidebar = (props) => {

    const handleClose = (e) => {
        props.handlebar(e)
    }
  return (
    <>
    {
        props.menu === "open" &&
    
    <Main>
    
    <Close>
        <CloseIcon onClick={handleClose}/>
    </Close>
    <Menu>
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
      <NavItem>
      <NavBtn>
    <Link to="signup">
    Sign Up
    </Link>
    </NavBtn>
    </NavItem>
      
    </NavList>

    
    
    </Menu>
    </Main>
    }
    </>
  )
}

const Main = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
color: #fff;
background: #000;
width: 100%;
/* height: 100%; */
height: 100vh;
animation: fadeIn 0.5s ease;
display: none;
@media screen and (max-width: 768px) {
    display: block;
    
}

`
const Close = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
margin-top: 10px;

`

const Menu = styled.div`
/* background: green;   */
/* max-width: 350px; */
width: 100%;
margin: 10px auto;



`


const NavList = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;

`

const NavItem = styled.li`
padding: 40px 0;
width: 100%;
text-align: center;


a {
    color: #fff;
    font-size: 20px;


    &:hover {
        color: #01bf71;
    }
}


`
const NavBtn = styled.div`


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


export default Sidebar
