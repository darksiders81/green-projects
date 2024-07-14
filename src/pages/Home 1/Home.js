import React from 'react'
import OurServices from '../../Component/Serveses/OurServices'
import Head from '../../Component/Header/Head/Head'
import About from '../../Component/About/About'
import WhyChosse from '../../Component/Why Choose Us/WhyChosse'
import Portfolio from '../../Component/PORTFOLIO/Portfolio'
import Pricing from '../../Component/Pricing/Pricing'
import Testimonials from '../../Component/Testimonials/Testimonials'

export default function Home() {
    return (
        <>
            <Head />
            <OurServices />
            <About />
            <WhyChosse />
            <Portfolio />
            <Pricing />
            <Testimonials />
        </>
    )
}
