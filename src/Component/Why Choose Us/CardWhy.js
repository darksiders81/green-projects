import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col, CardLink } from "react-bootstrap";

export default function CardWhy(props) {
    return (
        <>
            <Col lg={4} className='g-4 ' >
                <Card border='0' className='transaction-card' >
                    <h1 className='titlenumber' style={{ fontSize: 55, paddingTop: 22, paddingLeft: 18 }} >
                        {props.numberTitle}
                    </h1>
                    <Card.Body>
                        <Card.Title style={{ fontSize: 28, fontWeight: 'bolder' }}>{props.title}</Card.Title>
                        <Card.Text style={{ fontSize: 15, lineHeight: 2 }}>
                            {props.dest}
                        </Card.Text>
                        <CardLink style={{ textDecoration: 'none' }}>

                        </CardLink>
                    </Card.Body>

                </Card>
            </Col>
        </>
    )
}
