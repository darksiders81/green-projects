import React, { useState } from 'react'
import { Col, Container, Row, CardGroup } from 'react-bootstrap'
import { teamDatas } from '../../data'
import './Team.css'
import CardsTeams from './CardsTeams'
export default function Teams(props) {
    const [cardsteamInfo] = useState(teamDatas)
    return (
        <Container className='my-5'>
            <Row className="mt-5  ">
                <Col lg={props.columnHead} xs={12} className="text-start" >
                    <Row>

                        <h4 className={`greenTitle ${props.align}`}>TEAM</h4>
                        <Col lg={12} xs={12} className={props.align}>
                            <h1 className='titleClass'
                                style={{ fontSize: '40px', fontWeight: 700, lineHeight: '65px' }}>
                                Our Team
                            </h1>
                        </Col>
                        <Col lg={12} xs={12} className={props.align}>

                            <p
                                style={{ lineHeight: 2, fontSize: 18 }}
                                className='text-opacity-50 textBody'>
                                As A Matter Of Fact The Unification Of The Coherent Software Provides
                                A Strict Control Over The Accomplishment Of Intended Estimation
                            </p>

                        </Col>
                    </Row>
                </Col>
            </Row>

            <CardGroup className='container'>
                <Row className='mx-auto ' >


                    {
                        cardsteamInfo.map(card => (
                            <CardsTeams {...card} />
                        ))
                    }




                </Row>
            </CardGroup>





        </Container>
    )
}
