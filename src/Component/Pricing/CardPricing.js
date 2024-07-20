import React from 'react'
import { Col } from 'react-bootstrap'

import { TiTick } from "react-icons/ti";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import './cardPricing.css'
import BtnJoin from '../BtnJoin/BtnJoin';
export default function CardPricing(props) {
    return (
        <>
            <Col lg={3} sm={6} xs={12} className='g-4 ' >
                <div className={props.id === 3 ? 'cardItemContainer backGreen' : 'cardItemContainer'}>
                    <div className="cardItemHeader ">
                        <div className='cardsIcons'>
                            {props.icon}
                        </div>
                        <div className='cardsValue '>
                            {props.Value}
                        </div>
                        <div className='cardPrice'>
                            {props.price}
                        </div>
                        <div className='cardDist'>
                            {props.dist}
                        </div>
                    </div>
                    <div className="cardBody">
                        {props.ticks && props.ticks.map(tick => (
                            <div className='bodyContainer'>
                                <span><TiTick className='bodyIcons greenIcon' /></span> <span className='bodydisc'>{tick}</span>
                            </div>
                        ))}
                        {props.noTicks && props.noTicks.map(Noick => (
                            <div className='bodyContainer'>
                                <span><MdOutlineDoNotDisturbAlt className='bodyIcons redIcon' /></span> <span className='bodydisc'>{Noick}</span>
                            </div>
                        ))}
                    </div>
                    <div className="cardFooter">
                        <BtnJoin name='Start Now' bgcolor={props.id === 3 ? 'gray' : '#1FA84F'} style={{ color: '#F8F6F4' }} />
                    </div>
                </div>
            </Col>

        </>
    )
}
