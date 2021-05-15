import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

function NavBar() {
    return (
        <div>
        <Navbar
          variant="primary"
          expand="md"
          className="animate-navbar nav-theme justify-content-between"
        >
          <div>
            <Navbar.Brand href="#home">
              The IT Company
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link  href="#about">About</Nav.Link>
                <Nav.Link  href="#skills">Skills</Nav.Link>
                <Nav.Link  href="#projects">Projects</Nav.Link>
                <Nav.Link  href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    )
}

export default NavBar;
