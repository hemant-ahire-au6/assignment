import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
import Img from '../asset/Group 69.svg'


function Contact() {
    return (
        <div>
            <Container >
                <Row >
                    <Col md={8} lg={true}>
                        <Row>
                            <Col  lg={true}>
                                <div  className="contact-data">
                                <h1>Feel Free to get in touch with us</h1>
                                <p>If you have an idea let's discuss it. Just drop us an email or call and we'll find a suitable time for a meeting.</p>
                                </div> 
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="contact2">
                                    <input placeholder="email or phone" />
                                    <Button variant="light" className="contact-btn">Contact Me</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                        <img src={Img} alt=" Contact Us" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
