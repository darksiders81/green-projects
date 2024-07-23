import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import './Footer.css'
import UlFooter from './UlFooter';
export default function Footer() {
    let SiteMap = ['Home', 'About', 'Services', 'Contact']
    let FollowUs = ['Facebook', 'Instagram', 'Linkedin', 'X']
    let OurServices = ['Digital Marketing', 'Web Developement', 'Cyber Security', 'Graphic Design']
    return (
        <Container className='footerContaner' fluid>
            <Container >
                <Row >
                    <Col lg={3} sm={12}>
                        <div className="containerBox">
                            <div className='headerBox'>
                                <Row>
                                    <Col lg={10}>
                                        <img src="https://erramix-themes.com/techidaa/images/logo/logo.png" width={150} alt="" />
                                    </Col>
                                    <Col lg={10}>
                                        <p className='textBox mt-2 ms-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </Col>
                                </Row>

                            </div>
                            <div className="footerBox">
                                <h4>Follow Us</h4>
                                <Row>
                                    <Col>
                                        <div className='conIcon'><FaFacebook /></div>
                                    </Col>
                                    <Col>
                                        <div className='conIcon'><FaInstagram /></div>
                                    </Col>
                                    <Col>
                                        <div className='conIcon'><FaTwitter /></div>
                                    </Col>
                                    <Col>
                                        <div className='conIcon'><FaYoutube /></div>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Col>
                    <UlFooter arr={SiteMap} title='Site Map' col={6} />
                    <UlFooter arr={FollowUs} title='Follow Us ' col={6} />
                    <UlFooter arr={OurServices} title='Our Services ' col={12} />
                </Row>
            </Container>
        </Container>
    )
}
