import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to='/home'><Navbar.Brand href="#home">Relax Room</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me ">
                         <Link to='/home'><Nav.Link href="#home">Home</Nav.Link></Link> 
                         <Link to='/movie'> <Nav.Link href="#movie">Movie</Nav.Link></Link>
                         <Link to='/series'><Nav.Link href="#series">Series</Nav.Link></Link>
                            <Nav.Link href="#todos">Todos</Nav.Link>
                            <Nav.Link href="#weather">Weather</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;