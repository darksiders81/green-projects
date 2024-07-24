import React from 'react'
import Head from '../../Component/Header/Head/Head'
import OurServices from '../../Component/Serveses/OurServices'
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
export default function Home2() {
    return (
        <div className='bg-color'>
            <Head isImage={false} alignText="text-center classStyle" ColumnCon={6} />
            <OurServices columnHead={12} align="text-center" />
            <About />
            <WhyChosse columnHead={12} align="text-center" />
            <Portfolio columnHead={12} align="text-center" />
            <Pricing columnHead={12} align="text-center" />
            <Testimonials columnHead={12} align="text-center" />
            <Teams columnHead={12} align="text-center" />
            <Blog columnHead={12} align="text-center" />
            <FAQ columnHead={12} align="text-center" />
            <Contatc columnHead={12} align="text-center" />
            <Footer />
        </div>
    )
}
