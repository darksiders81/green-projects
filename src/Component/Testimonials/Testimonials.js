import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function Testimonials() {
    return (
        <>
            <Container className='my-5'>
                <Row className="mt-5  ">
                    <Col lg={6} xs={12} className="text-start" >
                        <Row>

                            <h4 className="text-green">TESTIMONIALS</h4>
                            <Col lg={12} xs={12}>
                                <h1
                                    style={{ fontSize: '40px', fontWeight: 700, lineHeight: '65px' }}>
                                    Customers Testmonials
                                </h1>
                            </Col>
                            <Col lg={10} xs={12}>

                                <p style={{ lineHeight: 2, fontSize: 18 }} className='text-opacity-50'>As A Matter Of Fact The Unification Of The Coherent Software Provides A Strict Control Over The Accomplishment Of Intended Estimation</p>

                            </Col>





                        </Row>

                    </Col>

                </Row>
            </Container>


        </>
    )
}
