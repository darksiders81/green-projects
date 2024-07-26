import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function HeaderPages(props) {
    return (
        <>
            <Container fluid className='bg-dark text-light pt-5 mt-5'>
                <Container>
                    <Row>
                        <h5 className='fs-4'>Home / {props.route}</h5>
                    </Row>
                    <Row className='my-3'>
                        <h1 className='display-3 pb-2 fw-bold'>
                            {props.title}
                        </h1>
                    </Row>
                    <Row>
                        <p className='fs-5 '>
                            Although, Final Stages Of The Internal Network
                            Gives A Complete Experience
                            Of The Parameter Of Speculative Environment
                        </p>
                    </Row>
                </Container>
            </Container>

        </>
    )
}
