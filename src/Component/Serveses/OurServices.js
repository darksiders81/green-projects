import { Container, Row, Col } from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';
import CardSer from "./Card/CardSer";
import { useState } from "react";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoBugSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";

function OurServices() {
    let decs = 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur'
    const [cardInformation, setCardInformation] = useState([
        { id: 1, title: 'Web Developement', icons: <IoCodeSlashOutline />, decs, link: '#action1' },
        { id: 2, title: 'Digital Marketing', icons: <HiSpeakerphone />, decs, link: '#action2' },
        { id: 3, title: 'SEO Services', icons: <FaSearch />, decs, link: '#action3' },
        { id: 4, title: 'Cyber Security', icons: <IoBugSharp />, decs, link: '#action4' },
        { id: 5, title: 'Graphic Design', icons: <IoIosColorPalette />, decs, link: '#action5' },
        { id: 6, title: 'Apps Developement', icons: <IoLogoAndroid />, decs, link: '#action6' }
    ])



    return (
        <>

            <Container className="mt-5 pt-5">
                <h4 className="text-green">OUR SERVICES</h4>
                <Row>
                    <Col lg={10} xs={12} className="mb-1">
                        <h1 style={{ fontSize: '50px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>What We’re Offering?</h1>
                    </Col>
                    <Col lg={7} xs={12}>
                        <p>As A Matter Of Fact The Unification Of The Coherent Software Provides A Strict Control Over The Accomplishment Of Intended Estimation</p>
                    </Col>
                </Row>
                <CardGroup>
                    <Row>
                        {cardInformation.map(card => (

                            <CardSer {...card} />

                        ))}

                    </Row>
                </CardGroup>


            </Container >


        </>
    )
}
export default OurServices;