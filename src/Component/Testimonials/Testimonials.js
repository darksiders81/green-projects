import React, { useState } from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'
import { TestimonialsData } from '../../data'
import CardTestItem from './CardTestItem'

export default function Testimonials(props) {
    const [cardDataInfo] = useState(TestimonialsData)
    return (
        <>
            <Container className='my-5'>
                <Row className={`mt-5 ${props.align}`}>
                    <Col lg={props.columnHead} xs={12} className={props.align}>
                        <Row className={props.align}>

                            <h4 className={`greenTitle ${props.align}`}>TESTIMONIALS</h4>
                            <Col lg={12} xs={12}>
                                <h1 className='titleClass display-5'
                                    style={{  fontWeight: 700, lineHeight: '65px' }}>
                                    Customers Testmonials
                                </h1>
                            </Col>
                            <Col lg={12} xs={12}>

                                <p style={{ lineHeight: 2, fontSize: 18 }} className='text-opacity-50 textBody'>
                                    As A Matter Of Fact The Unification Of The Coherent Software Provides
                                    A Strict Control Over The Accomplishment Of Intended Estimation
                                </p>

                            </Col>
                        </Row>
                    </Col>
                </Row>

                <CardGroup>
                    <Row className='g-3'>



                        {cardDataInfo.map(info => (

                            <CardTestItem {...info} />

                        ))}




                    </Row>
                </CardGroup>





            </Container>


        </>
    )
}
