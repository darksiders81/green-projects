import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import CardWhy from './CardWhy';
import { whyChosseDatas } from '../../data';
export default function WhyChosse() {
    
    const [cardInformations, setCardInformations] = useState(whyChosseDatas)
    return (
        <>
            <Container className="mt-5 pt-5">
                <h4 className="greenTitle">WHY CHOOSE US</h4>
                <Row>
                    <Col lg={10} xs={12} className="mb-1">
                        <h1 style={{ fontSize: '50px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }} className='titleClass'> 
                            Why Our Clients Choose Us
                            </h1>
                    </Col>
                    <Col lg={7} xs={12}>
                        <p className='textBody'>
                            As A Matter Of Fact The Unification Of The Coherent Software Provides
                             A Strict Control Over The Accomplishment Of Intended Estimation
                             </p>
                    </Col>
                </Row>
                <CardGroup>
                    <Row>
                        {cardInformations.map((info) => (
                            <CardWhy {...info} />
                        ))}

                    </Row>
                </CardGroup>


            </Container >

        </>
    )
}
