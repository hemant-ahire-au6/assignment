import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function Footer() {
    return (
        <div className="footer" id="contact">
            <Container >
                <Row className="footer1">
                    <Col md={6} style={{color:"#FFFFFF",fontSize:"33px",fontWeight:"600"}}>
                        <h1>The IT Company</h1>
                        </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <span>email@email.com</span><br/>
                        <span>9560289565</span>
                    </Col>
                </Row>
                <Row className="footer2">
                    <Col md={6}>
                    <h1>Follow us At</h1>
                    </Col>
                    <Col md={6}>
                        <h1>Explore</h1>
                       
                        <h6> Home &nbsp; Work &nbsp; service &nbsp; About &nbsp; Contact </h6>
                        <p>Loremipsum address</p>
                    </Col>
                </Row>
                <hr/>
                <Row className="footer3">
                    <h1>Made with Love by designer</h1>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
