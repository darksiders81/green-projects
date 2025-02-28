import React from 'react'
import { Col } from 'react-bootstrap'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import './testimonials.css'
export default function CardTestItem(props) {

    return (
        <>
            <Col lg={4} xs={12} className='mx-auto'>
                <div className="container-card bg-opacity-10 mx-3">
                    <div className='d-flex  '>
                        <div>
                            <img src={props.imgProfile} alt="" className='profileImages' />
                        </div>
                        <div className='d-flex flex-column cards-name'>
                            <h5 className='userCard titleClass'>{props.fullName}</h5>
                            <div className='starIcons'>
                                <span>{
                                    props.starFull.map(star => (
                                        <MdOutlineStar style={{ color: 'gold' }} />
                                    ))
                                }</span>
                                <span>{
                                    props.startHalf.map(star => (
                                        <MdOutlineStarHalf style={{ color: 'gold' }} />
                                    ))
                                }</span>
                                <span>{
                                    props.starEmty.map(star => (
                                        <MdOutlineStarOutline style={{ color: 'gold' }} />
                                    ))
                                }</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body fw-normal mt-2 p-3 text-center textBody " >
                        {props.comLorem}
                    </div>


                </div>

            </Col>

        </>
    )
}
