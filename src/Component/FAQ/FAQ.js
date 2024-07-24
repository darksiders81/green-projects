import React, { useState } from 'react'
import { Container, Col, Row, Accordion } from 'react-bootstrap'
import AcordianFAQ from './AcordianFAQ'

import './FAQ.css'
export default function FAQ(props) {

    let FAQdist = `Lorem Ipsum, Dolor Sit Amet
     Consectetur Adipisicing Elit. Ipsum Ullam Earum Itaque,
     Quas Labore Illo Eligendi Iure Asperiores,
     Modi Veniam Molestiae Vero Quasi. Ex, Alias
      Modi Voluptates Aspernatur Consequuntur Facere?`
    const [infoAcordian] = useState([
        { id: 0, title: 'Do You Offer Both On-Site And Remote IT Support?', FAQdist },
        { id: 1, title: 'What Is Techida ?', FAQdist },
        { id: 2, title: 'Is There Any Updates In The Future ?', FAQdist },
        { id: 3, title: 'How Much For The Service?', FAQdist }
    ])

    return (
        <>
            <Container className='my-5'>
                <Row className="mt-5  ">
                    <Col lg={props.ColumnHead} xs={12} className={props.align} >
                        <Row>

                            <h4 className="greenTitle">FAQ</h4>
                            <Col lg={12} xs={12}>
                                <h1 className='titleClass'
                                    style={{ fontSize: '40px', fontWeight: 700, lineHeight: '65px' }}>
                                    Frequently Asked Questions
                                </h1>
                            </Col>
                            <Col lg={12} xs={12}>

                                <p
                                    style={{ lineHeight: 2, fontSize: 18 }}
                                    className='text-opacity-50 textBody'>
                                    As A Matter Of Fact The Unification Of
                                    The Coherent Software Provides A Strict
                                    Control Over The Accomplishment Of
                                    Intended Estimation
                                </p>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='align-content-center'>
                    <Col lg={6} xs={12}>
                        <img className="img-fluid" src="https://erramix-themes.com/techidaa/images/faq/customer.png" alt="" />
                    </Col>
                    <Col lg={6} xs={12}>
                        <Accordion flush>
                            {infoAcordian.map(info => (
                                <AcordianFAQ {...info} />
                            ))}
                        </Accordion>


                    </Col>
                </Row>






            </Container>

        </>
    )
}
