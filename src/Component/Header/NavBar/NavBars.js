import React from 'react'
import { Container, NavLink } from "react-bootstrap";
import { Nav, Navbar } from 'react-bootstrap';
import DropdownCMP from './DropdownCMP';

import BtnJoin from '../../BtnJoin/BtnJoin';
import './NavBar.css'
import { Link } from 'react-router-dom';
import useDarkMode from '../../../hook/useDarkMode';
import { MdLightMode, MdDarkMode } from "react-icons/md";

function NavBars() {

    const [isDark, setIsDark] = useDarkMode()
    const clickHandler = () => {
        if (isDark === 'dark') {

            setIsDark('light')
        } else {

            setIsDark('dark')
        }
    }
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
        <div className='containerNav'>
            <Navbar fixed='top' expand="lg" className='fw-bold text-text-opacity-75 navbars'
            >
                <Container >
                    <Navbar.Brand href="#"><img width={150} src="https://erramix-themes.com/techidaa/images/logo/logo.png" alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0">
                            <DropdownCMP name='Home' obj={Home} />
                            {allNavLinks.map((navLink) => (
                                <Link key={navLink.id} to={navLink.link}>
                                    <NavLink href=''>{navLink.title}</NavLink>
                                </Link>
                            ))}
                            <DropdownCMP name='Pages' obj={pages} />
                        </Nav>

                        <BtnJoin className='me-1' />
                        <button className='darkMode ' onClick={clickHandler}>
                            {isDark === 'dark' ? <MdLightMode /> : <MdDarkMode />}
                        </button>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}



export default NavBars