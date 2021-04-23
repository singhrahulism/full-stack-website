import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


function Header() {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg">
                <Navbar.Brand href="#home">Shopping Site</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Cart</Nav.Link>
                    <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
