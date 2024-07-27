import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BtnJoin from '../../Component/BtnJoin/BtnJoin'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <Container className='bg-color' fluid>
            <Container className='align-items-center mt-5 pt-5 justify-content-center'>
                <Row>
                    <img style={{ width: 800 }} className='img-fluid mx-auto' src="https://erramix-themes.com/techidaa/images/404/404.png" alt="" />
                </Row>
                <Row>
                    <h1 className='text-center fw-bolder display-1 titleClass'>PAGE NOT FOUND</h1>
                </Row>
                <Row className='mt-5'>
                    <p className='text-center fs-5 textBody'>Sorry, We Can't Find What You Search For, We All Have Bad Days</p>
                </Row>
                <Row className='text-center'>
                    <Col className='pt-4'>
                        <Link to='/' className='textBody'>
                            <BtnJoin name="Go To Home Page" />
                        </Link>
                    </Col>
                </Row>

            </Container>

        </Container>
    )
}
