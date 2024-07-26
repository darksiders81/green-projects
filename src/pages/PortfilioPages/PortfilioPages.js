import React from 'react'
import HeaderPages from '../../Component/HeaderPages/HeaderPages'

import FAQ from '../../Component/FAQ/FAQ'
import Contatc from '../../Component/Contact/Contatc'
import Footer from '../../Component/Footer/Footer'
import OurServices from '../../Component/Serveses/OurServices'
import Portfolio from '../../Component/PORTFOLIO/Portfolio'



export default function PortfilioPages() {
    return (
        <div className='bg-color'>
            <HeaderPages route="PORTFOLIO" title="Our Portfolio" />
            <div style={{ marginTop: 200 }}>
                <Portfolio />
                <FAQ />
                <Contatc />
                <Footer />
            </div>
        </div>
    )
}
