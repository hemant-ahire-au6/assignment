import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Team1 from '../asset/Team1.png'
import Team2 from '../asset/Team2.png'
import Team3 from '../asset/Team3.png'

function Team() {
    return (

        <div className="team">

            <Container>
                <Row style={{ margin: "20px 0 20px 0" }}>
                    <Col>
                        <h1 style={{ fontFamily: "poppins,semibold", fontSize: "50px" }}>Leadership Team.</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <Card
                            style={{ width: '18rem', marginLeft: "auto", marginRight: "auto", display: "block" }}
                            className="border-0 center">
                            <Card.Img variant="top" src={Team1} />
                            <Card.Body>
                                <Card.Text>
                                    <div className="details">
                                        <h3>Name</h3>
                                        <p>CEO,Founder</p>
                                        <span>Linkind</span>
                                    </div>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ width: '18rem', marginLeft: "auto", marginRight: "auto", display: "block" }}
                            className="border-0">
                            <Card.Img variant="top" src={Team2} />
                            <Card.Body>
                                <Card.Text>
                                <div className="details">
                                        <h3>Name</h3>
                                        <p>CEO,Founder</p>
                                        <span>Linkind</span>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card style={{ width: '18rem', marginLeft: "auto", marginRight: "auto", display: "block" }}
                            className="border-0">
                            <Card.Img variant="top" src={Team3} />
                            <Card.Body>
                                <Card.Text>
                                <div className="details">
                                        <h3>Name</h3>
                                        <p>CEO,Founder</p>
                                        <span>Linkind</span>
                                    </div>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}

export default Team
