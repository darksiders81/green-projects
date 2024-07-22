import React from 'react'
import { Accordion } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
export default function AcordianFAQ(props) {

    return (
        <>
            <Accordion.Item eventKey={props.id}>
                <Accordion.Header >
                    {props.title}
                    
                </Accordion.Header>
                <Accordion.Body className='textBody'>
                    {props.FAQdist}
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}
