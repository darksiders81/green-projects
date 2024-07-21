import React from 'react'
import { Card, Col } from 'react-bootstrap'
export default function CardAbout(props) {
    return (
        <>
            <Col xxl={6} xl={6} lg={10} xs={12} sm={12}  >
                <Card border='0' className='transaction-card m-2 align-self-center' >
                    <Card.Body className='m-2 align-content-center'>
                        <span className='me-3'> {props.icon}</span> <h6 className='d-inline fw-bold mb-1 titleClass'>{props.title}</h6>

                    </Card.Body>

                </Card>
            </Col>

        </>
    )
}
