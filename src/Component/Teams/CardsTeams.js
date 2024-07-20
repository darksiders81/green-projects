import React, { useState } from 'react'
import { Card, Col } from 'react-bootstrap'
import { iconsTeamSocial } from '../../data'
export default function CardsTeams(props) {
    const [allIcon, setAllIcon] = useState(iconsTeamSocial)
    return (
        <Col xxl={3} xl={3} lg={4} md={6} sm={12} xs={12} >
            <Card className='border-0 cardTeam mx-auto my-2 g-2 w-100' >
                <Card.Img className='m-0' variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title className='text-center fw-bolder titleClass'>{props.name}</Card.Title>
                    <Card.Text className='text-center fw-medium textBody'>
                        {props.job}

                        <div className="iconContainer my-2">
                            {allIcon.map(icon => (
                                <span className='iconsso'>
                                    <a href='#action'>
                                        {icon.icon}
                                    </a>
                                </span>
                            ))}
                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
        </Col>
    )
}
