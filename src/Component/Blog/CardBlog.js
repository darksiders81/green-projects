import React from 'react'
import { Col, Card, CardLink } from 'react-bootstrap'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FaUser } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { RxDrawingPinFilled } from "react-icons/rx";
export default function CardBlog(props) {
  return (
    <>
      <Col xl={4} lg={6} className='g-4 ' >
        <Card border='0' className='cardBackColor' >
          <Card.Img className='m-0' variant="top" src={props.image} />
          <Card.Body>
            <div className='d-flex justify-content-between align-content-center'>
              <div className='d-flex align-content-center'><span className='me-2'><FaUser className='greenTitle' /></span><p className='mt-1 textBody'>{props.writer}</p></div>
              <div className='d-flex align-content-center'><span className='me-2'><MdOutlineDateRange className='greenTitle' /></span><p className='mt-1 textBody'>{props.category}</p></div>
              <div className='d-flex align-content-center'><span className='me-2'><RxDrawingPinFilled className='greenTitle' /></span><p className='mt-1 textBody'>{props.date}</p></div>
            </div>
            <Card.Title className="titleClass" style={{ fontSize: 25, fontWeight: 'bold' }}>{props.title}</Card.Title>
            <Card.Text className="textBody" style={{ fontSize: 15, lineHeight: 2, fontWeight: 600, opacity: '60%' }}>
              {props.decrption}
            </Card.Text>
            <CardLink style={{ textDecoration: 'none' }}>
              <h4 className='greenTitle'>Read more <FaArrowRightLong /></h4>
            </CardLink>
          </Card.Body>

        </Card>
      </Col>

    </>
  )
}
