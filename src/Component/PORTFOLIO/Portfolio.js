import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { portfolioData } from '../../data';
import './Portfolio.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardPortfolio from './CardPortfolio';
export default function Portfolio() {

    const [cardInfo] = useState(portfolioData)
    const [key, setKey] = useState('all');
    return (

        <>

            <Container className="mt-5 pt-5">
                <h4 className="greenTitle">PORTFOLIO</h4>
                <Row>
                    <Col lg={10} xs={12} className="mb-1">
                        <h1 className='titleClass'
                            style={{ fontSize: '50px', wordSpacing: 10, fontWeight: 700, lineHeight: '65px' }}>
                            Our Portfolio</h1>
                    </Col>
                    <Col lg={12} xs={12}>
                        <Tabs
                            style={{ color: '#1FA84F' }}
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-2 portList"
                        >
                            <Tab style={{ color: '#1FA84F' }} eventKey="all" title="All" className='portListItem '>

                            </Tab>
                            <Tab style={{ color: '#1FA84F' }} eventKey="mobile" title="Mobile" className='portListItem'>

                            </Tab>
                            <Tab style={{ color: '#1FA84F' }} eventKey="data" title="Data" className='portListItem'>

                            </Tab>
                            <Tab style={{ color: '#1FA84F' }} eventKey="web" title="Web" className='portListItem'>

                            </Tab>
                        </Tabs>








                    </Col>
                </Row>

                <Row className='g-3'>
                    {key === 'all' && cardInfo.map(card => (
                        <CardPortfolio {...card} />
                    ))}
                    {key === 'mobile' && cardInfo.map(card => (
                        card.desc === 'Mobile Application' && <CardPortfolio {...card} />
                    ))}
                    {key === 'data' && cardInfo.map(card => (
                        card.desc === 'Data' && <CardPortfolio {...card} />
                    ))}
                    {key === 'web' && cardInfo.map(card => (
                        card.desc === 'Web Application' && <CardPortfolio {...card} />
                    ))}
                </Row>



            </Container >


        </>
    )
}
