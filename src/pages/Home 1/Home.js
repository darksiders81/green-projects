import React from 'react'
import OurServices from '../../Component/Serveses/OurServices'
import Head from '../../Component/Header/Head/Head'
import About from '../../Component/About/About'
import WhyChosse from '../../Component/Why Choose Us/WhyChosse'
import Portfolio from '../../Component/PORTFOLIO/Portfolio'
import Pricing from '../../Component/Pricing/Pricing'
import Testimonials from '../../Component/Testimonials/Testimonials'
import Teams from '../../Component/Teams/Teams'
import Blog from '../../Component/Blog/Blog'
import FAQ from '../../Component/FAQ/FAQ'
import Contatc from '../../Component/Contact/Contatc'
import Footer from '../../Component/Footer/Footer'

export default function Home() {

    return (
        <div className='bg-color'>
            <Head isImage={true} alignText="text-start pageOneStyle" ColumnCon={5} Column={12} />
            <OurServices />
            <About />
            <WhyChosse />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <Teams />
            <Blog />
            <FAQ />
            <Contatc />
            <Footer />
        </div>
    )
}
