import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Img from '../asset/work.png'

function Work() {
    return (
        <div className="work">
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <h1 style={{marginBottom:"20px"}}>Engineering <br/> Impact</h1>
                            <p>
                            Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Bibendum est ultricies integer quis.
                             Iaculis urna id volutpat lacus laoreet. 
                             Mauris vitae ultricies leo integer malesuada. 
                             Ac odio tempor orci dapibus ultrices in. Egestas diam
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2">
                            <img src={Img} alt="Our expertise"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Work;
