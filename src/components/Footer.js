import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

function Footer() {
    return (
        <div>
            <Container className="footer">
                <Row>
                    <Col md={6} style={{color:"#FFFFFF"}}>The IT Company</Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <span>email@email.com</span>
                        <span>9560289565</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h1>Follow us At</h1>
                    </Col>
                    <Col>
                        <h2>Explore</h2>
                        <h6> Home &nbsp; Work &nbsp; service &nbsp; About &nbsp; Contact </h6>
                    </Col>
                </Row>
                <hr/>
                <Row className="justify-content-center">
                    <h1>Made with Love by designer</h1>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
