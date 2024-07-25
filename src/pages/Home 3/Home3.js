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
import HeadPage from '../../Component/HeadPage3/HeadPage'
import One from '../../Component/About/section one/One'
import Two from '../../Component/About/section two/Two'
import Tree from '../../Component/About/section tree/Tree'



export default function Home3() {
    return (
        <div className='bg-color'>
            <HeadPage />
            <OurServices />
            <One image='https://erramix-themes.com/techidaa/images/about/about-1.jpg' />
            <Two image="https://erramix-themes.com/techidaa/images/about/about-2.jpg" />
            <Tree image="https://erramix-themes.com/techidaa/images/about/about-3.jpg" />
            <WhyChosse />
            <Portfolio />
            <Pricing />
            <Testimonials columnHead={7} />
            <Teams columnHead={7} />
            <Blog columnHead={7} />
            <FAQ image="https://erramix-themes.com/techidaa/images/faq/faq.jpg" />
            <Contatc />
            <Footer />
        </div>
    )
}
