import React  from 'react';
import {Nav, Navbar} from "react-bootstrap";
import styled from 'styled-components';
const Styles=styled.div `
     .navbar{
    background-color:#737373;
    z-index:100;
  }
    .navbar-brand, .navbar-nav .nav-link{
    color:#bbb;

    &:hover{
      color:white;
    }
  }
`;
 
export const Navigationbar=()=>{
  
  return(

  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">GO Bus</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/signup">Signup/Login</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/booking">Booknow</Nav.Link></Nav.Item>

          </Nav>
      </Navbar.Collapse>
      </Navbar>
  </Styles>
)};
