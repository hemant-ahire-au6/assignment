import React from 'react'
import { Navbar, Nav, NavDropdown,Container,Row,Col } from 'react-bootstrap'
import Logo from '../asset/Logo.svg'

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
            <img style={{margin:"10px"}} src={Logo} alt="The IT Company" />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto " style={{marginLeft:"20px"}}>
              <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-item" href="#about">Work</Nav.Link>
              <NavDropdown className="nav-item" title="Services" id="basic-nav-dropdown ">
                <Container style={{width:"30vw",height:"30vh",padding:"10px"}}>
                  <Row>
                    <Col md={6}>
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </Col>
                    <Col md={6}>
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </Col>
                  </Row>
                </Container>
              </NavDropdown>
              <Nav.Link className="nav-item" href="#projects">About</Nav.Link>
              <Nav.Link className="nav-item" href="#contact">StartUp</Nav.Link>
              <Nav.Link className="nav-item" href="#contact">Let's Talk</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  )
}

export default NavBar;
