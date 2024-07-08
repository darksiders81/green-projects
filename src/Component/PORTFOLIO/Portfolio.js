import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import { FaEye } from "react-icons/fa";
import './Portfolio.css'
import CardPortfolio from './CardPortfolio';
export default function Portfolio() {

    const [cardInfo, setCardInfo] = useState([
        {id: 1, title: 'TANSIAPP', desc: 'Mobile Application', hasht: ['#React', ' #HTML', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/1.jpg'},
        { id: 2, title: 'TANSIAPP', desc: 'Mobile Application', hasht: ['#Js', ' #HTML', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/2.jpg' },
        { id: 3, title: 'IMOLAS', desc: 'Mobile Application', hasht: ['#Redux', ' #HTML', '#Next_js', '#Gsap'], images: 'https://erramix-themes.com/techidaa/images/portfolio/3.jpg' },
        { id: 4, title: 'TANSIAPP', desc: 'Mobile Application', hasht: ['#React', ' #HTML', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/4.png' },
        { id: 5, title: 'TAKNARUYTAPP', desc: 'Web Application', hasht: ['#React', ' #PHP', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/5.jpeg' },
        { id: 6, title: 'BODIHAPP', desc: 'Mobile Application', hasht: ['#React', ' #HTML', '#Ruby', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/6.jpg' }
    ])

    return (

        <>

            <Container className="mt-5 pt-5">
                <h4 className="text-green">PORTFOLIO</h4>
                <Row>
                    <Col lg={10} xs={12} className="mb-1">
                        <h1 style={{ fontSize: '50px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>Our Portfolio</h1>
                    </Col>
                    <Col lg={7} xs={12}>
                        <ul className="portList">
                            <li className='portListItem'>All</li>
                            <li className='portListItem'>Mobile</li>
                            <li className='portListItem'>Data</li>
                            <li className='portListItem'>Web</li>
                        </ul>
                    </Col>
                </Row>

                <Row className='g-3'>
                    {cardInfo.map(card => (
                        <CardPortfolio {...card} />
                    ))}
                </Row>



            </Container >


        </>
    )
}
