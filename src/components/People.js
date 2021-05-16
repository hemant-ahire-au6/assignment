import React from 'react'
import { Container} from 'react-bootstrap'
import People1 from "../asset/Rectangle 53.png"
import People2 from "../asset/Rectangle 54.png"



function People() {
    return (
        <div className="people">
            <Container>
              <div>
                  <h1>Our People</h1>
              </div>
              <div className="horizontal_slider">
                    <div className="slider_container">
                        <div className="item ">
                            <img class="img-fluid" src={People1} alt="Our Team"/>
                        </div>
                        <div className="item">
                            <img class="img-fluid" src={People2} alt="Our Team"/>
                        </div>
                        <div className="item">
                            <img class="img-fluid" src={People2} alt="Our Team"/>
                        </div>
                    </div>
              </div>
            </Container>
        </div>
    )
}

export default People;
