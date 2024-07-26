import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import HeaderPages from '../../Component/HeaderPages/HeaderPages'
import FAQ from '../../Component/FAQ/FAQ'
import Contatc from '../../Component/Contact/Contatc'
import Footer from '../../Component/Footer/Footer'
import Blog from '../../Component/Blog/Blog'
import { blogDatas } from '../../data'
import CardBlog from '../../Component/Blog/CardBlog'


export default function BlogPages() {
    const [blogData] = useState(blogDatas)
    return (
        <div className='bg-color'>
            <HeaderPages route="BLOG" title="Our Blog" />
            <div style={{ marginTop: 200 }}>
                <Blog />
                <Container>
                    <Row className='mx-auto px-3 ' >

                        {
                            blogData.map(post => (
                                <CardBlog {...post} />
                            ))
                        }





                    </Row>
                </Container>
                <FAQ />
                <Contatc />
                <Footer />
            </div>
        </div>
    )
}
