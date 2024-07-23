import React from 'react'
import { Col } from 'react-bootstrap'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
export default function UlFooter(props) {
    return (
        <>
            <Col lg={3} sm={props.col} className={props.col === 12 ? '' : 'mx-auto'}>
                <h4 className='headerUl'>{props.title}</h4>
                <ul >
                    {props.arr.map(prop => (
                        <li>
                            <a href='#' >
                                <MdOutlineKeyboardArrowRight />
                                <span className='mx-1'> {prop}</span>
                            </a>
                        </li>
                    ))}


                </ul>
            </Col>

        </>
    )
}
