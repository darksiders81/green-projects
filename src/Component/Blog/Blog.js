import React, { useState } from 'react'
import { blogDatas } from '../../data'
import { Container, Row, Col, CardGroup } from 'react-bootstrap'
import CardBlog from './CardBlog'
export default function Blog(props) {
  const [postData, setPostData] = useState(blogDatas)
  return (
    <>
      <Container className='my-5'>
        <Row className="mt-5  ">
          <Col lg={props.columnHead} xs={12} className={props.align} >
            <Row>

              <h4 className="greenTitle">BLOG</h4>
              <Col lg={12} xs={12}>
                <h1 className='titleClass display-5'
                  style={{ fontWeight: 700, lineHeight: '65px' }}>
                  Our Blog
                </h1>
              </Col>
              <Col lg={12} xs={12} className={props.align}>

                <p
                  style={{ lineHeight: 2, fontSize: 18 }}
                  className='text-opacity-50 textBody'>
                  As A Matter Of Fact The Unification Of The Coherent Software Provides A
                  Strict Control Over The Accomplishment Of Intended Estimation
                </p>

              </Col>
            </Row>
          </Col>
        </Row>

        <CardGroup className='container'>
          <Row className='mx-auto ' >

            {
              postData.map(post => (
                <CardBlog {...post} />
              ))
            }





          </Row>
        </CardGroup>





      </Container>

    </>
  )
}
