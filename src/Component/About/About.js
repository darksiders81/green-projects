import React, { useState } from 'react'
import One from './section one/One'
import Two from './section two/Two'
import Tree from './section tree/Tree'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {






    return (
        <div className='my-3'>
            <One className='mt-5' />
            <Two className='mt-5' />
            <Tree className='my-5' />
            <Container fluid className='bg-dark'>
                <Container >
                    <Row className='text-center py-5 text-light'>
                        <Col lg={3} xs={6} className='mb-4 my-lg-0'>
                            <Row>
                                <h1 className='text-green fw-bolder'>{Math.floor(Math.random() * 500)}</h1>
                                <h4 className='fw-bold mt-lg-4 '>Happy Clients</h4>
                            </Row>

                        </Col >
                        <Col xs={6} lg={3} className='mb-4 my-lg-0'>
                            <Row>
                                <h1 className='text-green  fw-bolder'>{Math.floor(Math.random() * 60)}</h1>
                                <h4 className='fw-bold mt-lg-4'>Hard Worker</h4>
                            </Row>


                        </Col>
                        <Col lg={3} xs={6} className='mt-4 my-lg-0'>
                            <Row>
                                <h1 className='text-green  fw-bolder'>{Math.floor(Math.random() * 800)}</h1>
                                <h4 className='fw-bold mt-lg-4'>Complete Project</h4>
                            </Row>



                        </Col>
                        <Col lg={3} xs={6} className='mt-4 my-lg-0'>
                            <Row>
                                <h1 className='text-green  fw-bolder' >{Math.floor(Math.random() * 20)}</h1>
                                <h4 className='fw-bold mt-lg-4'>Years Of Exprience</h4>
                            </Row>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
