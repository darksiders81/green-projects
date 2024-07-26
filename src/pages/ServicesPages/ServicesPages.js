import React from 'react'
import HeaderPages from '../../Component/HeaderPages/HeaderPages'

import FAQ from '../../Component/FAQ/FAQ'
import Contatc from '../../Component/Contact/Contatc'
import Footer from '../../Component/Footer/Footer'
import OurServices from '../../Component/Serveses/OurServices'




export default function ServicesPages() {
    return (
        <div className='bg-color'>
            <HeaderPages route="SERVICES" title="Our Services" />
            <div style={{ marginTop: 200 }}>
                <OurServices />
                <FAQ />
                <Contatc />
                <Footer />
            </div>
        </div>
    )
}
