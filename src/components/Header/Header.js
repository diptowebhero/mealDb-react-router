import './Header.css'
import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TheMealDb</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/restrurants">Restrurants</Link></Nav.Link>
                            <Nav.Link><Link to="/restrurants">Offer</Link></Nav.Link>
                            <Nav.Link><Link to="/restrurants">Today Offer</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;