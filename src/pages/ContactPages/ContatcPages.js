import React from 'react'
import HeaderPages from '../../Component/HeaderPages/HeaderPages'

import FAQ from '../../Component/FAQ/FAQ'
import Contatc from '../../Component/Contact/Contatc'
import Footer from '../../Component/Footer/Footer'





export default function ContatcPages() {
    return (
        <div className='bg-color'>
            <HeaderPages route="CONTACT" title="Contact Us" />
            <div style={{ marginTop: 200 }}>
                <Contatc />
                <FAQ />

                <Footer />
            </div>
        </div>
    )
}
