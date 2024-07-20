import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
export default function ProgressAbout(props) {
    return (
        <div className='mb-5'>
            <div className='d-flex justify-content-between'>
                <h5 className='titleClass'>{props.title}</h5>
                <h5 className='titleClass'>{props.progressNumber}%</h5>
            </div>
            <ProgressBar variant='success' className='opacity-75' animated now={props.progressNumber} />
        </div>
    )
}
