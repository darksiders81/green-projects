import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressAbout from './ProgressAbout';

export default function Tree() {


    const [progresInfo, setprogresInfo] = useState([
        { id: 1, title: 'App Development', progressNumber: 70 },
        { id: 2, title: 'UI/UX Design', progressNumber: 20 },
        { id: 3, title: 'Web Development', progressNumber: 55 }
    ])


    return (
        <>
            <Container className='my-5'>
                <Row className=" justify-content-center align-items-center">
                    <Col lg={6} xs={12} className="text-start" >
                        <Row>


                            <Col lg={11} xs={12}>
                                <h1
                                    style={{ fontSize: '40px', fontWeight: 700, lineHeight: '65px' }}>
                                    We Are Here To IT Solution With 20 Years Of   <span className="text-green">Experience</span>
                                </h1>
                            </Col>
                            <Col lg={10} xs={12}>

                                <p style={{ lineHeight: 2, fontSize: 18 }} className='text-opacity-50 mt-2'>
                                    Although, Final Stages Of The Internal Network Gives A Complete Experience
                                    Of The Parameter Of Speculative Environment</p>

                            </Col>
                            <Col lg={12}>
                                {
                                    progresInfo.map(pro => (
                                        <ProgressAbout {...pro} />
                                    ))
                                }
                            </Col>




                        </Row>

                    </Col>
                    <Col lg={6} xs={12}>
                        <img className="img-fluid" src="https://erramix-themes.com/techidaa/images/about/3.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}