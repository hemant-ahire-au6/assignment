import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Img from '../asset/Group 69.svg'


function Contact() {
    return (
        <div>
            <Container id="contact">
                <Row >
                    <Col md={8} lg={true}>
                        <Row>
                            <Col lg={true}>
                                <h1>Feel Free to get in touch with us</h1>
                                <p>If you have an idea let's discuss it. Just drop us an email or call and we'll find a suitable time for a meeting.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input placeholder="email or phone"/>
                                <button>Contact Me</button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={4}>
                    <img src={Img}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;
