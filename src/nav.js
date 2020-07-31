import React from 'react';
import './App.css';

import logo from './img/logo.png'

import * as Icon from 'react-bootstrap-icons';

import './custom.scss';

import { Navbar, Nav } from 'react-bootstrap';

//TODO: Creare il logo e aggiungerlo alla navabar

function Home(){
    const iconStyle = {
        fill : '#0070c7',
        height: 24,
        verticalAlign: 'bottom',
        width: 24,
    }
    return(
        <nav>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
            <img
                    src= {logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Go to Venice Logo"
                />  
                <strong> Go to venice</strong>
            </Navbar.Brand>          
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Nav.Link href="/about">
                        <Icon.FilePerson style={iconStyle} />
                        About
                    </Nav.Link>
                    <Nav.Link  href="/contact">
                        <Icon.Envelope style={iconStyle} />
                        Contact
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </nav>


    )
}

export default Home;