import React, { useState } from 'react'
import { Container } from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';
import DropdownCMP from './DropdownCMP';
import { FaMoon } from "react-icons/fa";
import BtnJoin from '../../BtnJoin/BtnJoin';
function NavBars() {
    const Home = [
        { id: 1, title: 'Home1' },
        { id: 2, title: 'Home2' },
        { id: 3, title: 'Home3' },
        { id: 4, title: 'Home RTL' }
    ]
    const pages = [
        { id: 1, title: '404 pages' },
        { id: 2, title: 'Blog' },
        { id: 3, title: 'About' },
        { id: 4, title: 'Services' },
        { id: 5, title: 'Portfolio' },
        { id: 6, title: 'Contact' },
        { id: 7, title: 'Login Page' },
        { id: 8, title: 'Register' },
        { id: 9, title: 'Portfolio Singles' },
        { id: 10, title: 'Privacy Policy' },
        { id: 11, title: 'Terms Of Use' },
    ]
    const allNavLinks = [
        { id: 1, title: 'About', link: '#About' },
        { id: 2, title: 'Services', link: '#Services' },
        { id: 3, title: 'Portfolio', link: '#Portfolio' },
        { id: 4, title: 'Blog', link: '#Blog' },
        { id: 5, title: 'Contact Us', link: '#Contact' }
    ]
    
    // style={{ backgroundColor: this.props.colors.thomeSecondry, color: this.props.colors.blackSecondry }}
    return (
        <>
            <Navbar expand="lg" className="fw-bold text-text-opacity-75 navbars">
                <Container >
                    <Navbar.Brand href="#"><img width={150} src="https://erramix-themes.com/techidaa/images/logo/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0">
                            <DropdownCMP className="hover-time" name='Home' obj={Home} />
                            {allNavLinks.map((navLink) => (
                                <Nav.Link className="hover-time" key={navLink.id} href={navLink.link}>{navLink.title}</Nav.Link>
                            ))}
                            <DropdownCMP className="hover-time" name='Pages' obj={pages} />
                        </Nav>

                        <BtnJoin className='me-1' />
                        <button className='darkMode'>
                            <FaMoon />
                        </button>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}



export default NavBars