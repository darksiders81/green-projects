import { Container, Row, Col , CardGroup } from "react-bootstrap";
import CardSer from "./Card/CardSer";
import { useState } from "react";
import { ourServicesDatas } from "../../data";



function OurServices() {
    
    const [cardInformation] = useState(ourServicesDatas)



    return (
        <>

            <Container className="mt-5 pt-5">
                <h4 className="greenTitle">OUR SERVICES</h4>
                <Row>
                    <Col lg={10} xs={12} className="mb-1">
                        <h1 className="titleClass" style={{ fontSize: '50px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>
                            What We’re Offering?
                            </h1>
                    </Col>
                    <Col lg={7} xs={12}>
                        <p className="textBody">
                            As A Matter Of Fact The Unification Of The Coherent Software Provides A
                             Strict Control Over The Accomplishment Of Intended Estimation
                             </p>
                    </Col>
                </Row>
                <CardGroup>
                    <Row>
                        {cardInformation.map(card => (

                            <CardSer {...card} />

                        ))}

                    </Row>
                </CardGroup>


            </Container >


        </>
    )
}
export default OurServices;