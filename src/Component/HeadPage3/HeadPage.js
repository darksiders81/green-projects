import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './HeadPage.css'
export default function HeadPage() {

    return (
        <>
            <Container className='mt-5 pt-5'>
                <Row className='pt-5 mt-4'>
                    <Col lg={6} className='mb-5'>
                        <h1 className='titleClass fw-bold fs-1 '>
                            Make Your Life Easier With Help From
                        </h1>
                        <h1 className='greenTitle fw-bolder fs-1'>
                            Techida
                        </h1>

                    </Col>
                    <Col lg={6}>
                        <p className='textBody d-flex  '>
                            In Today's Fast-Paced World, Technology Is Constantly Evolving,
                            And Keeping Up With These Changes Can Be Challenging.
                            That's Where We Come In. Our Team Of Expert
                            Technicians And Engineers Stay Ahead Of The Curve, So You Don't Have To.
                        </p>
                        <Row lg={6}>
                            <Col>
                                <div className='IconForPage3'><FaFacebook /></div>
                            </Col>
                            <Col>
                                <div className='IconForPage3'><FaInstagram /></div>
                            </Col>
                            <Col>
                                <div className='IconForPage3'><FaTwitter /></div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row className='d-flex text-center'>
                    <Col lg={3}>
                        <img className='img-fluid img-head' src="https://erramix-themes.com/techidaa/images/hero/1.jpg" alt="" />
                    </Col>
                    <Col lg={6}>
                        <img className='img-fluid img-head' src="https://erramix-themes.com/techidaa/images/hero/2.jpg" alt="" />
                    </Col>
                    <Col lg={3}>
                        <img className='img-fluid img-head' src="https://erramix-themes.com/techidaa/images/hero/3.jpg" alt="" />
                    </Col>
                </Row>
                <Row className='d-flex justify-content-between my-5 py-5 mx-auto'>
                    <Col lg={4} xs={6} className='text-center'>
                        <h1 className='greenTitle'>{Math.floor(Math.random() * 100)}</h1>
                        <h5 className='textBody'>Years Of Experience</h5>
                    </Col>
                    <Col lg={4} xs={6} className='text-center'>
                        <h1 className='greenTitle'>{Math.floor(Math.random() * 100)}</h1>
                        <h5 className='textBody'>Seccessfully Completed Projects</h5>
                    </Col>
                    <Col lg={4} xs={6} className='text-center mx-auto mt-4 mt-lg-0 mx-lg-0'>
                        <h1 className='greenTitle'>{Math.floor(Math.random() * 100)}</h1>
                        <h5 className='textBody'>Global Clients</h5>
                    </Col>
                </Row>

            </Container>
        </>
    )
}
