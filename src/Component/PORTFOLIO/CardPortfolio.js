import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { FaEye } from "react-icons/fa";
export default function CardPortfolio(props) {
    return (
        <>
            <Col xxl={4} xl={6} lg={6} xs={12} className=''  >
                <div className='cardwrapper g-1' style={{ backgroundImage: `url(${props.images})` }} >

                    <Container fluid>
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
