import React from 'react'
import HeaderPages from '../../Component/HeaderPages/HeaderPages'
import About from '../../Component/About/About'
import FAQ from '../../Component/FAQ/FAQ'
import Contatc from '../../Component/Contact/Contatc'
import Footer from '../../Component/Footer/Footer'





export default function AboutUs() {
    return (
        <div className='bg-color'>
            <HeaderPages route="ABOUT" title="About Us" />
            <div style={{ marginTop: 200 }}>
                <About />
                <FAQ />
                <Contatc />
                <Footer />
            </div>
        </div>
    )
}
