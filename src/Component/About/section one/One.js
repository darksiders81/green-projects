import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BtnJoin from '../../BtnJoin/BtnJoin'

export default function One(props) {
    return (
        <>
            <Container className='my-5'>
                <Row className="mt-5 justify-content-center align-items-center sectionone ">
                    <Col lg={6} xs={12} className="text-center text-lg-start" >
                        <Row>

                            <h4 className="greenTitle">About US</h4>
                            <Col lg={12} xs={18}>
                                <h1 className='titleClass display-5'
                                    style={{ fontWeight: 700, lineHeight: '65px' }}>
                                    The Best IT Solution Since  <span className="greenTitle">2015</span>
                                </h1>
                            </Col>
                            <Col lg={10} xs={12}>

                                <p style={{ lineHeight: 2, fontSize: 18 }} className='text-opacity-50 textBody'>
                                    Although, Final Stages Of The Internal Network Gives A Complete Experience
                                    Of The Parameter Of Speculative Environment , Lorem Ipsum Dolor Sit Amet
                                    Consectetur Adipisicing Elit. Eligendi Voluptas Quibusdam Libero Quos Rem
                                    Unde, Sequi Distinctio Eum Excepturi Nobis Facere Expedita Sint Nulla Aliquam,
                                    Odio Ea Laboriosam Hic? Consectetur Ullam Eveniet
                                </p>

                            </Col>
                            <div className="btnContainer text-center">
                                <BtnJoin />


                            </div>




                        </Row>

                    </Col>
                    <Col lg={6} xs={12}>
                        <img className="img-fluid" src={props.image} alt="" />
                    </Col>
                </Row>
            </Container>

        </>
    )
}
One.defaultProps = {
    image: "https://erramix-themes.com/techidaa/images/about/1.png"
}