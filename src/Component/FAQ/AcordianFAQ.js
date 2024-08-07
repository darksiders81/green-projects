import React from 'react'
import { Accordion } from 'react-bootstrap';
;
export default function AcordianFAQ(props) {

    return (
        <>
            <Accordion.Item eventKey={props.id} className='mx-2'>
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
