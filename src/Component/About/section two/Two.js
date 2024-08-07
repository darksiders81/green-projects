import React, { useState } from 'react'
import { Container, Col, Row, CardGroup } from 'react-bootstrap'
import { aboutInfodatas } from '../../../data'
import CardAbout from "./CardAbout"







export default function Two(props) {
    const [infoCardAbout] = useState(aboutInfodatas)
    return (
        <>
            <Container className='my-5'>
                <Row className="px-2 justify-content-evenly align-items-center">
                    <Col lg={5} xs={12}>
                        <img className="img-fluid" src={props.image} alt="" />
                    </Col>
                    <Col lg={7} xs={12}   >
                        <Row className=' justify-content-center align-items-center'>


                            <Col lg={12} xs={12}>
                                <h1 className="text-center  titleClass display-5"
                                    style={{  fontWeight: 700, lineHeight: '65px' }}>
                                    We Deal With The Aspects Of Professional  <span className="greenTitle">IT Services</span>
                                </h1>
                            </Col>
                            <Col lg={9} xs={12}>

                                <p style={{ lineHeight: 2, fontSize: 18 }} className='text-opacity-50 text-start textBody'>
                                    Although, Final Stages Of The Internal Network Gives A Complete Experience Of
                                    The Parameter Of Speculative Environment
                                </p>



                            </Col>
                            <Row className=' '>
                                <CardGroup className='align-items-center'>
                                    {infoCardAbout.map(info => (
                                        <CardAbout {...info} />
                                    ))}
                                </CardGroup>
                            </Row>




                        </Row>

                    </Col>

                </Row>
            </Container>

        </>
    )
}
Two.defaultProps ={
    image : "https://erramix-themes.com/techidaa/images/about/2.png"
}