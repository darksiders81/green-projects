import React from 'react'
import OurServices from '../../Component/Serveses/OurServices'
import Head from '../../Component/Header/Head/Head'
import About from '../../Component/About/About'
import WhyChosse from '../../Component/Why Choose Us/WhyChosse'
import Portfolio from '../../Component/PORTFOLIO/Portfolio'

export default function Home() {
    return (
        <>
            <Head />
            <OurServices />
            <About />
            <WhyChosse />
            <Portfolio />
        </>
    )
}
