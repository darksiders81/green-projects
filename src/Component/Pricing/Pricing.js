import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";

import { pricingData } from '../../data';
import CardPricing from './CardPricing';
export default function Pricing() {
    const [cardPricingInfo, setCardPricingInfo] = useState(pricingData)
    return (
        <>

            <Container className="mt-5 pt-5">
                <h4 className="text-green">PRICING</h4>
                <Row>
                    <Col lg={10} xs={12} className="mb-1">
                        <h1 style={{ fontSize: '50px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>Our Pricing</h1>
                    </Col>
                    <Col lg={7} xs={12}>
                        <p>As A Matter Of Fact The Unification Of The Coherent Software Provides A Strict Control Over The Accomplishment Of Intended Estimation</p>
                    </Col>
                </Row>

                <Row className='g-4 mx-auto'>
                    {cardPricingInfo.map(info => (
                        <CardPricing key={info.id} {...info} />
                    ))}

                </Row>



            </Container >


        </>
    )
}
