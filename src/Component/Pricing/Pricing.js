import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";

import { pricingData } from '../../data';
import CardPricing from './CardPricing';
export default function Pricing(props) {
    const [cardPricingInfo] = useState(pricingData)
    return (
        <>

            <Container className="mt-5 pt-5">
                <h4 className={`greenTitle ${props.align}`}>PRICING</h4>
                <Row className={props.align}>
                    <Col lg={props.columnHead} xs={12} className="mb-1">
                        <h1 style={{  wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }} className='titleClass display-5'>Our Pricing</h1>
                    </Col>
                    <Col lg={props.columnHead} xs={12}>
                        <p className='textBody'>
                            As A Matter Of Fact The Unification Of The Coherent
                            Software Provides A Strict Control Over The Accomplishment
                            Of Intended Estimation
                        </p>
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
