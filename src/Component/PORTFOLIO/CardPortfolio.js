import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { FaEye } from "react-icons/fa";
export default function CardPortfolio(props) {
    return (
        <>
            <Col lg={4} xs={12} >
                <div className='cardwrapper' style={{ backgroundImage: `url(${props.images})` }} >

                    <Container>
                        <div className="cardfooter">
                            <h3 className='cardtitle'>{props.title}</h3>
                            <p className='cardsubject'>{props.desc}</p>
                            <p className='cardhash'> {props.hasht.map(hash => (
                                <span>{hash}</span>
                            ))}
                            </p>
                            <button className='w-100 cardBtn'><FaEye /> View Project</button>
                        </div>
                    </Container>
                </div>
            </Col>
        </>
    )
}