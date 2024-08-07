import React, { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import './Contatc.css'
import BtnJoin from '../BtnJoin/BtnJoin';
export default function Contatc(props) {
    const [informationContent] = useState([
        { id: 1, icon: <MdEmail />, title: 'Moein.kh.dark.siders@gmail.com' },
        { id: 2, icon: <IoPhonePortrait />, title: '09939192951' },
        { id: 3, icon: <FaMapMarkerAlt />, title: 'A108 Adam Street, New York, NY 535022' },
        { id: 4, icon: <FaInstagram />, title: 'moein_py81' },
    ])
    return (
        <>
            <Container className='my-5'>
                <Row className="mt-5  ">
                    <Col lg={props.columnHead} xs={12} className={props.align} >
                        <Row>

                            <h4 className="greenTitle">CONTACT</h4>
                            <Col lg={12} xs={12}>
                                <h1 className='titleClass display-5'
                                    style={{ fontWeight: 700, lineHeight: '65px' }}>
                                    Contact Us For Any Questions
                                </h1>
                            </Col>
                            <Col lg={12} xs={12}>

                                <p
                                    style={{ lineHeight: 2, fontSize: 18 }}
                                    className='text-opacity-50 textBody'>
                                    As A Matter Of Fact The Unification Of
                                    The Coherent Software Provides A Strict
                                    Control Over The Accomplishment Of
                                    Intended Estimation
                                </p>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='align-content-center mt-4'>
                    <Col lg={6} xs={12}>
                        <h3 className='titleClass fw-bolder'>
                            Contact Info :
                        </h3>
                        {informationContent.map(infoContent => (
                            <Col lg={10} xs={10} className='d-flex  align-items-center '>
                                <span className='greenTitle' style={{ fontSize: 50 }}>{infoContent.icon}</span>
                                <p className=' fw-bold mt-5 ms-3 pb-3 textBody'> {infoContent.title}</p>
                            </Col>
                        ))}

                    </Col>
                    <Col lg={6} xs={12}>
                        <Row className='gy-3 mx-2 mx-lg-0'>
                            <Col lg={6}>
                                <input type="text" placeholder='name' className='inputName' />
                            </Col>
                            <Col lg={6}>
                                <input type="text" placeholder='subject' className='inputName' />
                            </Col>
                            <Col lg={12}>
                                <input type="email" placeholder='email' className='inputName' />
                            </Col>
                            <Col lg={12}>
                                <textarea placeholder='massege' className='textAreaInput inputName' />
                            </Col>
                            <Col lg={12}>
                                <BtnJoin name="send now" />
                            </Col>
                        </Row>

                    </Col>
                </Row>


                


            </Container>

        </>
    )
}
