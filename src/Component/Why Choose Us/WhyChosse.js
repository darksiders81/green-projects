import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import CardWhy from './CardWhy';

export default function WhyChosse() {
    let dest = 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur'
    const [cardInformations, setCardInformations] = useState([
        { id: 1, numberTitle: '01.', title: 'Latest Technologies', dest },
        { id: 2, numberTitle: '02.', title: 'Uniqe Solutions', dest },
        { id: 3, numberTitle: '03.', title: 'Powerful Strategies', dest }
    ])
    return (
        <>
            <Container className="mt-5 pt-5">
                <h4 className="text-green">WHY CHOOSE US</h4>
                <Row>
                    <Col lg={10} xs={12} className="mb-1">
                        <h1 style={{ fontSize: '50px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>Why Our Clients Choose Us</h1>
                    </Col>
                    <Col lg={7} xs={12}>
                        <p>As A Matter Of Fact The Unification Of The Coherent Software Provides A Strict Control Over The Accomplishment Of Intended Estimation</p>
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
