import React from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import Team1 from '../asset/Team1.png'
import Team2 from '../asset/Team2.png'
import Team3 from '../asset/Team3.png'

function Team() {
    return (
        <div>
            
            <Container>
                <Row>
                    <Col>
                    <h1>Leadership Team</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Img variant="top" src={Team1} />
                            <Card.Body>
                                <Card.Text>
                                   <h3>Name</h3>
                                   <p>CEO,Founder</p>
                                   <span>Linkind</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Img variant="top" src={Team2} />
                            <Card.Body>
                                <Card.Text>
                                   <h3>Name</h3>
                                   <p>CEO,Founder</p>
                                   <span>Linkind</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '18rem' }} className="border-0">
                            <Card.Img variant="top" src={Team3} />
                            <Card.Body>
                                <Card.Text>
                                   <h3>Name</h3>
                                   <p>CEO,Founder</p>
                                   <span>Linkind</span>
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
